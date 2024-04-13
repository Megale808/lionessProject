from rest_framework.serializers import ModelSerializer
from photo_app.models import PhotoPackage


class PhotoPackageSerializer(ModelSerializer):
    class Meta:
        model = PhotoPackage
        fields = '__all__'