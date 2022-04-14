from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment, Reply
from .serializer import CommentSerializer, ReplySerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments (request):
    if request.method == 'GET':
      #video_params = request.query_params.get('oYzHlvI7bI8')
        comments = Comment.objects.all()
    #comments = comments.filter(video_id=video_params)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)


