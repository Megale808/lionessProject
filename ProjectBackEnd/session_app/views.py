from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND,
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT
)
from .serializer import SessionSerializer, SessionConSerializer, PhotoPackageSerializer
from .models import Sessions, SessionCon, PhotoPackage

# Create your views here.
class UserSessionCon(APIView):
    
    def get(self, request):
        container = request.user.container
        ser_con = SessionConSerializer(container)
        print(ser_con.data)
        return Response(ser_con.data, status=HTTP_200_OK)
    
    
    def post(self, request):
        user_con = request.user.container
        new_package = PhotoPackage.objects.get(package_name="Basic")
        new_session = Sessions(sessions = user_con, packageID = new_package, date_time = '2021-01-01 12:00:00', session_duration = 30)
        try:
            new_session.full_clean()
            new_session.save()
            user_con.add_session(new_session)
            user_con.save()
            new_session = SessionSerializer(new_session)
            return Response(new_session.data, status=HTTP_201_CREATED)
        except:
            return Response("New Session Wasn't created", status=HTTP_400_BAD_REQUEST)
       
    
    def delete(self, request, id):
        if type(id) == int:
            print(request.user.container.sessions.get(id=id))
            session = request.user.container.sessions.get(id=id)
            session.delete()
           
            return Response("Photo Session was Deleted", status=HTTP_204_NO_CONTENT)
        elif type(id) == str:
            session = request.user.container.sessions.all()
            session.delete()
            return Response("All Photo Session were Deleted", status=HTTP_204_NO_CONTENT)
        else:
            return Response("No Session ID was provided", status=HTTP_400_BAD_REQUEST)
    
    

class AnSessions(APIView):
    

    
    def get(self, request):
        user_con = request.user.container.sessions.all()
        for sess in user_con:
            ser_sess = SessionSerializer(sess)
            return Response(ser_sess.data, status=HTTP_200_OK)
        return Response("Session Not Found", status=HTTP_404_NOT_FOUND)
        

    def put(self, request, id):
        data = request.data.copy()
        user_con = request.user.container.sessions.all()
        for sess in user_con:
            if sess.id == id:
                ser_sess = SessionSerializer(sess, data=data)
                if ser_sess.is_valid():
                    ser_sess.save()
                    return Response(ser_sess.data, status=HTTP_200_OK)
                return Response(ser_sess.errors, status=HTTP_400_BAD_REQUEST)
        
    
    
    
   
                


                   
        
        
       