`create table using sequelize CLI`

> npx sequelize model:generate --name Airplane --attributes modelNumber:string,capacity:integer

`now migrate the model`

> npx sequelize db:migrate

`revert from migration`

> npx sequelize db:migrate:undo

`revert all migration`

> npx sequelize db:migrate:all

```
Note: while db:migrate:undo the down() function will apply
    and while db:migrate the up() function will apply
```

`constrains`
There two type of constraints we can give one at database level
and another at javascript level(any language being used in backend)
