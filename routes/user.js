const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) => {
    User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const number = req.body.number;
    const address = req.body.address;
    const photo = req.body.photo;
    
    

    const newUser = new User({
        fname,
        lname,
        email,
        number,
        address,
        photo
    });


    newUser.save()
    .then(() => res.json("User added"))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/delete/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted"))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req,res) => {
    User.findById(req.params.id)
    .then((user) => {
        user.fname = req.body.fname;
        user.lname = req.body.lname;
        user.email = req.body.email;
        user.number = req.body.number;
        user.address = req.body.address;
        user.photo = req.body.photo;

        user.save()
        .then(() => res.json("User updated"))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router;