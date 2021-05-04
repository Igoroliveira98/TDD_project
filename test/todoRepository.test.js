const { describe, it, before, afterEach } = require("mocha");
const { expect } = require("chai");
const { createSandbox } = require("sinon"); 

const TodoRepository = require("../src/todoRepository");

describe("todoRepository", () => {
    let todoRepository;
    let sandbox;
    before(() => {
        todoRepository = new TodoRepository();
        sandbox = createSandbox();
    })
    // limpa o resultado após o teste:
    afterEach(() => {
        sandbox.restore();
    })
    describe("methods signature", () => {
        it("should call find from lokijs", () => {
            const mockDatabase = [
                {
                  name: 'Flash',
                  power: 'Velocity',
                  meta: { revision: 0, created: 1620154103582, version: 0 },
                  '$loki': 1
                }
            ]

            const functioName = "find"
            const expectReturn = mockDatabase

            sandbox.stub(
                todoRepository.schedule,
                functioName
            ).return(expectReturn);

            const result = todoRepository.list();

            expect(result).to.empty.deep.equal(expectReturn);


        })
        it("should call insert from lokijs", () => {})
    })
})