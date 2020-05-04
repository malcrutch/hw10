// TODO: importing the store
// building out routes
// and using these routes to call your store methods
const store = require("store");

var router = require ("express").Router();




router.get('/notes', function (req, res) {
    store.getNotes().then(function(notes){

    
    res.json(notes)});
  });

  router.post('/notes', function (req, res) {
    store.addNotes(req.body).then(function(notes){

    
    res.json(notes)});
  });




module.exports = router;