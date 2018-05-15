# mwms-api

Rest API for the Mechanical Workshop Management System

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
./node_modules/bin sequelize
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
* **Walter CHavarría (wchavarria03)**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details