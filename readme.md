# Isomorphic Boilerplate

Boilerplate using babel, browserify, gulp, and tape.

## `npm`

```
npm install
```

Production:

```
npm run prod
npm run start
```

Development:

```
npm run dev start
```

## `docker-compose`

Development:

```
docker-compose up
```

## `docker`

Production:

```
docker build -t boilerplate .
docker run -p '80:3000' boilerplate
```

Development:

```
docker build -t boilerplate .
docker run \
    -p '3000:3000' \
    -v "$PWD:/src" \
    -v '/src/node_modules' \
    -it boilerplate \
    npm run dev start
```

----

© Shannon Moeller <me@shannonmoeller.com> (http://shannonmoeller.com)

Licensed under [MIT](http://shannonmoeller.com/mit.txt)
