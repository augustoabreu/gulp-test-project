# Basic instructions

## Install
### project dependencies
```
> npm install
```
### client dependencies
```
> bower-installer
```
## gulp usage

### Development
```
$ gulp --app cliente --brand marca1
```
### Production
```
$ gulp --app cliente --brand marca1 --prod
```
---------------
## This is my file/directory structure in development
```
|-assets/
  |- brand-1/
     |- cliente/
        |- fonts/
           |- arquivo.woff
        |- images/
           |- sprites/
              |- arquivo.png
              |- arquivo2.png
              |- arquivo3.png
           |- arquivo.png
        |- styles/
           |- _variables.scss
           |- base.scss
        |- views/
        |- arquivo.js
  |- common/
     |- cliente/
        |- index.html
     |- images/
     |- libs/
     |- styles/
        |- components/
        |- elements/
        |- generics/
        |- tools/
     |- templates/
     |- views/
     |- main.js
  |- brand-2/
     |- cliente/
        |- fonts/
           |- arquivo.woff
        |- images/
           |- sprites/
              |- arquivo.png
              |- arquivo2.png
              |- arquivo3.png
           |- arquivo.png
        |- styles/
           |- _variables.scss
           |- base.scss
        |- views/
        |- arquivo.js
```

## How need to stay in production
```
|-dist/
  |- cliente/
    |- brand-1/
       |- common/
          |- images/
          |- libs/
          |- templates/
          |- views/
          |- main.js
       |- fonts/
          |- arquivo.woff
       |- images/
          |- sprite.png
          |- arquivo.png
       |- styles/
          |- base.css
       |- views/
       |- index.html
```
