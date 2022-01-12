/// <reference types="jest" />

import { Matrix } from '../src/class/Matrix';

describe('Matrix', () => {
	let matrix: Matrix;

	test('Create a Matrix', () => {
		matrix = new Matrix(1, 2);

		expect(matrix.data[0][1]).toEqual(0);
	});

	test('Set Matrix [0][1] to 5', () => {
		matrix.set(0, 1, 5);

		expect(matrix.data[0][1]).toEqual(5);
	});

	test('Fill Matrix with random values', () => {
		matrix.rand();

		expect(matrix.data[0][0]).not.toEqual(0);
	});

	test('Add 100 to Matrix [0][1]', () => {
		const tempValue = matrix.data[0][1];
		matrix.add(100);

		expect(matrix.data[0][1]).toEqual(tempValue + 100);
	});

	test('Multiply Matrix [0][1] by 5', () => {
		const tempValue = matrix.data[0][1];
		matrix.mult(5);

		expect(matrix.data[0][1]).toEqual(tempValue * 5);
	});
});
