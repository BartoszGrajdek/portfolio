import { keyframes } from 'styled-components';

export const blink = keyframes`

    0% {
        opacity:1;
    }
    40% {
        opacity:1;
    }
    60% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`;

export const fadeIn = keyframes`
    0%{opacity: 0;}
    100%{opacity: 1;}
`;
