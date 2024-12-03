import styled from 'styled-components';
import CampoTexto from '@/components/CampoTexto';

const HeaderEstilizado = styled.div`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`;

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src="./images/logo.png" alt="Logotipo" />
            <CampoTexto />
        </HeaderEstilizado>
    );
};

export default Cabecalho;
