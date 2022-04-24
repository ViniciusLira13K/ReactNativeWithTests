import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { ENVIADO, NAO_ENVIADO } from '../../../../src/negocio/constantes/estadosLance';

import EnviaLance from "../../../../src/telas/Leilao/componentes/EnviaLance";

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('telas/Leilao/componentes/EnviaLance', () => {
    it('deve enviar o lance quando o botão for precionado.', async () => {
        const enviaLance = jest.fn(() => new Promise(resolve => resolve(ENVIADO)));

        //chama o componente
        const {
            getByPlaceholderText,
            getByA11yHint,
            getByText
        } = render(
            <EnviaLance
                enviaLance={enviaLance}
                cor="blue"
            />
        );

        //pesquisa o componente por algum campo especifico 
        const input = getByPlaceholderText("R$");
        const botao = getByA11yHint("Enviar lance");//accesibilityHint

        //adiciona o evento com o fireEvent
        fireEvent.changeText(input, "10");
        fireEvent.press(botao);

        //faz os devidos testes
        expect(enviaLance).toHaveBeenCalledWith("10");
        await waitFor(() => {//espera o componente ser renderizado
            expect(getByText(ENVIADO)).toBeTruthy();//espera um valor verdadeiro
        });

        expect(() => getByText(NAO_ENVIADO)).toThrow();//valida erro
    });
});