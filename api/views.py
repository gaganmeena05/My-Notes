from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import NoteSerializer
from .models import Note
import datetime 
import json

@api_view(['GET'])
def getRoutes(request):
    routes = [
    ]
    return Response(routes)

@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all()
    serializer =  NoteSerializer(notes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getNote(request,pk):
    notes = Note.objects.get(id=pk)
    serializer =  NoteSerializer(notes, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateNote(request,pk):
    data = request.data
    notes = Note.objects.get(id=pk)   
    serializer =  NoteSerializer(notes,data=data, many=False)
    if serializer.is_valid():
        serializer.save()    
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteNote(request,pk):
    data = request.data
    notes = Note.objects.get(id=pk) 
    notes.delete()
    return Response('Note was deleted')

@api_view(['POST'])
def createNote(request):
    data = request.data
    notes = Note.objects.create(
        body = data["body"]
    ) 
    serializer =  NoteSerializer(notes,many=False)
    return Response(serializer.data)