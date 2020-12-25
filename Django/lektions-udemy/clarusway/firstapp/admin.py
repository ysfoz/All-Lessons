from django.contrib import admin
from .models import FirstModels

# Register your models here.

@admin.register(FirstModels)
class FirstModelAdmin(admin.ModelAdmin):
    list_display = ['title','author','created_date']
    list_display_links = ['title']
    
    search_fields = ['title']
    
    list_filter = ['created_date']
    class Meta:
        model:FirstModels