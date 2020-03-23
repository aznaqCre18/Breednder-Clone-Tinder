const Sequelize = require("sequelize");
//const bcrypt = require("bcrypt");
const models = require("../models")
const Pets = models.pet;
const Users = models.users
const Species = models.species


exports.create = (req, res) => {
    try {
        const {
            name,
            gender,
            spesies,
            ages,
            user,
            about_pet,
            photo,
        } = req.body;
        const addPet = {
            name,
            gender,
            ages,
            about_pet,
            photo,
            id_species: spesies.id,
            id_user: user.id,
            //id_ages: age,
        }
        console.log(addPet)

        Pets.create(addPet).then(pet => {
            // res.send(pet)
            console.log(pet.id)
            if (pet) {
                Pets.findOne({
                    where: {
                        id: pet.id
                    },
                    attributes: ["id", "name", "gender", "about_pet", "photo", "createdAt", "updatedAt"],
                    include: [{
                            model: Users,
                            attributes: ["id", "breednder", "address", "phone"]
                        },
                        {
                            model: Species,
                            attributes: ["id", "name"]
                        }
                    ],

                }).then(data => {
                    console.log(data)
                    res.send(data)
                })
            }
        })

    } catch (e) {

    }


}

//Get All Pets
exports.getPets = (req, res) => {
    Pets.findAll({
        attributes: ["id", "name", "gender", "about_pet", "photo", "createdAt", "updatedAt"],
        include: [{
                model: Species,
                attributes: ["id", "name"],
            },
            {
                model: Users,
                attributes: ["id", "breednder", "email", "address", "phone"],
            }
        ]
    }).then(pets => {
        if (pets) {
            res.send(pets)
        } else {
            res.status(400).send({
                error: true,
                message: "Error get data pets"
            })
        }

    })
}


//update PET

exports.updatePet = (req, res) => {
    const {
        name,
        gender,
        species,
        ages,
        user,
        about_pet,
        photo
    } = req.body
    const dataPet = {
        name,
        gender,
        id_species: species.id,
        ages,
        id_users: user.id,
        about_pet,
        photo
    }
    console.log(dataPet);

    Pets.update(dataPet, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        // res.send(data)
        if (data) {

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
                attribute: ["id", "name", "gender", "age", "about_pet", "photo", "createdAt", "updatedAt"],
            }).then(data2 => {
                res.send({
                    data2
                })
            })
        }
    })

}



// // Delete Pet
exports.deletePet = (req, res) => {
    Pets.destroy({
        where: {
            id: req.params.id
        }
    }).then(remove => {
        res.send({
            id: req.params.id
        })
    })
}