from django.conf.urls.defaults import patterns, include, url
import views, os

# Set media path
media = os.path.join(
  os.path.dirname(__file__), 'media'
)


urlpatterns = patterns('',
    (r'^$', views.testing),
    (r'^bargraph/$', views.bargraph_panel),
    (r'^text/$', views.bargraph_text),
    (r'^all/$', views.all_text),
    (r'^wait/$', views.wait_message),
    (r'^climatology/$', views.climatology),
    (r'^lastmonths/$', views.climatology_text),
    (r'^media/(?P<path>.*)$', 'django.views.static.serve',
    {'document_root': media}),

)
