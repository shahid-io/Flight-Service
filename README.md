### create database

```
>npx sequelize db:create
```

### Database tables managed by model

<p>create database model. In other words create table using sequelize CLI</p>

```
>npx sequelize model:generate --name Airplane --attributes modelNumber:string,capacity:integer
```

<p>after this command the sequelize created two files "airplane.js" and "------create-airplane.js"
It doesn't create table in your database.
</p>

### now migrate the model

<p>This Migration will create the database table 
there are two functions available in model up() and down()
up() for create table
down() destroy table</p>

```
> npx sequelize db:migrate
```

### revert from migration

```
> npx sequelize db:migrate:undo
```

### revert all migration

```
> npx sequelize db:migrate:all
```

Note: while db:migrate:undo the down() function will apply
and while db:migrate the up() function will apply

### Constraints

There two type of constraints we can give one at database level
and another at javascript level(any language being used in backend)
If applying constraints in model - `airplane.js` file it will be javascript level constraint.
And if applying constraints in migration - `----create-airplane.js` it will be database level constraint.

# Create City Model and Migrate

In model the city-name will be unique and the airport can be more than one in one city.

```
npx sequelize model:generate --name City --attributes name:string

npx sequelize db:migrate
```

# Create Airport Model

```
npx sequelize model:generate --name Airport --attributes name:string,code:string,address:string,cityId:integer

npx sequelize db:migrate
```

# Create new migration to add association

Note : We dont need another model for because we're already adding F key constraints airport table.

```
npx sequelize migration:generate --name updated-city-airport-association
```

After adding up code for Key Constraints

```
npx sequelize db:migrate
```

To Undo the migration

```
npx sequelize db:migrate:undo
```

To see whether Fk applied or not.

```
select * from INFORMATION_SCHEMA.KEY_COLUMN_USAGE where T ABLE_NAME = 'airports' AND CONSTRAINT_SCHEMA = 'flights';
```

Note : Sequelize can provide all the crud methods without even writing by ourselves

```
const { Airport, City } = require("./models");
  const banglore = await City.findByPk(1);
  const airportBLR = await banglore.createAirport({
    name: "Kempegodwa Airport",
    code: "BLR",
  });
  console.log(banglore);
  console.log(airportBLR);
```

if we have model like Airport just require it and that model object can be use camel case
createAirport()
getAirport()
removeAirport()


# Flights Model 
```
npx sequelize model:generate --name Flight --attributes flightNumber:string,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:date,departureTime:date,price:integer,boardingGate:string,totalSeats:integer
```
### Flight table after added fk constraints on airplaneId, departureAirportId and arrivalAirportId
```
mysql> desc flights;
+--------------------+--------------+------+-----+---------+----------------+
| Field              | Type         | Null | Key | Default | Extra          |
+--------------------+--------------+------+-----+---------+----------------+
| id                 | int          | NO   | PRI | NULL    | auto_increment |
| flightNumber       | varchar(255) | NO   |     | NULL    |                |
| airplaneId         | int          | NO   | MUL | NULL    |                |
| departureAirportId | varchar(255) | NO   | MUL | NULL    |                |
| arrivalAirportId   | varchar(255) | NO   | MUL | NULL    |                |
| arrivalTime        | datetime     | NO   |     | NULL    |                |
| departureTime      | datetime     | NO   |     | NULL    |                |
| price              | int          | NO   |     | NULL    |                |
| boardingGate       | varchar(255) | YES  |     | NULL    |                |
| totalSeats         | int          | NO   |     | NULL    |                |
| createdAt          | datetime     | NO   |     | NULL    |                |
| updatedAt          | datetime     | NO   |     | NULL    |                |
+--------------------+--------------+------+-----+---------+----------------+
```

# Changed project directory name to Flight-Service
