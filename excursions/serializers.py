from rest_framework import serializers
from excursions.models import Excursion, Country, City


class ExcursionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Excursion
        fields = ('id',
                  'name',
                  'start_time',
                  'price',
                  'end_time',
                  'image_title')


class ExcursionDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Excursion
        fields = '__all__'

        @property
        def city(self):
            return self.city.name

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'

        def get_country(self,obj):
            return obj.country.name

class ExcursionRestSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Excursion
        fields = '__all__'

class CountryRestSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'

class CityRestSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = City
        fields = '__all__'