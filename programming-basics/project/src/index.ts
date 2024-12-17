// src/index.ts
import { sum } from './@utils/sum'; // Use relative path instead of alias

const result = sum(3, 4);
console.log(`The sum is: ${result}`);
