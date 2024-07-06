from django_filters import rest_framework as filters

from v1_artists.models import ArtistProfile


class CharFilterInFilter(filters.BaseInFilter, filters.CharFilter):
    pass


class ArtistFilter(filters.FilterSet):
    category = CharFilterInFilter(field_name='category__name', lookup_expr='in')
    price = filters.RangeFilter()
    city = CharFilterInFilter(field_name='city__name', lookup_expr='in')
    user_first_name = CharFilterInFilter(field_name='user__first_name')
    user_last_name = CharFilterInFilter(field_name='user__last_name')
    user_username = CharFilterInFilter(field_name='user__username')

    class Meta:
        model = ArtistProfile
        fields = ['category', 'price', 'city', 'user']
