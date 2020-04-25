from django import forms
from .models import Excursion


class ExcursionRegisterForm(forms.ModelForm):
    name = forms.CharField(max_length=100)
    places = forms.IntegerField()
    price = forms.FloatField()
    duration = forms.FloatField()
    comment = forms.TextInput()

    class Meta:
        model = Excursion
        fields = ['name', 'places', 'price', 'duration', 'comment']

