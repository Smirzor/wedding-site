"""
Definition of urls for wedding_site.
"""

from django.conf.urls import include, url
from django.conf.urls.static import static
from django.conf import settings
# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = [
    # Examples:
    # url(r'^$', wedding_site.views.home, name='home'),
    # url(r'^wedding_site/', include('wedding_site.wedding_site.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('mainpage.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
