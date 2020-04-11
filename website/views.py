from django.shortcuts import render_to_response, render, redirect


def index(request):
    return render_to_response('home.html')


# def uploadtour(request):
#     if request.method == 'GET':
#         return render(request, 'uploadtour.html')
#     if request.method == 'POST':
#         print(request.body)
#         return redirect('index')


def app(request):
    return render_to_response('app.html')


def signin(request):
    return render_to_response('signin.html')
