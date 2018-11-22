from django.conf.urls import url
from mainpage import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^venue/$', views.venue),
    url(r'^accommodation/$', views.accommodation),
    url(r'^gen-info/$', views.general_info),
    url(r'^taxi/$', views.taxi),
    url(r'^gifts/$', views.gifts),
    url(r'^rsvp/$', views.rsvp),
    ]
