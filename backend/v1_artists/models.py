from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models
from pyuploadcare.dj.models import ImageField

from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models
from pyuploadcare.dj.models import ImageField


class CustomUserManager(UserManager):
    def _create_user(self, email, password, **extra_fields):
        """
        Create and save a user with the given email and password.
        """
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)


class Userr(AbstractUser):
    email = models.EmailField(unique=True)
    image = models.ImageField(upload_to='images/', default='static/images/images.png')

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email


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
