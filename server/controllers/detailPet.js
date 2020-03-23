const Sequelize = require("sequelize");
//const bcrypt = require("bcrypt");
const models = require("../models")
const Pets = models.pet;
const Users = models.users
const Species = models.species

exports.getDetail = (req, res) => {
    Pets.findOne({
        where: {
            id: req.params.id
        },
        include: [{
                model: Species,
                attributes: ["id", "name"]
            },
            {
                model: Users,
                attributes: ["id", "breednder", "address", "phone"]
            }
        ],
        attributes: ["id", "name", "about_pet", "photo", "createdAt", "updatedAt"]
    }).then(data => {
        res.send(data)
    })
}

// if (bill) {
//     res.send({
//         bill
//     })

// }