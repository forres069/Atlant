from .models import ArtistProfile
from rest_framework import serializers


class ArtistProfileSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = ArtistProfile
        fields = [
            'name',
            'picture',
            'price'
        ]
