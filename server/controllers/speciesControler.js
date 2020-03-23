const models = require("../models");
const Species = models.species;
const SpeciesAll = models.species;

//FindALL species

exports.Species = (req, res) => {
    Species.create(req.body).then(search => {
        res.send({
            search
        });
    });
};

exports.SpeciesAll = (req, res) => {
    SpeciesAll.findAll().then(showAll => {
        res.send(showAll);
    })
}