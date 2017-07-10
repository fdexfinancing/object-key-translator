# object-key-translator
A recursive object key translator

# Install
```bash
$ npm install object-key-translator
```
or
```bash
$ yarn add object-key-translator
```

# Usage

```javascript
const translator = require('object-key-translator');

let translation_dict = {
  key: 'Value'
};

//example pt-BR

let translation_dict = {
  key: "Chave"
};

let object = {
  key: 'Hello world'
};

let translation_result = translation(object, translation_dict);


```
Return must be
```javascript
{
    "Chave": "Hello world"
}
```

# Run tests

```bash
$ npm t
```
