from rest_framework.serializers import ModelSerializer
from chatbot.models import Chatbot
from chatbot.utils import chatbot

class ChatbotSerializer(ModelSerializer):
    class Meta:
        model = Chatbot
        fields = ['id', '_input', '_output']
        extra_kwargs = {
            "_output": {'read_only': True}
        }
        
    def create(self, validated_data):
        chat = Chatbot(**validated_data)
        _output = chatbot(validated_data['_input'])
        chat._output = _output
        chat.save()
        return chat
     