const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const models = require("../models");
const bcrypt = require("bcrypt");
const User = models.users;
const Pets = models.pet;

// const {
//     secretKey
// } = require("../config/secretKey");


exports.login = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            const authorize = bcrypt.compareSync(req.body.password, user.password);

            if (authorize) {
                const token = jwt.sign({
                    id: user.id
                }, 'my-secret-key');

                res.send({
                    id: user.id,
                    token,
                    message: "Login Success"
                });
            } else {
                res.status(401).send({
                    message: "Invalid username or email."
                });
            }
        } else {
            res.status(401).send({
                message: "Invalid username or email."
            });
        }
    });
};

exports.register = (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const breednder = req.body.breeder;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const address = req.body.address; //use encryption in real world case!

    User.create({
            breednder: breednder,
            email: email,
            password: hash,
            phone: phone,
            address: address,
        })
        .then(user => {
            if (user) {
                const token = jwt.sign({
                    id: user.id
                }, 'my-secret-key');

                const petData = {
                    name: req.body.pet.name,
                    gender: req.body.pet.gender,
                    id_species: req.body.pet.spesies.id,
                    ages: req.body.pet.age,
                    id_user: user.id
                };

                Pets.create(petData).then(pet => {
                    if (pet) {
                        res.send({
                            email: email,
                            token
                        });
                    }
                })
            }
        })
        .catch(Sequelize.ValidationError, err => {
            return res.status(406).send({
                message: "Invalid username or email."
            });
        })
        .catch(err => {
            return res.status(400).send({
                message: err.message
            });
        });
};