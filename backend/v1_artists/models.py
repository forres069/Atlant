from django.contrib.auth import get_user_model
from django.db import models
from pyuploadcare.dj.models import ImageField

User = get_user_model()


class ArtistProfile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='get_user'
    )
    picture = ImageField(blank=True, null=True)
    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        blank=True,
        null=True
    )

    def __str__(self):
        return self.user.username



