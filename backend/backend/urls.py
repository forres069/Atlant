from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
<<<<<<< HEAD
    # users
    path('artists/', include('artists.urls'))
=======
    path('v1_artists/', include('v1_artists.urls'))
    path('admin/', admin.site.urls),
    path('api/v1/', include('v1_artists.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('auth/', include('djoser.urls.jwt')),
>>>>>>> origin/artists-development
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
