# Personal Blog in Next.js

Simple static blog using markdown and Next.js

## Usage

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for prod and export static website
npm run build
```

## Run with Docker

The Dockerized app can be run as follows

```bash
export TAG=dev
docker pull lxberndt/personal-blog:$TAG
docker run -d -it -p 8080:80 lxberndt/personal-blog:$TAG
```

Or using `docker-compose.yml` as follows

```bash
docker-compose up --build
```

## Deploy to Dockerhub

```bash
docker login
export TAG=dev
docker build -t personal-blog:$TAG .
docker tag personal-blog:$TAG lxberndt/personal-blog:$TAG
docker push lxberndt/personal-blog:$TAG
```

## On server

```bash
docker stop CONTAINER_ID
export TAG=dev
docker pull lxberndt/personal-blog:$TAG
docker run -d -it --restart unless-stopped -p 8082:3000 lxberndt/personal-blog:$TAG
```

If bind errors (port used)

```bash
docker container ls
docker rm -f <container-name>
```
