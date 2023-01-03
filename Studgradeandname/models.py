from django.db import models

# Create your models here.
class student(models.Model):
   firstName=models.CharField(max_length=10)
   lastName=models.CharField(max_length=10)
   studGrade=models.CharField(max_length=2)
   def __str__(self):
        return self.name
# Create your models here.
