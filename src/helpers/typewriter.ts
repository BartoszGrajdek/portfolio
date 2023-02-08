import { SetStateAction, Dispatch } from 'react';

export const typewriter = (string: string, currentString: string, setString: Dispatch<SetStateAction<string>>, setIsWaiting: Dispatch<SetStateAction<boolean>>, index: number) => {
    const interval = Math.floor(Math.random() * (120 - 10 + 1) + 10);
    const letters = string.split('');
    if (index + 1 <= letters.length) {
        const character = letters[index];
        const tempString = currentString + character;
        setString(tempString);
        setTimeout(() => typewriter(string, tempString, setString, setIsWaiting, index + 1), interval);
    } else {
        setIsWaiting(true);
    }    
};