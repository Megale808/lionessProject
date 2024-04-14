from django.urls import path
from  .views import chatbot


urlpatterns = [
    path('', chatbot.as_view(), name='chatbot'),
]