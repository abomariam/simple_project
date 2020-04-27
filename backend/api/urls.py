from django.urls import path

from . import views

urlpatterns = [
    path('calculate-distance/', views.CalculateDistanceView.as_view()),
]
