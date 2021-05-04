const { describe, it, before } = require("mocha");
const { expect } = require("chai");
const Todo = require("../src/todo");

describe("todo", () => {
    describe("#isValid", () => {
        it('should return invalid when creating an object without text', () => {
            const data = {
                text: '',
                when: new Date("2020-12-01")
            }

            const todo = new Todo(data)
            const result = todo.isValid()
            expect(result).to.be.not.ok

            // Return false for text property is null or invalid

        })

        it('should return invalid when creating a object using the "when" property is invalid', () => {
            const data = {
                text: 'Hello World',
                when: new Date("20-01-01")
            }

            const todo = new Todo(data)
            const result = todo.isValid()
            expect(result).to.be.not.ok

            // Return false for when property is null or invalid

        })

        it('there should is "id", "status", "when", and "text" properties after creating a object', () => {
            const data = {
                text: 'Hello World',
                when: new Date("2021-01-01")
            }

            const todo = new Todo(data)
            const result = todo.isValid()
            expect(result).to.be.ok
        })

    })
});