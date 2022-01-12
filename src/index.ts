import consola from 'consola';
import { Matrix } from './class/Matrix';

const m = new Matrix(2, 3);
m.rand();
console.table(m.data);
