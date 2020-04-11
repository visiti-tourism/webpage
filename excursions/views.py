from django.shortcuts import render, redirect
from datetime import datetime
from .forms import ExcursionRegisterForm
from django.contrib import messages


def register(request):
    if request.method == 'GET':
        return render(request, 'uploadtour.html')
    if request.method == 'POST':
        form = ExcursionRegisterForm(request.POST)
        if form.is_valid():
            formsave = form.save(commit=False)
            messages.success(request, f'Excursion has been created!')
            formsave.created = datetime.now()
            print(request.body)
            print(formsave)
            formsave.save()
            return redirect('index')
    else:
        form = ExcursionRegisterForm()
    return render(request, 'home.html', {'form': form})
