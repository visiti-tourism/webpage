from rest_framework import serializers
from excursions.models import Excursion, Country, City

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'


class ExcursionSerializer(serializers.ModelSerializer):
    location = serializers.SerializerMethodField('get_location')
    class Meta:
        model = Excursion
        fields = ('id',
                  'name',
                  'numberOfReviews',
                  'price',
                  'date',
                  'src',
                  'numberOfStars',
                  'city',
                  'location')
        read_only_fileds = ('country')
    def get_location(self,obj):
        city = obj.city
        country = city.country
        return str(country.name) + ', ' + str(city.name)



class ExcursionDetailSerializer(serializers.ModelSerializer):
    location = serializers.SerializerMethodField('get_location')
    class Meta:
        model = Excursion
        fields = ('id',
                  'name',
                  'numberOfReviews',
                  'price',
                  'date',
                  'src',
                  'numberOfStars',
                  'description',
                  'location')

    def get_location(self, obj):
        city = obj.city
        country = city.country
        return str(country.name) + ', ' + str(city.name)



class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'

        def get_country(self, obj):
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
