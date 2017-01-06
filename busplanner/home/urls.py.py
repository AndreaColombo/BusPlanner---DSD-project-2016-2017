from django.conf.urls import url, include
from . import views

admin.autodiscover()

urlpatterns = [
    url(r'^$', views.index, name='index'),
]
