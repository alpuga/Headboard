# Headboard

<img width="400" alt="screen shot 2019-02-11 at 5 00 48 pm" src="https://user-images.githubusercontent.com/37851662/53208366-7c9ddb80-3604-11e9-93ea-3322d926f757.png">
Real-time chat application using Socket.io

## Installing

```javascript
// Install dependencies for server
npm install

// Run server
nodemon ./server.js

// Server runs on  http://localhost:3000
```

## Built With

This project uses the following technologies:

- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Socket.io](https://socket.io/) for real-time functionality

## Configuration

Make a `.env` file where you will store your secret information like
your `MONGO_URI` and your `SECRET` and any other sensitive information.

Make sure to add your own `MONGO_URI` from your [mLab](http://mlab.com) database in `.env`.

```
MONGO_URI=mongodb://<dbuser>:<dbpassword>@dsXXXXXX.mlab.com:XXXXX/database
```
Also add `SECRET=random` to your `.env`

## Deployment

For deploying to Heroku, please refer to [this](https://www.youtube.com/watch?v=71wSzpLyW9k) helpful video by TraversyMedia.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

This project is licensed under the MIT License
