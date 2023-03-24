let dinoArray = ['Stegosaurus', 'Sharptooth', 'Longneck', 'Ducky']

module.exports = {
    getDinos: (req, res) => {
        res.status(200).send(dinoArray)
    }, 

    addDino: (req, res) => {
        console.log(req.body)
        let {name} = req.body

        dinoArray.push(name)

        res.status(200).send(dinoArray)
    },

    deleteDino: (req, res) => {
        let index = req.params.id - 1

        dinoArray.splice(index, 1)

        res.status(200).send(dinoArray)
    }
}