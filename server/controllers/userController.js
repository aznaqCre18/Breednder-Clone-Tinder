//const Sequelize = require("sequelize");
//const bcrypt = require("bcrypt");
const models = require("../models")
const Users = models.users


//get detail user

exports.getDetailUser = (req, res) => {
    Users.findOne({
        where: {
            id: req.params.id
        },
        attributes: ["breednder", "address", "phone", "createdAt", "updatedAt"]
    }).then(data => {
        res.send(data)
    })
}


//update User

exports.updateUser = (req, res) => {
    const {
        breednder,
        address,
        phone
    } = req.body
    const updateUser = {
        breednder,
        address,
        phone
    }

    console.log(updateUser)

    Users.update(updateUser, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        if (data) {
            Users.findOne({
                where: {
                    id: req.params.id
                },
                attributes: ["breednder", "address", "phone", "createdAt", "updatedAt"]
            }).then(change => {
                res.send(change)
            })
        }
    })
}

//Delete user

exports.deleteUser = (req, res) => {
    Users.destroy({
        where: {
            id: req.params.id
        }
    }).then(remove => {
        res.send({
            id: req.params.id
        })
    })
}