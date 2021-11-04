from django.db import models
from datetime import datetime
from django.urls import reverse


class Country(models.Model):
    name = models.CharField(max_length=30,)

    def __str__(self):
        return self.name


class City(models.Model):
    name = models.CharField(max_length=30, default="None")
    country = models.ForeignKey(Country, on_delete=models.)

    def __str__(self):
        return self.name


class Excursion(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=1000, default="None")
    price = models.IntegerField()
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    start_time = models.DateTimeField(auto_now=False, auto_now_add=False, default=datetime.now)
    end_time = models.DateTimeField(auto_now=False, auto_now_add=False, default=datetime.now)
    image_title = models.ImageField(upload_to="static/images/excursions/", default="None")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('excursion-detail', kwargs={'pk': self.pk})
