from django.urls import path
from .views import Noun_Project, Page_Noun_Project

urlpatterns = [
    path('', Noun_Project.as_view(), name="noun_project"),
    path('<str:name>/', Page_Noun_Project.as_view(), name="page_noun_project"),
]