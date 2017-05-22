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

Visit: http://localhost:3000/foo

## `docker-compose`

```
docker-compose up
```

Visit: http://localhost:3000/foo

## `docker`

```
docker build -t boilerplate .
docker run \
    -p '3000:3000' \
    -v "$PWD:/src" \
    -v '/src/node_modules' \
    -it boilerplate \
    npm run dev start
```

Visit: http://localhost:3000/foo

## `vagrant`

```
vagrant up
vagrant ssh
cd /src
npm run dev start
```

Visit: http://192.168.33.10:3000/foo

----

© Shannon Moeller <me@shannonmoeller.com> (http://shannonmoeller.com)

Licensed under [MIT](http://shannonmoeller.com/mit.txt)
