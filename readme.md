# Basic Template Express-Sequelize
## Installation

```bash
$ git clone https://github.com/trotrindonesia/express-sequelize.git
$ cd express-sequelize
$ npm install
```

### Database Preparation
- Create a database with any name you want
- Execute the user.sql file in the installation folder into the database that you created

### Environment Configuration
```bash
$ cp .env.example .env 
//after copying, config your server and database in .env file

//run the server
$ npm run dev
```

### Endpoint Test
Use rest client applications such as insomnia or postman

```
# ==================
# Register User
# ==================
Path 			: http://localhost:3000/users/register
Method			: POST
Content-Type 		: application/json
Body			:
{
	"firstname": "John",
	"lastname": "Doe",
	"email": "johndoe@gmail.com",
	"password": "mypassword"
}

# ==================
# Login User
# ==================
Path 			: http://localhost:3000/users/login
Method			: POST
Content-Type 		: application/json
Body			:
{
	"email": "johndoe@gmail.com",
	"password": "mypassword"
}

# ==================
# Show All Users
# ==================
Path 			: http://localhost:3000/users
Method			: GET
```

***Happy Coding***
