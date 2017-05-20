# Isomorphic Boilerplate

Boilerplate using babel, browserify, gulp, and tape.

## `npm`

```
npm install
npm run dev serve
```

## `docker-compose`

```
docker-compose up
```

## `docker`

```
docker build -t boilerplate .
docker run \
    -p '3000:3000' \
    -v "$PWD:/src" \
    -v '/src/node_modules' \
    -it boilerplate \
    npm run dev serve
```

----

© Shannon Moeller <me@shannonmoeller.com> (http://shannonmoeller.com)

Licensed under [MIT](http://shannonmoeller.com/mit.txt)
