from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK, HTTP_400_BAD_REQUEST, 
    HTTP_404_NOT_FOUND, HTTP_201_CREATED,
    HTTP_204_NO_CONTENT
)
from .serializer import PhotoPackageSerializer, PhotoPackage
from .models import PhotoPackage


# Create your views here.
class AllPhotoPackage(APIView):
    def get(self, request):
        packages = PhotoPackage.objects.all()
        serializer = PhotoPackageSerializer(packages, many=True)
        print(serializer.data)
        return Response(serializer.data, status=HTTP_200_OK)
    

class SinglePhotoPackage(APIView):
    def get(self, request, pk):
        package = get_object_or_404(PhotoPackage, pk=pk)
        serializer = PhotoPackageSerializer(package)
        return Response(serializer.data, status=HTTP_200_OK)
    
      

