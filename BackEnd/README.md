### Test the APIs SERVER
Run our Node.js application with command: `node server.js`.

Using Postman, we're gonna test all the Apis above.

- Create a new operation using `POST /api/operations`
- Retrieve all operations using `GET /api/operations` 

After creating some new Operations, you can check PostgreSQL table:
```balances=# select * from operations;
 id |   concept    | amount   |   type    |         createdAt          |         updatedAt
----+--------------+----------+-----------+----------------------------+-------------------------------------
  1 |    salary    |  30000   |   entry   | 2020-01-29 10:42:57.121+07 | 2020-01-29 10:42:57.121+07
  2 | phone  taxes |   -600   |   exit    | 2020-01-29 10:43:05.131+07 | 2020-01-29 10:43:05.131+07
  3 |   donation   |  -1000   |   exit    | 2020-01-29 10:43:48.028+07 | 2020-01-29 10:43:48.028+07
```


## Getting Started 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
<ul>
<li>npm i express</ul>
<li>npm i express-handlebars</ul>
<li>npm i body-parser</ul>
<li>npm i cors</ul>
<li>npm i pg</ul>
<li>npm i pg-hstore</ul>
<li>npm i sequelize</ul>
</ul>


