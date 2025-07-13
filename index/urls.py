from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login_view, name = 'login'),
    path('signup/', views.signup_view, name= 'signup'),
    path('dashboard/', views.dashboard_view, name='dashboard'),
    path('profile/', views.profile_view, name = 'profile'),
    path('settings/', views.settings_view, name='settings'),
    path('rating/', views.rating_view, name='rating'),
    path('about/', views.about_view, name='about'),
    path('cart/', views.cart_view, name='cart'),
    path('search/', views.search_view, name='search'),
    path('order/', views.order_view, name='order'),
    path('conform/', views.conform_view, name='conform'),
    path('logout/', views.logout_view, name='logout'),
]
