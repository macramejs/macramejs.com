# Trees

```ts
import { useTree } from '@macramejs/macrame-vue3';

interface Person {
    name: string;
    age: number;
}

// Create a new person tree and initialize it with a
// person named "John".
const tree = useTree<Person>([
    {
        children: [],
        value: { name: 'John', age: 25 },
    },
]);
```

```ts
// iterate over the root items of the tree
for (let i = 0; i < tree.items.length; i++) {
    let item = tree.items[i];
}

tree.onOrderChange((order) => {
    // gets called when the order has changed..
});

// push a new model to the tree
tree.push({ name: 'Jane', age: 31 });

// pop the latest model from the tree
tree.pop();

// Override the items of an existing tree instance
tree.setItems([
    {
        children: [],
        value: { name: 'John', age: 25 },
    },
]);

// Get the order of the tree.
let order = tree.getOrder();
```
