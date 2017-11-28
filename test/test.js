const expect = require('chai').expect;
const plat = require('..').default;

describe('#plat', function () {
    it('Si la palabra termina con ar, se le quitan ambas letras (ar)', function () {
        const translation = plat("programar");
        expect(translation).to.equal("program");
    });
    it('Si la palabra comienza con z, se le añade pe', function () {
        const translation = plat("zarpar");
        expect(translation).to.equal("zarppe");
    });
    it('Si la palabra tiene mas d 10 letras, se corta', function () {
        const translation = plat("abecedario");
        expect(translation).to.equal("abece-dario");
    });
    it('si la palabra es palindromo, le da camel case', function () {
        const translation = plat("somos");
        expect(translation).to.equal("SoMoS");
    });
})