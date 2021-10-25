from django.urls import path
from .views import ExcursionView, ExcursionDetailView,ExcursionRestDetail,CityView,CountryView,CountryRestView, CityRestView, CityFilterView
from rest_framework import routers
router = routers.DefaultRouter()

urlpatterns = [
    path('excursions', ExcursionView.as_view(), name='excursions-api-list'),
    path('<int:pk>/', ExcursionDetailView.as_view(), name='excursion-detail'),
    path('city/', CityView.as_view(), name='city-list'),
    path('<str:city_name>/', CityFilterView.as_view(), name='city-filter')
]
router.register('excursion',ExcursionRestDetail)
router.register('country', CountryRestView)
router.register('city', CityRestView)