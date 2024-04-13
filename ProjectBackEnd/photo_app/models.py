from django.db import models

PACKAGE_CHOICES = (
    ('Basic', 'Basic'),
    ('Standard', 'Standard'),
    ('Premium', 'Premium')
)



# Create your models here.
class PhotoPackage(models.Model):
    package_name = models.CharField(choices=PACKAGE_CHOICES, max_length=50, default='Basic')
    package_info = models.TextField(null=True, default='')
    package_price = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)