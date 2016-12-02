const knex = require('knex')({
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

const express = require('express');
const jsonParser = require('body-parser').json();

const app = express();

// app.use('jsonParser');



app.post('/recipes', jsonParser, function(request, response){
  
//jamie and heriberto's pseudo code for post request for recipes
  // insert a recipe into the database and store it in a var
  // return an id for the recipies
  // var recipies =
  //console.log(request.body);

  //then
  // insert a steps into the database and store it in a var
  // use recipies ID as a foriegn key
  // var steps =
  // insert a tags into the database and store it in a var
  // var tags =

  const data = request.body;

  knex('recipies').returning('id').insert({
    name: data.name,
    description: data.description
  }).then((recipeIds) => {
  	const recipeId = recipeIds[0];

  	// 1. Construct an array of promises to insert each step into the DB.
  	const stepsPromise = data.steps.map(step =>{
  		//console.log('this is the step we are inserting into the database table for steps' + step);
		return knex.insert({ body:step, recipies_id:recipeId}).into('steps');
	});
  	// 2. Construct an array of promises to insert each tag and then, with tag ID, add the join into the DB.

  	const tagsPromises = data.tags.map(tagName=>{
  		//console.log('this is the tag we are inserting into the database' + tagName)

  		// if this condition is false (select all from tags table where name = tagName) then insert the tag
  		return knex.insert({name: tagName}).into('tags');
  	});

  	//const recipiesTagsPromise = 

  	// // 3. Use Promise.all to run all the promises at once.
  	const allPromises = stepsPromise.concat(tagsPromises);
  	console.log("this is allPromises variable" + allPromises)
  	 return Promise.all(allPromises);
  	 
  	 //console.log('this is the steps promise: ' + stepsPromise);
  	 // console.log('tags promise: ' + tagsPromises)
  	 //return Promise.all([stepsPromise, tagsPromises])
  	
  	// 4. Return the response.
 	}).then(()=>{
	response.status(201).json({})
  });

});
 

// -------------------Solution for Post route

// app.post('/recipes', jsonParser, function(request, response) {
//   function createRecipeTag(recipeId, tagId) {
//     return knex
//       .insert({ 'recipe_id': recipeId, 'tag_id': tagId })
//       .into('recipes_tags');
//   }

//   const data = request.body;

//   knex.insert({ name: data.name }).into('recipes').returning('id')
//     .then((recipeIds) => {
//       const recipeId = recipeIds[0];

//       const stepPromises = data.steps.map(step => {
//         return knex.insert({ instructions: step, 'recipe_id': recipeId }).into('steps');
//       });

//       const tagPromises = data.tags.map(tagName => {
//         knex
//           .select('id')
//           .from('tags')
//           .where({ name: tagName })
//           .then((tags) => {
//             if (tags.length > 0) {
//               return createRecipeTag(recipeId, tags[0].id)
//             } else {
//               return knex
//                 .insert({ 'name': tagName })
//                 .into('tags')
//                 .returning('id')
//                 .then((tagIds) => {
//                   return createRecipeTag(recipeId, tagIds[0]);
//                 });
//             }
//           });
//       });

//       const allPromises = stepPromises.concat(tagPromises);
//       return Promise.all(allPromises);
//     }).then(() => {
//       return response.status(201).json({});
//     });
// });

//------------------------------------solution for get route

// app.get('/recipes', function(request, response) {
//   knex
//     .select('*')
//     .from('recipes')
//     .then(recipes => {
//       const recipePromises = recipes.map(recipe => {
//         const stepsPromise = knex
//           .select('*')
//           .from('steps')
//           .where({ 'recipe_id': recipe.id });

//         const tagsPromise = knex
//           .select('*')
//           .from('recipes_tags')
//           .where({ 'recipe_id': recipe.id })
//           .join('tags', 'recipes_tags.tag_id', 'tags.id');

//         return Promise.all([ stepsPromise, tagsPromise ])
//           .then(result => {
//             recipe.steps = result[0].map(step => { return step.instructions });
//             recipe.tags = result[1].map(tag => { return tag.name });
//           });
//       });

//       Promise.all(recipePromises).then(() => {
//         return response.status(200).json(recipes);
//       });
//     });
// });



var port = process.env.PORT || 8080;
app.listen(port, function(){console.log('listening on port ' + port)});
