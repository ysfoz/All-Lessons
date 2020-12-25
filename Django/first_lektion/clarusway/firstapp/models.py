from django.db import models
from django.db.models.base import Model

# Create your models here.


class FirstModels(models.Model):
    author = models.ForeignKey('auth.User', on_delete= models.CASCADE,verbose_name='Yazar')
    title = models.CharField(max_length= 50)
    created_date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title 