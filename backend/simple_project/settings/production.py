from .base import *

SECRET_KEY = 'h5*$vdw$yof$mvmm=#=v2k-79f66zp-rxyh^@p9%6md9j!ti+t'
DEBUG = False
ALLOWED_HOSTS = ['nameless-scrubland-48417.herokuapp.com']

import django_heroku
django_heroku.settings(locals())

TEMPLATES[0]["DIRS"] = [os.path.join(BASE_DIR, "../", "frontend", "build")]
STATICFILES_DIRS = [os.path.join(BASE_DIR, "../", "frontend", "build", "static")]
