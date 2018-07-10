# Preact plugin starter kit 
> Start building a [Preact] plugins in seconds 🔥

### Features
- In just **4.5kb** you get a productive environment:
  - [emotion]
  - [preact]
  - 1.5kb of conditionally-loaded polyfills for [fetch] & [Promise]

### Installation
> **Important**: [Node.js](https://nodejs.org/en/) > V6.x is a minimum requirement.

```sh
$ git clone https://github.com/mpoapostolis/create-preact-plugin.git
$ cd preact-plugin-starter-kit
$ npm install
```

### Usage

This will create bundle and serve your html.
```sh
$ npm run watch
$ serve .
```

for prodction
```sh
$ npm run build
$ serve .
```


```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="dist/main.js"></script>
</head>

<body>

</body>

</html>
```


The purpose of official preact project templates is boredom. Maybe in the future will add some nice features 

[emotion]:https://github.com/emotion-js/emotion
[preact]:https://github.com/developit/preact