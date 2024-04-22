from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests 
from requests_oauthlib import OAuth1 
from booking_proj.settings import env
from pprint import PrettyPrinter
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication



pp = PrettyPrinter(indent=2, depth=2)

# Create your views here.
class TokenReq(TokenAuthentication):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]



class Noun_Project(TokenReq, APIView):
    
    def get(self, request):
        user = request.user.id
        print(user)
        api_key = env.get("NOUN_API_KEY")
        secret_key = env.get("NOUN_API_SECRET")
        print(api_key, secret_key)
        auth = OAuth1(api_key, secret_key)
        endpoint = "https://api.thenounproject.com/v2/icon?query=profile&limit_to_public_domain=500"
        response = requests.get(endpoint, auth=auth) 
        responseJSON = response.json()
        pp.pprint(responseJSON.get("icons")[user].get('thumbnail_url'))
        return Response(responseJSON.get("icons")[user].get('thumbnail_url'))
    
    
    
class Page_Noun_Project(APIView):
    
    def get(self, request, name):
        api_key = env.get("NOUN_API_KEY")
        secret_key = env.get("NOUN_API_SECRET")
        print(api_key, secret_key)
        auth = OAuth1(api_key, secret_key)
        endpoint = "https://api.thenounproject.com/v2/icon?query={name}&limit_to_public_domain=500"
        response = requests.get(endpoint, auth=auth) 
        responseJSON = response.json()
        pp.pprint(responseJSON.get("icons")[7].get('thumbnail_url'))
        return Response(responseJSON.get("icons")[6].get('thumbnail_url'))