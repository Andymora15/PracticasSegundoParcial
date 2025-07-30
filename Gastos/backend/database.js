
const mongoose = require('mongoose');
const URI = 'mongodb+srv://amorar3:gDT9vMI3yVv7yISF@clusterbdd.e1myske.mongodb.net/?retryWrites=true&w=majority&appName=clusterBDD';
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(db => console.log('BD conectada'))
  .catch(err => console.error(err));
module.exports = mongoose;
