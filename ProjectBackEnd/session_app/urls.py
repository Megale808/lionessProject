from django.urls import path, register_converter
from .views import AnSessions, UserSessionCon
from .converters import IntOrCharConverter

register_converter(IntOrCharConverter, 'int_or_str')

urlpatterns = [
    path('', UserSessionCon.as_view(), name='sessions_container'),
    path('<int_or_str:id>/', UserSessionCon.as_view(), name='sessions_container'),
    path('session/', AnSessions.as_view(), name='sessions_list'),
    path('session/<int:id>/', AnSessions.as_view(), name='sessions_detail'),
]