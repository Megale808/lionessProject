from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core import validators as v
from .validators import validate_password, validate_phone, validate_first_name, validate_last_name

# Create your models here.
class Client(AbstractUser):
    first_name = models.CharField(null=True, blank=True,validators=[validate_first_name])
    last_name = models.CharField(null=True, blank=True, max_length=100, validators=[validate_last_name])
    email = models.EmailField(null=False, blank=False, unique=True, max_length=100)
    phone = models.CharField(validators=[validate_phone], max_length=12, unique=True,null=True, blank=True)
    password = models.CharField(unique=True, null=False, validators=[validate_password])
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    