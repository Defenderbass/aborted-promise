# CancelablePromise

<span style="color:red">ONLY JAVASRIPT ENGINES WITH INHERITANCE SUPPORT FOR NATIVE OBJECTS!</span>

```js
const CancelablePromise = require('aborted-promise');

const promise = CancelablePromise.all([
    new Promise((resolve, reject) => resolve())
]);

new CancelablePromise((resolve, reject) => resolve())
    .then(() => console.log('without cancel'));

promise
    .then(() => console.log('with cancel'))
    .cancel();
```

Say ["Thank you, developer!"](https://www.paypal.me/igorkatsuba)