# Translatable

```js
import { ref } from 'vue';
import { translatable } from '@macramejs/macrame-vue3';

const locale = ref('en');
const title = translatable(locale, {
    en: 'Hello World!',
    de: 'Hallo Welt!',
});
```
