from django.db import models
from datetime import datetime
from django.urls import reverse


class Country(models.Model):
    name = models.CharField(max_length=30,)

    def __str__(self):
        return self.name


class City(models.Model):
    name = models.CharField(max_length=30, default="None")
    country = models.ForeignKey(Country, on_delete=models.SET_NULL,null=True)

    def __str__(self):
        return self.name


class Excursion(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=1000, null=True)
    price = models.IntegerField(max_length=5,null=True)
    numberOfStars = models.IntegerField(max_length=5,null=True)
    numberOfReviews = models.IntegerField(max_length=5,null=True)
    city = models.ForeignKey(City, on_delete=models.SET_NULL,null=True)
    date = models.DateTimeField(auto_now=False, auto_now_add=False, default=datetime.now)
    imageSrc = models.ImageField(upload_to="static/images/excursions/", default=None,null=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('excursion-detail', kwargs={'pk': self.pk})
