const Smurfs = require('../data/dbConfig.js')

function getAll(){
    return Smurfs('smurfs')
}

function getbyId(id){
    return Smurfs('smurfs')
            .where({id})
            .first()
}

function addSmurf(smurf){
    return Smurfs('smurfs')
            .insert(smurf, 'id')
            .then(id => {
                return getbyId(id)
            })    
}

function delSmurf(id){
    return Smurfs('smurfs')
            .where({id})
            .then(smurf => {
                let delSmurf = smurf
                return Smurfs('smurfs')
                        .where({id})
                        .first()
                        .del()
                        .then(num => {
                            return delSmurf
                        })
            })
}

function updateSmurf(smurf){
    return Smurfs('smurfs')
            .where({id: smurfs.id})
            .update(smurf, 'id')
}

module.exports = {
    getAll,
    getbyId,
    addSmurf,
    delSmurf,
    updateSmurf
}