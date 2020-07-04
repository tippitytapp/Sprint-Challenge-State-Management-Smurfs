const router = require('express').Router();

const Smurfs = require('./smurfsmodel,js');

router.get('/', (req, res) => {
    Smurfs.getAll()
        .then(smurfs => {
            if(smurfs.length === 0){
                res.status(404).json({
                    message: 'No Smurfs Found'
                })
            } else {
                res.status(200).json({
                    data:smurfs
                })
            }
        })
})