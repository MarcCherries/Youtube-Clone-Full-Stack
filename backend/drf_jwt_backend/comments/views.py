from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment, Reply
from .serializer import CommentSerializer, ReplySerializer, VideoCommentSerializer
from rest_framework import status



@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments (request):
    if request.method == 'GET':
        video_params = request.query_params.get('video_id')
        comments = Comment.objects.all()
        if video_params:
            comments = comments.filter(video_id=video_params)
            serializer = VideoCommentSerializer(comments, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else: 
            serializer = CommentSerializer(comments, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
 


