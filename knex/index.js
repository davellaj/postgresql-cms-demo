var knex = require('knex')({
  client: 'pg',
  connection: 'postgres://tzagtquy:Wz64KnAIYB5kqb96YAyVdojgtalmvKZP@elmer.db.elephantsql.com:5432/tzagtquy',
  debug: false

});

knex.insert({
  name: 'Khichidi Kadhi',
  description: 'Rice and lentils with a yoghurt gravy'
}).into('recipes').then();
