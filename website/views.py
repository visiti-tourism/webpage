from django.shortcuts import render_to_response


def index(request):
    return render_to_response('home.html')


def uploadtour(request):
    return render_to_response('uploadtour.html')


def app(request):
    return render_to_response('app.html')


def signin(request):
    return render_to_response('signin.html')
