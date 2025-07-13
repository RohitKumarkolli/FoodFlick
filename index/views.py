from django.shortcuts import render
# Create your views here.

def home(request):
    return render(request, 'home.html')

def login_view(request):
    return render(request, 'login.html')

def signup_view(request):
    return render(request, 'signup.html')

def dashboard_view(request):
    return render(request, 'dashboard.html')

def profile_view(request):
    return render(request, 'profile.html')

def settings_view(request):
    return render(request, 'settings.html')

def rating_view(request):
    return render(request, 'rating.html')

def about_view(request):
    return render(request, 'about.html')

def cart_view(request):
    return render(request, 'cart.html')

def search_view(request):
    return render(request, 'search.html')

def order_view(request):
    return render(request, 'order.html')

def conform_view(request):
    return render(request, 'conform.html')

def logout_view(request):
    return render(request, 'logout.html')