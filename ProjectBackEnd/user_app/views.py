from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status as s
from .models import Client
from .serializer import ClientSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth import login, logout, authenticate
from django.core.exceptions import ValidationError
from session_app.models import SessionCon, Sessions, PhotoPackage


# Create your views here.

class SignUP(APIView):
    def post(self, request):
        data = request.data.copy()
        data['username'] = request.data.get('email', request.data.get('email'))
        new_user = Client(**data)
        try:
            new_user.full_clean()
            new_user.set_password(request.data.get('password'))
            new_user.save()
            user_con = SessionCon.objects.create(client = new_user)
            user_con.full_clean()
            user_con.save()
            user_pack = PhotoPackage.objects.get(package_name='Basic')
            user_ses = Sessions.objects.create(sessions = user_con, packageID = user_pack, date_time = '2021-01-01 12:00:00')
            user_ses.save()
            user_con.add_session(user_ses)
            user_con.save()            
            login(request, new_user)
            token = Token.objects.create(user=new_user)
            return Response({'client':new_user.email,'token': token.key}, status=s.HTTP_201_CREATED)
        except  ValidationError as e:
            print(e)
            return Response(e, status=s.HTTP_400_BAD_REQUEST)    
    
    
class LogIn(APIView):
    def post(self, request):
        data = request.data.copy()
        data['username'] = request.data.get('email', request.data.get('email'))
        user = authenticate(request, username=data['username'], password=data['password'])
        if user:
            login(request, user)
            token, created = Token.objects.get_or_create(user=user)
            container = SessionCon.objects.get(client = user)
            session, created = Sessions.objects.get_or_create("sessions")
            return Response({'client':user.email,'token': token.key}, status=s.HTTP_200_OK)
        else:
            return Response('Invalid credentials', status=s.HTTP_400_BAD_REQUEST)
        
        

class TokenReq(TokenAuthentication):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    
class LogOut(TokenReq, APIView):
    def get(self, request):
        request.user.auth_token.delete()
        logout(request)
        return Response('Logged out', status=s.HTTP_204_NO_CONTENT)
    

class Info(TokenReq, APIView):
    def get(self, request):
        ser_data = ClientSerializer(request.user)
        return Response({"Username": request.user.first_name, 'info': ser_data.data}, status=s.HTTP_200_OK)
    
    
    def put(self, request):
        data = request.data.copy()
        user = Client.objects.get(id=request.user.id)
        update_user = ClientSerializer(user, data=data, partial=True)
        
        if request.user.is_authenticated:
            print('User is authenticated')
            if update_user.is_valid():
                update_user.save()
                return Response(update_user.data, status=s.HTTP_200_OK)
            else:    
                return Response(update_user.errors, status=s.HTTP_400_BAD_REQUEST)
    
    
    def post(self, request):
        data = request.data.copy()
        user = Client.objects.get(id=request.user.id)
        auth_user = authenticate(request, username=user.email, password=data['password'])
        if auth_user:
            user.set_password(data['new_password'])
            user.save()
            return Response('Password updated', status=s.HTTP_200_OK)
        else:
            return Response('Invalid credentials', status=s.HTTP_400_BAD_REQUEST)
    
    def delete(self, request):
        user = Client.objects.get(id=request.user.id)
        user.delete()
        return Response('User deleted', status=s.HTTP_204_NO_CONTENT)