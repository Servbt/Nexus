//  INSTRUCTOR PROVIDED
const path = require('path');
const express = require('express');
const session = require('express-session');
const expressHandlebars = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./MiddleWare/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);



const app = express();
const PORT = process.env.PORT || 3001;

const handlebars = expressHandlebars.create({ helpers });

const sessionObject = {
  secret: 'Bread is very delicious when freshly baked',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sessionObject));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
