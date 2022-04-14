from rest_framework import serializers
from .models import Comment
from .models import Reply

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user_id', 'video_id', 'text', ]
        depth = 1
class VideoCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'text']
        # depth = 1       

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model= Reply
        fields = ['id', 'user_id', 'comment_id','text']
        depth = 1

class NewCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user','video_id', 'text']  
              

          