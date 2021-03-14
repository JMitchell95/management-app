const express = require('express');
const sequelize = require('./config/connection');
const models = require('./models'); 
const app = express();
const PORT = process.env.PORT || 3001;
const appstart =require('./seed/seed')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

appstart();

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('WE ARE LIVE AND ALLIVE'));
});



