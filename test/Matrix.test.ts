/// <reference types="jest" />

import { Matrix, MatrixMath } from '../src/class/Matrix';
const MMath = new MatrixMath();

describe('Matrix', () => {
	test('Create a Matrix', async () => {
		const matrix = new Matrix(2, 3);

		expect(matrix.data[0][1]).toEqual(0);
	});

	test('Set Matrix [0][1] to 5', async () => {
		const matrix = new Matrix(2, 3);
		matrix.set(0, 1, 5);

		expect(matrix.data[0][1]).toEqual(5);
	});

	test('Fill Matrix with random values', async () => {
		const matrix = new Matrix(2, 3);
		matrix.rand();

		expect(matrix.data[0][0]).not.toEqual(0);
	});

	test('Add 100 to Matrix [0][1]', async () => {
		const matrix = new Matrix(2, 3);
		matrix.data = [
			[0, 1, 7],
			[6, 9, 5],
		];
		matrix.add(100);

		expect(matrix.data).toEqual([
			[100, 101, 107],
			[106, 109, 105],
		]);
	});

	test('multiplyiply Matrix [0][1] by 5', async () => {
		const matrix = new Matrix(2, 3);
		matrix.data = [
			[7, 9, 9],
			[5, 6, 5],
		];
		matrix.multiply(5);

		expect(matrix.data).toEqual([
			[35, 45, 45],
			[25, 30, 25],
		]);
	});

	test('Add Matrix to Matrix', async () => {
		const a = new Matrix(2, 3);
		const b = new Matrix(2, 3);
		a.data = [
			[3, 1, 1],
			[1, 1, 4],
		];
		b.data = [
			[0, 3, 3],
			[1, 2, 1],
		];
		const c = await MMath.add(a, b);

		expect(c.data).toEqual([
			[3, 4, 4],
			[2, 3, 5],
		]);
	});

	test('Multiply Matrix to Matrix', async () => {
		const a = new Matrix(2, 3);
		const b = new Matrix(3, 2);
		a.data = [
			[9, 8, 3],
			[8, 6, 9],
		];
		b.data = [
			[4, 4],
			[3, 4],
			[3, 1],
		];
		const c = await MMath.multiply(a, b);

		expect(c.data).toEqual([
			[69, 71],
			[77, 65],
		]);
	});

	test('Transpose Matrix', async () => {
		const a = new Matrix(2, 3);
		a.data = [
			[5, 6, 9],
			[1, 3, 4],
		];
		const b = await MMath.transpose(a);

		expect(b.data).toEqual([
			[5, 1],
			[6, 3],
			[9, 4],
		]);
	});
});
