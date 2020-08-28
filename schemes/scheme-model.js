const db = require("../data/config")

//Find All
function find() {
    return db("schemes") 
}
//Find By Id .first
function findById(id) {
    return db("schemes")
    .where("id", id)
    .first()
}
//remove by id .del
function remove(id) {
    return db("schemes")
    .where("id", id)
    .del()
}

//Add by id
function add(scheme) {
    return db("schemes")
    .insert(scheme)
    .then(ids => {
        return findById(ids[0])
    })
}

//update with .update by ID
function update(changes, id) {
    return db("schemes")
    .update(changes)
    .where("id", id)
}

//find steps ??
function findSteps(id) {
    return db("steps")
    .where("id", id)
    .first() 
}


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}