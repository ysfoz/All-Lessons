from django.db import models
from django.db.models.fields import IntegerField

# Create your models here.

class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    number = models.IntegerField()
    def __str__(self):
        return self.first_name