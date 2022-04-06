# Table

```js
<template>
    <Table :table="people">
        <template v-slot:thead>
            <Tr>
                <Th slim>Id</Th>
                <Th>Name</Th>
                <Th>Age</Th>
            </Tr>
        </template>
        <template v-slot:tbody>
            <Tr v-for="(person, trKey) in people.items" :key="`th-${trKey}`">
                <Td slim>{{ person.id }}</Td>
                <Td>{{ person.name }}</Td>
                <Td>{{ person.age }}</Td>
            </Tr>
        </template>
    </Table>
</template>
<script lang="ts" setup>
import { useIndex, Index } from '@macramejs/macrame-vue3';
import { Tr, Th, Td, Table } from '@macramejs/admin-vue3';

interface Person {
    name: string;
    age: number;
}

const people = useIndex<Person>({ route: '/api/people' });
</script>
```

## Component API

### Table

| Prop  | Default | Description            |
| ----- | ------- | ---------------------- |
| table | —       | A macrame index object |
