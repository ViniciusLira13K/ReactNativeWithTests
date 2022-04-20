import { formataBrasileiroParaDecimal, formataDecimalParaReal } from '../../../src/negocio/formatadores/moeda';

//describe variavel global de test recebe primeiro parametro uma mensagem e o segundo uma função
describe("negocio/formatadores/moeda", () => {

    describe("formataBrasileiroParaDecimal", () => {
        //it || test = função que faz o teste
        it("deve retornar 8.59 quando o valor for 8,59", () => {
            const resultado = formataBrasileiroParaDecimal("8,59");
            //expect = função que valida o teste e printa na tela se estiver errado
            expect(resultado).toBeCloseTo(8.5901);
        });

    });

    describe("formataDecimalParaReal", () => {

        it("deve retornar R$ 8,59 quando o valor for 8.59", () => {
            const resultado = formataDecimalParaReal(8.59);

            expect(resultado).toMatch(/R\$\s8,59/);// \s = espaço ou tab ou qualquer tipo de espaço
        });
    });

});