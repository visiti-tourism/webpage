from django.shortcuts import render_to_response, render, redirect


def index(request):
    return render_to_response('home.html')


def app(request):
    return render_to_response('app.html')
