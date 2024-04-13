from rest_framework.serializers import ModelSerializer, SerializerMethodField
from session_app.models import Sessions, SessionCon
from photo_app.serializer import PhotoPackageSerializer

class SessionSerializer(ModelSerializer):
    packageID= PhotoPackageSerializer()
    price = SerializerMethodField()
    
    
    class Meta:
        model = Sessions
        fields = ['id', 'date_time', 'session_duration', 'price', 'status', 'packageID']
  
    
    def get_price(self, obj):
        price = 35 * obj.session_duration 
        if obj.packageID.package_name == 'Basic':
            price += 26.00
        elif obj.packageID.package_name == 'Standard':
            price += 35.00
        elif obj.packageID.package_name == 'Premium':
            price += 50.00
        return sum(round(price, 2) for price in [price])
    
    

class SessionConSerializer(ModelSerializer):
    sessions = SessionSerializer(many=True, read_only=True)
    class Meta:
        model = SessionCon
        fields = ['client', 'sessions']

    