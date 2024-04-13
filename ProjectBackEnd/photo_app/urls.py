from django.urls import path
from .views import AllPhotoPackage, SinglePhotoPackage

urlpatterns = [
    path('', AllPhotoPackage.as_view(), name='photo_package'),
    path('<int:pk>/', SinglePhotoPackage.as_view(), name='single_package')    
]