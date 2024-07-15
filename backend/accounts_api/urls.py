from django.urls import path
from . import views

app_name = 'accounts_api'

urlpatterns = [
    path('signup/', views.SignUpAPIView.as_view(), name='signup'),
    path('login/', views.LoginAPIView.as_view(), name='login'),
    path('activate/<uidb64>/<token>/', views.ActivateAccountAPIView.as_view(), name='activate'),
    path(
        'password-reset/',
        views.PasswordResetAPIView.as_view(),
        name='password_reset',
    ),
    path(
        'password-reset/<uidb64>/<token>/',
        views.PasswordResetConfirmAPIView.as_view(),
        name='password_reset_confirm'
    ),
]
