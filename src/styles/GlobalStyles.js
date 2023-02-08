import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ${normalize}
    html{
        font-size: 10px;
        height:100%;
    }
    body, #root {
        height: 100%;
    }
`;
