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

// var innerJoin = knex.from('recipies').innerJoin('steps', 'steps.recipies_id', 'recipies.id');
// console.log(innerJoin.toString());

var express = require('express');
var jsonParser = require('body-parser').json();

var app = express();

// app.use('jsonParser');

app.post('/recipes', jsonParser, function(request, response){
  // insert a recipe into the database and store it in a var
  // return an id for the recipies
  // var recipies =
  console.log(request.body);

  knex('recipies').returning('id').insert({
    name: request.body.name,
    description: request.body.description
  }).then(function (id){
  	// id[0]
  	// console.log(arguments);
  	// request.body.steps.forEach -> ...
  	// 1. Construct an array of promises to insert each step into the DB.
  	// 2. Construct an array of promises to insert each tag and then, with tag ID, add the join into the DB.
  	// 3. Use Promise.all to run all the promises at once.
  	// 4. Return the response.

    response.status(201).json({message: 'ok'})
  });


  // insert a steps into the database and store it in a var
  // use recipies ID as a foriegn key
  // var steps =
  // insert a tags into the database and store it in a var
  // var tags =

});

var port = process.env.PORT || 8080;
app.listen(port, function(){console.log('listening on port ' + port)});
