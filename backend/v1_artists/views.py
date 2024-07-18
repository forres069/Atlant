from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.permissions import AllowAny

from .models import ArtistProfile
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from .serializers import ArtistProfileSerializer

User = get_user_model()


class ArtistProfileListView(ListAPIView):
    queryset = ArtistProfile.objects.all()
    serializer_class = ArtistProfileSerializer
    permission_classes = [AllowAny,]

    def list(self, request, *args, **kwargs):
        search_query = request.GET.get('search', None)

        if search_query:
            queryset = self.queryset.filter(user__username__icontains=search_query)
        else:
            queryset = self.filter_queryset(self.get_queryset())

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
