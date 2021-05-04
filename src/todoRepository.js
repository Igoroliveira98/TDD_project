const loki = require("lokijs");

class TodoRepository {
    constructor() {
        const db = new loki("todo") // Nova instância do DB passsando o nome como parâmetro
        this.schedule = db.addCollection('schedule')
    }

    list() {
        return this.schedule.find()
    }

    create(data) {
        return this.schedule.insertOne(data)
    }
}

module.exports = TodoRepository

// const c = new TodoRepository();

// c.create({
//     name: "Flash",
//     power: "Velocity"
// })

// c.create({
//     name: "Batman",
//     power: "Vigilant"
// })

// console.log("list", c.list());