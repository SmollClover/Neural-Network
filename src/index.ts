import consola from 'consola';
import { Matrix } from './class/Matrix';

const a = new Matrix(2, 3);
const b = new Matrix(3, 2);
a.rand();
b.rand();

console.log(a.data);
console.log(b.data);

const c = a.mult(b);
console.log(c?.data);
