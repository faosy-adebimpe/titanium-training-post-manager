import { customAlphabet } from 'nanoid';
export const generateId = (length: number = 10) => {
    const nanoidNumbers = customAlphabet('0123456789', length);
    return Number(nanoidNumbers);
};
