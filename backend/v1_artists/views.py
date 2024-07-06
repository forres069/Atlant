from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView

from .models import ArtistProfile
from rest_framework.generics import ListAPIView, UpdateAPIView
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import ArtistProfileSerializer
from rest_framework import viewsets
from .service import ArtistFilter


class ArtistProfileViewSet(viewsets.ModelViewSet):
    queryset = ArtistProfile.objects.all()
    serializer_class = ArtistProfileSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = ArtistFilter

    def list(self, request, *args, **kwargs):
        queryset = ArtistProfile.objects.all()
        serializer = self.get_serializer(queryset, many=True)

        return Response(serializer.data)



