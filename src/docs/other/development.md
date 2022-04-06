# Development

Setup a development environment using Laravel.

1. Create a new laravel project:

```shell
laravel new macrame-dev
cd macrame-dev
```

add a connection to an existing database.

2. require macrame

```shell
php artisan macramejs/macrame-laravel
```

3. create a new packages directory.

```shell
mkdir packages
cd packages
```

4. create a new directory named by the module you want to work on.

```shell
mkdir macrame-vue3
cd macrame-vue3
```

5. Add a `packages.json` with the following content to the newly created module directory.

```json
{
    "name": "@macramejs/macrame-vue3",
    "typings": "macrame/packages/macrame-vue3/index.d.ts",
    "main": "macrame/packages/macrame-vue3/src/index.ts"
}
```

6. Clone the repository containting the module.

```shell
git clone https://github.com/macramejs/macrame
```

7. install the package via npm.

```shell
cd ../..
npm i ./packages/macrame
```
