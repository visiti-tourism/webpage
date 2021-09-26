from rest_framework import serializers
from excursions.models import Excursion


class ExcursionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Excursion
        fields = ('id',
                  'name',
                  'start_time',
                  'price',
                  'end_time',
                  'image_title')
