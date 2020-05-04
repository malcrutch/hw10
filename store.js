const util = require('util')
const fs = require('fs')

const uuidv1 = require('uuid')

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Store {
  read() {
    return readFileAsync("./db.json", "utf8")
  }

  write(note) {
    return writeFileAsync("./db.json", JSON.stringify(note))
  }

  getNotes() {
    this.read().then(notes => {
      // parse the JSON string and turn into an object
      var obj = JSON.parse(notes);
      return obj;
      // add them to a list
      var li = [];
      // return that list (array)
      li.push(obj);
      return li;
    })
  }

  addNote(note) {
    // use the note argument
    // create a new note object with your required fields (text, title, id)
    // write that object to the json file
    var newNote = {
      text:"",
      title:"",
      id:"",
    };
    JSON.stringify(note);
    return this.getNotes()
    .then(notes  =>{
     notes.push(newNote);
     return this.write(notes); 
    })}


  }

  removeNote(id) {
    // get all notes
    // remove the note with the given id
    // and return a list of notes that does NOT have that id (in essence the filtered list)
  return this.getNotes();
  
  
  
  }





}

module.exports = new Store();