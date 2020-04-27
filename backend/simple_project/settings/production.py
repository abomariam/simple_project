import os
from .base import *

SECRET_KEY = os.environ.get("SECRET_KEY")
DEBUG = False
ALLOWED_HOSTS = [os.environ.get("PRODUCTION_HOST")]

import django_heroku
django_heroku.settings(locals())

TEMPLATES[0]["DIRS"] = [os.path.join(BASE_DIR, "../", "frontend", "build")]
STATICFILES_DIRS = [os.path.join(BASE_DIR, "../", "frontend", "build", "static")]
