# mwms-api

Rest API for the Mechanical Workshop Management System

#TODOS
1 - Validate if Id already exist before creating new user
2 - Sanitize values
3 - Add docs
4 - Add testing
5 - Add code coverage
6 - Check error messages
7 - Check http-headers returned
8 - Add user delete endpoint
9 - Add user by id endpoint
10 - Add Authentication
11 - Add Authorization
12 - Add roles
13 - ...

# Setup

npm run i
npm start


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

What things you need to install the software and how to install them

```
Node
NPM
```

### Installing and Running


```
npm install
npm start
```

## Development Notes

### DB

Start mysql locally (installed with Homebrew)
```
mysql.server start
```

### Sequelize

Need to reference the nodemodules sequelize if local
```
./node_modules/.bin sequelize
```

#### Creating table
Example
```
./node_modules/.bin/sequelize model:create --name Post --attributes title:string
```
#### Executing migrations
To make our migration file changes visible in our db
```
./node_modules/.bin/sequelize db:migrate
```

##TODOS
1 - Add versioning [SemVer](http://semver.org/)

## Authors

* **Daniel Berrocal (jdberrocal1)**
* **Walter Chavarría (wchavarria03)**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details