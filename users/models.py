from django.db import models

# Create your models here.

from django.db import models
from datetime import datetime


class User(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=128)
    created = models.DateTimeField('Created', default=datetime.now)
