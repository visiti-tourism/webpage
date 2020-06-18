from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
from django.urls import reverse


class Excursion(models.Model):
    name = models.CharField(max_length=100)
    places = models.IntegerField(default=0)
    price = models.FloatField(default=0.0)
    duration = models.FloatField(default=0.0)
    comment = models.TextField(default='No comment was provided')
    created = models.DateTimeField('Created', default=datetime.now)
    agent = models.ForeignKey(User, on_delete=models.CASCADE, default=None)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('excursion-detail', kwargs={'pk': self.pk})
