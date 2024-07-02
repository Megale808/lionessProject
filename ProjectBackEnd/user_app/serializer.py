from rest_framework.serializers import ModelSerializer, SerializerMethodField
from user_app.models import Client
from session_app.serializer import SessionConSerializer, SessionSerializer

class ClientSerializer(ModelSerializer):
    

    class Meta:
        model = Client
        fields = ['email', 'password']
    
        
  
        
   