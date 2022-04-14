from django.urls import path

from comments import views

urlpatterns = [

    path('all/', views.get_all_comments),
    path('', views.add_new_comment)
    
]