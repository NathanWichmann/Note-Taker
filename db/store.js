const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Store {
    read() {
       // return 
    }

    write(variable) {
        // return 
     }

     getNotes() {
         //return
     }

     addNote() {
         //return 
     }
     removeNote() {
         //return
     }
}