# ablp

### setup dev
```bash
npm i
npm start
```

### setup prod
```bash
#setup nginx/apache to point to current folder
npm i
npm run build #for main folder  as deploy folder (uses index.html as index source)
npm run build-static #for staticDist as deploy folder (uses index.prod.html as index source)
```
