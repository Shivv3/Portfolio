import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

//Purpose: Utility function to merge class names and handle Tailwind CSS conflicts
// Usage: cn('class1', 'class2', 'class3') will return a single string with merged class names
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));  
};