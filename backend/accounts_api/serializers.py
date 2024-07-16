from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

Account = get_user_model()


class SignupSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = [
            'email',
            'password',
        ]

    def create(self, validated_data):
        
        account = Account.objects.create_user(
            email=validated_data.get('email'),
            password=validated_data.get('password'),
        )
    
        return account


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(min_length=8, max_length=128)

    def validate(self, attrs):
        validate_password(attrs.get('password'))
        return attrs


class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()


class PasswordResetConfirmSerializer(serializers.Serializer):
    new_password = serializers.CharField(
        min_length=6,
        max_length=100
    )

    def validate(self, attrs):
        validate_password(attrs.get('new_password'))
        return super().validate(attrs)
