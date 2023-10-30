# Development
FROM node:18 as development

WORKDIR /usr/src/app

COPY ./services/user/package*.json ./

RUN npm install

COPY ./services/user ./

RUN apt-get update -y && apt-get install -y openssl

RUN npm run build

# Production
FROM node:18 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ./services/user/package*.json ./

RUN npm install --only=production

COPY ./services/user ./

RUN apt-get update -y && apt-get install -y openssl

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]