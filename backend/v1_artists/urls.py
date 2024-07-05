from django.urls import path
from .views import ArtistProfileListView

urlpatterns = [
    path('list/', ArtistProfileListView.as_view(), name='artists-list'),
]
