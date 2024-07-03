from django.urls import path
from .views import ArtistProfileListView

urlpatterns = [
    path('list/', ArtistProfileListView.as_view(), name='artists-list'),
    path('auth/', 'djoser.urls'),
    path('auth/', 'djoser.urls.authtoken'),
    path('auth/', 'djoser.urls.authtoken'),

]
