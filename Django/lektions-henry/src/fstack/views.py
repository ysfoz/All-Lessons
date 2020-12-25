from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home_view(req):
    return HttpResponse('Hi, this is ftack page.')

def about_view(req):
    return HttpResponse('this is about page.')
