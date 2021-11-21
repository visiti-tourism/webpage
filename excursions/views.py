from datetime import datetime
from django.views.generic import (
    ListView,
)
from django_filters.rest_framework import DjangoFilterBackend
from .models import Excursion, Country, City
from rest_framework.views import APIView
from django.http.response import JsonResponse
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import (ExcursionSerializer,
                          ExcursionDetailSerializer,
                          CountrySerializer,
                          CitySerializer,
                          ExcursionRestSerializer,
                          CountryRestSerializer,
                          CityRestSerializer)

from rest_framework import viewsets
from django.http import Http404


def superuser_or_agency(user):
    return user.is_superuser or user.groups.filter(name='agencies').exists()


class ExcursionView(APIView):

    filter_fields = ('name','price')

    def get(self,request,format=None):
        queryset = Excursion.objects.all()
        ef = ExcursionsFilter()
        filtered_queryset = ef.filter_queryset(request, queryset, self)
        if filtered_queryset.exists():
            serializer = ExcursionSerializer(filtered_queryset, many=True)
            return Response({'excursions':serializer.data},status=200)
        return Response(status=400)

    def post(self, request, format=None):
        excursion = request.data
        serializer = ExcursionSerializer(data=excursion)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'excursion': excursion}, status=201)
        else:
            return JsonResponse({}, status=400)


class ExcursionListView(ListView):
    model = Excursion
    template_name = 'excursions/excursions.html'
    context_object_name = 'excursions'
    ordering = ['-created']


def get_object(pk):
    try:
        return Excursion.objects.get(pk=pk)
    except Excursion.DoesNotExist:
        raise Http404


class ExcursionDetailView(APIView):

    def get(self, request, pk, format=None):
        excursion = get_object(pk=pk)
        serializer = ExcursionDetailSerializer(excursion)
        return JsonResponse({'excursion': serializer.data}, status=200)

    def put(self, request, pk, format=None):
        excursion = get_object(pk=pk)
        data = request.data
        serializer = ExcursionDetailSerializer(excursion, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'excursion': serializer.data}, status=200)
        return JsonResponse(serializer.errors, status=400)

    def delete(self, request, pk, format=None):
        excursion = get_object(pk)
        excursion.delete()
        return Response(status=200)

class ExcursionRestDetail(viewsets.ModelViewSet):
    queryset = Excursion.objects.all()
    serializer_class = ExcursionRestSerializer

class CountryView(APIView):
    def get(self,request):
        countries = Country.objects.all()
        serializer = CountrySerializer(countries, many=True)
        return JsonResponse({'countries':serializer.data},status=200)

    def post(self,request):
        country = request.data
        serializer = CountrySerializer(data = country)
        if serializer.is_valid():
            serializer.save()
            return Response(status=201)
        return Response(status=400)
class CountryRestView(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountryRestSerializer

class CityView(APIView):
    def get(self,request):
        cities = City.objects.all()
        serializer = CitySerializer(cities, many=True)
        return JsonResponse({'cities':serializer.data}, status=200)
    def post(self,request):
        city = request.data
        serializer = CitySerializer(data = city)
        if serializer.is_valid():
            return Response(status=201)
        return Response(status=400)

class CityRestView(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CityRestSerializer

class CityFilterView(APIView):
    def get(self, request, city_name):
        city = City.objects.get(name = city_name)
        if not city:
            return Response(status=404)
        excursions = Excursion.objects.filter(city=city)
        serializer = ExcursionSerializer(excursions, many=True)
        return JsonResponse({'excursions':serializer.data},status=200)

class ExcursionsFilter(DjangoFilterBackend):
    def filter_queryset(self,request,queryset,view):
        filter_class = self.get_filter_class(view,queryset)
        if filter_class:
            return filter_class(request.query_params,queryset=queryset,request=request).qs
        return queryset