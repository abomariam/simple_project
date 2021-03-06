FROM python:3.8

# Install curl, node, yarn, &GDAL
RUN apt-get -y install curl \
  && curl -sL https://deb.nodesource.com/setup_12.x | bash \
  && apt-get install -y nodejs \
  && curl -o- -L https://yarnpkg.com/install.sh | bash \
  && apt-get install -y binutils libproj-dev gdal-bin


WORKDIR /app/backend

# Install Python dependencies
COPY ./backend/requirements.txt /app/backend/
RUN pip3 install --upgrade pip -r requirements.txt

# Install JS dependencies
WORKDIR /app/frontend

COPY ./frontend/package.json ./frontend/yarn.lock /app/frontend/
RUN $HOME/.yarn/bin/yarn install

# Add the rest of the code
COPY . /app/

# Build static files
RUN $HOME/.yarn/bin/yarn build

# Have to move all static files other than index.html to root/
# for whitenoise middleware
WORKDIR /app/frontend/build

RUN mkdir root && mv *.ico *.js *.json root

# Collect static files
RUN mkdir /app/backend/staticfiles

WORKDIR /app/backend

ENV DJANGO_SETTINGS_MODULE=simple_project.settings.production

RUN python3 manage.py collectstatic --noinput

EXPOSE $PORT

CMD gunicorn simple_project.wsgi:application -b 0.0.0.0:$PORT
