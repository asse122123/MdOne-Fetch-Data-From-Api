from rest_framework import serializers
from .models import student
class Serializerclass(serializers.ModelSerializer):
    class Meta:
        model=student
        fields='__all__'