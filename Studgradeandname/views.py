from django.shortcuts import render
from .serializers import serializerclass
from .models import student
from  rest_framework import generics

class listAPI (generics.ListCreateAPIView):
    queryset=student.objects.all()
    serializer_class=serializerclass


# Create your views here.
