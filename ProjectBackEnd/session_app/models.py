from django.db import models
from user_app.models import Client
from django.core import validators as v
from photo_app.models import PhotoPackage


STATUS = (
    ('Pending', 'Pending'),
    ('Approved', 'Approved'),
    ('Cancelled', 'Cancelled'),
    ('completed', 'completed')
)

class SessionCon(models.Model):
    client = models.OneToOneField(Client, on_delete=models.CASCADE, related_name="container", default=None)
    
    def add_session(self, sess_obj):
        sess_obj.save()
        self.save()
        
        

# Create your models here.
class Sessions(models.Model):
    packageID = models.ForeignKey(PhotoPackage, on_delete=models.CASCADE, default=None, null=True, blank=True, related_name="packages")
    sessions = models.ForeignKey(SessionCon, on_delete=models.CASCADE, related_name='sessions', default=None)
    date_time = models.CharField(default='2021-01-01 12:00:00', max_length=50, null=True, blank=True)
    session_duration = models.IntegerField(null=True, blank=True, default=30, validators=[v.MinValueValidator(30), v.MaxValueValidator(120)])
    price = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    status = models.CharField(max_length=50, choices=STATUS, default='Pending')
    
    # def get_status(self):
    #     return self.status
    
    # def change_status(self, new_status):
    #     self.status = new_status
    #     self.save()
