var knex = require('knex')({
  client: 'pg',
  connection: 'postgres://tzagtquy:Wz64KnAIYB5kqb96YAyVdojgtalmvKZP@elmer.db.elephantsql.com:5432/tzagtquy',
  debug: false

});

// Create a new recipe
// knex.insert({
//   name: 'HR JD',
//   description: 'NYC NJ'
// }).into('recipies').then();

//Read all of the recipies
// knex.select('name', 'description').from('recipies').then(function(recipies){
//   console.log(recipies);
// });

// Read one of the recipies
// knex.select('description').from('recipies').where({
//   name: 'Khichidi Kadhi'
// }).then(function(recipies) {
//   console.log(recipies[0]);
// });

// Update one of the recipies
// knex('recipies').update({
//   description: 'Delicious rice and lentils with a yoghurt gravy'
// }).where({
//   name: 'Khichidi Kadhi'
// }).then();
