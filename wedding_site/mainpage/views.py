from django.shortcuts import render
from django.http import HttpResponse

def test(request):
    return render(request, 'mainpage/index.html')

def index(request):
    return render(request, 'mainpage/index.html')

def venue(request):
    return render(request, 'mainpage/venue.html')

def accommodation(request):
    return render(request, 'mainpage/accommodation.html')

def general_info(request):
    return render(request, 'mainpage/general_info.html')

def taxi(request):
    return render(request, 'mainpage/taxi.html')

def gifts(request):
    return render(request, 'mainpage/gifts.html')

def rsvp(request):
    return render(request, 'mainpage/rsvp.html')