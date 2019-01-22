const db = require('./models.js');

db.sync({ force: true })
  .then(() => {
    console.log('Database has been synced!')
  })
  .catch(error => {
    console.log('Something went wrong!')
    console.log(error)
  })
  .finally(() => db.close())

