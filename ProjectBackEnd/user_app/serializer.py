from rest_framework.serializers import ModelSerializer, SerializerMethodField
from user_app.models import Client
from session_app.serializer import SessionConSerializer, SessionSerializer

class ClientSerializer(ModelSerializer):
    sessions = SerializerMethodField()

    class Meta:
        model = Client
        fields = ['id','email', 'first_name', 'last_name', 'phone', 'sessions']
    
        
    def get_sessions(self, obj):
        sessions = obj.container.sessions
        ser_sess = SessionSerializer(sessions).data
        return ser_sess
        
   