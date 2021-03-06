from webbrowser import get
from django import shortcuts
from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment, Reply
from .serializer import CommentSerializer, ReplySerializer
from rest_framework import status






@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments (request):
    if request.method == 'GET':
        video_params = request.query_params.get('video_id')
        comments = Comment.objects.all()
        if video_params:
            comments = comments.filter(video_id=video_params)
            serializer = CommentSerializer(comments, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else: 
            serializer = CommentSerializer(comments, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
 

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_new_comment(request):
  if request.method == 'POST':
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save(user=request.user)
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'GET', 'POST'])
@permission_classes([IsAuthenticated])
def update_comment_by_id(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    if request.method == 'PUT':
        serializer = CommentSerializer(comment, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'GET':
        replies = Reply.objects.all()
        finalReplies= replies.filter(comment_id=comment.id)
        serializer = ReplySerializer(finalReplies, many=True)
        return Response (serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user, comment=comment)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_replies(request):
        replies = Reply.objects.all()
        serializer = ReplySerializer(replies, many=True)
        return Response (serializer.data, status=status.HTTP_200_OK)



