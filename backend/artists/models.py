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


class SocialLink(models.Model):
    SOCIAL_NETWORKS = (
        ('vk', 'VK'),
        ('telegram', 'Telegram'),
        ('instagram', 'Instagram'),
    )

    url = models.URLField(
        verbose_name='URL'
    )
    type = models.CharField(
        verbose_name='Тип соц.сети',
        max_length=10,
        choices=SOCIAL_NETWORKS,
        blank=True
    )

    def save(self, *args, **kwargs):
        self.type = self.detect_social_network()
        super().save(*args, **kwargs)

    def detect_social_network(self):
        if 'vk.com' in self.url:
            return 'vk'
        elif 't.me' in self.url or 'telegram.me' in self.url:
            return 'telegram'
        elif 'instagram.com' in self.url:
            return 'instagram'
        else:
            return 'unknown'
