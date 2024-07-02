from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core import validators as v
from .validators import validate_password, validate_phone, validate_first_name, validate_last_name

# Create your models here.
class Client(AbstractUser):
    email = models.EmailField(null=False, blank=False, unique=True, max_length=100)
    password = models.CharField(unique=True, null=False, validators=[validate_password])
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    