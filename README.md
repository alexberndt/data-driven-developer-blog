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

## Deployment to Production

In development terminal

```bash
docker build -t lxberndt/personal-blog:dev .
docker push lxberndt/personal-blog:dev
```

On server

```bash
docker run -dit --restart unless-stopped -p 8082:3000 lxberndt/personal-blog:dev
```
