from django.db import models

# Create your models here.
class Chatbot(models.Model):
    _input = models.TextField()
    _output = models.TextField(null=True, blank=True)
    
    class Meta:
        db_table = 'chatbot'