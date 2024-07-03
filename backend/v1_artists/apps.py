from django.apps import AppConfig


class V1ArtistsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'v1_artists'

    def ready(self):
        from . import signals

