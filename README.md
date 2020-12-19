# mobile-payment-system
This project was developed using the JAMStack architecture. It has a frontend written with React.js and a backend written with Laravel.

### Installation
This project has 2 subfolders, with each folder named according to its purpose. 

#### Setting up the backend
In the backend folder run the command

`composer install`

This will install the necessary dependencies required for the project. 
It is recommended that you have PHP 7.4 installed on your machine. Also make a copy of the `.env.example` file into another file and name it `.env`. 

Run the command 

``php artisan key:gen`` 

to generate an application key. 

Run the command 

``php artisan jwt:secret``

 to generate a secret key. This key is being used for authentication.

This application uses MySQL for its database. To setup the database set values for the database name, database user and the database password in the `.env` file. An example is given below

```
DB_DATABASE=dummyDatabase 

DB_USERNAME=dummyUser

DB_PASSWORD=123456
```

To start the server run the command

`php artisan serve`

A message should be returned on the terminal showing the port that runs the service locally.

### Setting up the frontend
In the frontend folder, run the command

`npm install`

This command would install all the necessary packages required to run this project. 

Also make a copy of the `.env.example` file into another file and name it `.env.develop`. 

Enter the value for the backend url and port in the `.env.develop` for <code>REACT_APP_API_URL</code>. E.g

<code>
REACT_APP_API_URL="http://localhost:8000"
</code>

Then run the command 

`npm run start:dev`

This command starts the development server


