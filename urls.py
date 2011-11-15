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
    (r'^media/(?P<path>.*)$', 'django.views.static.serve',
    {'document_root': media}),

)
