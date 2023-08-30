# Development
FROM node:18-alpine as development

WORKDIR /usr/src/app

COPY ./services/user/package*.json ./

RUN npm install

COPY ./services/user ./

RUN npm run build

# Production
FROM node:18-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ./services/user/package*.json ./

RUN npm install --only=production

COPY ./services/user ./

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]