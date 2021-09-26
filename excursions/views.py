from datetime import datetime
from django.views.generic import (
    ListView,
    DetailView,
    CreateView
)
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from rest_framework.decorators import api_view, permission_classes
from .models import Excursion
from rest_framework.views import APIView
from django.http.response import JsonResponse
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import ExcursionSerializer
from rest_framework import status
from django.http import Http404


def superuser_or_agency(user):
    return user.is_superuser or user.groups.filter(name='agencies').exists()


class ExcursionView(APIView):

    def get(self, request, format=None):
        excursions = Excursion.objects.all().order_by('-start_time')
        excursions_serializer = ExcursionSerializer(excursions, many=True)
        return JsonResponse({'excursions': excursions_serializer.data})


    def post(self, request, format=None):
        excursion = request.data
        serializer = ExcursionSerializer(data=excursion)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'excursion': excursion}, status=200)
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

    def get(self, request, pk):
        excursion = get_object(pk=pk)
        serializer = ExcursionSerializer(excursion)
        return JsonResponse({'excursion': serializer.data})


    def put(self, request, pk,format=None):
        excursion = get_object(pk=pk)
        data = request.data
        serializer = ExcursionSerializer(excursion,data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'excursion': serializer.data}, status=200)
        return JsonResponse(serializer.errors,status=400)

    def delete(self, request, pk,format=None):
        excursion = get_object(pk)
        excursion.delete()
        return Response(status=200)

