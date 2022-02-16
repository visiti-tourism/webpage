from rest_framework import serializers
from .models import User
class userProfileSerializer(serializers.ModelSerializer):
    user=serializers.StringRelatedField(read_only=True)
    class Meta:
        model=User
        fields='__all__'
