## Breednder

Breednder is an application that is useful for finding friends, finding friends or even match your pet to the pets of the people closest to your location, with this application someone is facilitated in finding or making friendships between fellow pet employers


## Table of Contents
> * [Getting Started](#getting-started)
>   * [Prerequisites](#prerequisites)
>   * [Installation](#installation)
>   * [Server Setup](#server-setup)
> * [Screenshot](#screenshot)
> * [Built With](#built-with)
> * [Author](#author)


## Getting Started
Before starting to install the project, there're some things that need to be done first.
### Prerequisites
Make sure all of these are properly installed in your system.
| Plugin | README |
| ------ | ------ |
| Git | [Windows](https://git-scm.com/download/win) / [Mac](https://git-scm.com/download/mac) / [Linux](https://git-scm.com/download/linux) |
| Node.js | [Link](https://nodejs.org/en/download/) |
| React.js | [Getting Started](https://reactjs.org/docs/create-a-new-react-app.html) |
| MySQL | [Link](https://www.mysql.com/) |

### Installation
First, clone this repository into your system.
```sh
git clone https://github.com/aznaqCre18/chiketto.git
```
Then, install all the packages that described in package.json of both client and server directories.
```sh
$ npm install
```

### Server Setup
For the server setup, first, make sure your MySQL services is running fine. In server directory, you'll find config.json inside config folder. Open and edit the development configuration to match your database setup.
```sh
{
  "development": {
    "username": "root",
    "password": null,
    "database": "tugas_akhir",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
  ...
}
```

After completing the database configuration setup, migrate all the required tables.
``` sh
    npm run build
```

And for the last step, running the server
``` sh
    npm start
```

## Screenshot
![Desain tanpa judul (7)](https://user-images.githubusercontent.com/59505349/77283961-2bc54e80-6d00-11ea-9599-d60d20fafa3d.png)
![Desain tanpa judul (8)](https://user-images.githubusercontent.com/59505349/77283962-2cf67b80-6d00-11ea-8e28-854016125eca.png)
![Desain tanpa judul (9)](https://user-images.githubusercontent.com/59505349/77284454-4ba94200-6d01-11ea-993b-bec26ddac42e.png)
![Desain tanpa judul (10)](https://user-images.githubusercontent.com/59505349/77284455-4d730580-6d01-11ea-8659-ac66854bed54.png)
![Desain tanpa judul (11)](https://user-images.githubusercontent.com/59505349/77284456-4d730580-6d01-11ea-95b9-0270c3a0a43c.png)


  
 ## Built With
 * [React.js](https://reactjs.org/) - Front-end
 * [Express JS](https://expressjs.com/) - Back-end
 * [MySQL](https://www.mysql.com/) - Database
 
 ## Author
  #### Aziz Nur Abdul Qodir - [aznaqCre18](https://github.com/aznaqCre18)
