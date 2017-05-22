FROM node:6
WORKDIR /src

COPY package.json .
RUN npm install

COPY . .
CMD npm run prod && \
	npm run start
