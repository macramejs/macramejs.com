# Index

```ts
import { useIndex } from '@macramejs/macrame-vue3';

interface Person = {
    name: string,
    age: number
}

// create a new flat people list
const index = useIndex<Person>({
    route: '/people/items'
});

// initially load items.
index.loadItems();

// reload
index.reload();
```

```ts
// search
index.updateSearch('foo');
```

```ts
// pagination
index.nextPage();
index.prevPage();
index.setPage(3);
index.lastPage();
index.currentPage = 1;
const lastPage = index.getLastPage();
```

```ts
// sort by
index.addSortBy('name');
index.addSortBy('name', 'desc');
index.removeSortBy('name');

if (index.isSortedBy('name')) {
    // ...
}

if (index.isSortedBy('name', 'desc')) {
    // ...
}
```

```ts
// add filters
const index = useIndex<Person>({
    route: '/people/items',
    filters: { birth: { value: null } },
});

// reload on filter change
index.reloadOnChange(index.filters);

// set a filter
index.filters.birth = {
    value: '01.01',
    label: 'First of January',
};
```
