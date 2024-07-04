from django.urls import path, include
from .views import ArtistProfileListView

urlpatterns = [
    path('list/', ArtistProfileListView.as_view(), name='artists-list'),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
]
