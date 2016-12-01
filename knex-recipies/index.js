var knex = require('knex')({
  client: 'pg',
  connection: 'postgres://tzagtquy:Wz64KnAIYB5kqb96YAyVdojgtalmvKZP@elmer.db.elephantsql.com:5432/tzagtquy',
  debug: false

});

// Create a new recipe -- populate recipies table
// knex.insert({
//   name: 'Eggplant Parm',
//   description: 'sandwhich with melted cheese and eggplant'
// }).into('recipies').then();

// knex.insert({
//   name: 'Pizza',
//   description: 'Margharita with fresh mozzerlla'
// }).into('recipies').then();

// knex.insert({
//   name: 'Lasagna',
//   description: '12 layer lasagna'
// }).into('recipies').then();

//populate steps table

// knex.insert({
//   recipies_id: 4,
//   body: 'Do not bun, turn oven on, cook 30 minutes at 400 degrees'
// }).into('steps').then();

// knex.insert({
//   recipies_id: 4,
//   body: 'Add half a cup of mozzerella and a dash of salt'
// }).into('steps').then();

// knex.insert({
//   recipies_id: 6,
//   body: 'Do not overcook and make it to mushy'
// }).into('steps').then();

// knex.insert({
//   recipies_id: 6,
//   body: 'rotate on each layer adding cheese and vegetables separated by pieces of pasta'
// }).into('steps').then();

//populate tags table

// knex.insert({
//   name: 'healthy'
// }).into('tags').then();

// knex.insert({
//   name: 'dinner'
// }).into('tags').then();

// knex.insert({
//   name: 'take out'
// }).into('tags').then();

// knex.insert({
//   name: 'take out'
// }).into('tags').then(function () {console.log('added')});

// knex.insert({
//   name: 'family'
// }).into('tags').then(function () {console.log('added')});

// knex.insert({
//   name: 'low calorie'
// }).into('tags').then(function () {console.log('added')});

//populate recipies_tags table
// knex.insert({
//   recipies_id: 4,
//   tag_id: 2
// }).into('recipies_tags').then(function () {console.log('added')});

// knex.insert({
//   recipies_id: 4,
//   tag_id: 1
// }).into('recipies_tags').then(function () {console.log('added')});

// knex.insert({
//   recipies_id: 5,
//   tag_id: 7
// // }).into('recipies_tags').then(function () {console.log('added')});

// knex.insert({
//   recipies_id: 5,
//   tag_id: 2
// }).into('recipies_tags').then(function () {console.log('added')});

// knex.insert({
//   recipies_id: 6,
//   tag_id: 5
// }).into('recipies_tags').then(function () {console.log('added')});


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

// Delete one of the recipies
// knex.del().from('tags').where({name: 'take out'}).then();





