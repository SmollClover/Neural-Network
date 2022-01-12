/// <reference types="jest" />

import { Matrix } from '../src/class/Matrix';

describe('Matrix', () => {
	let matrix: Matrix;

	test('Create a Matrix', () => {
		matrix = new Matrix(1, 2);
		expect(matrix.data[0][1]).toEqual(0);
	});
});