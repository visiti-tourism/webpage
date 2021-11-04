from django.shortcuts import render_to_response, render, redirect



def app(request):
    return render_to_response('app.html')
