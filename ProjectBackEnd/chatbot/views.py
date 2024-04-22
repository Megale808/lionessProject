from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status as s
from chatbot.serializers import ChatbotSerializer
from chatbot.models import Chatbot


class chatbot(APIView):
    serializer_class = ChatbotSerializer
    

    
    def post(self, request, format=None):
        serializer = ChatbotSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=s.HTTP_201_CREATED)
        return Response(serializer.errors, status=s.HTTP_400_BAD_REQUEST)
    
    def get(self, request, format=None):
        chatbot = Chatbot.objects.all()
        serializer = ChatbotSerializer(chatbot, many=True)
        return Response(serializer.data)
        