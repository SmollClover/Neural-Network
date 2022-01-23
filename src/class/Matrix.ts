export type MatrixData = Array<Array<number>>;

class MatrixMath {
	public constructor() {}

	public async add(a: Matrix, b: Matrix): Promise<Matrix> {
		if (a.rows !== b.rows || a.columns !== b.columns) throw new Error('Matrix must have same row and column length');
		const result = new Matrix(a.rows, a.columns);

		for (let i = 0; i < a.rows; i++) {
			for (let j = 0; j < a.columns; j++) {
				result.data[i][j] = a.data[i][j] + b.data[i][j];
			}
		}

		return result;
	}

	public async multiply(a: Matrix, b: Matrix): Promise<Matrix> {
		if (a.columns !== b.rows) throw new Error('Columns of Matrix A must match Rows of Matrix B');
		const result = new Matrix(a.rows, b.columns);

		for (let i = 0; i < result.rows; i++) {
			for (let j = 0; j < result.columns; j++) {
				let sum = 0;

				for (let k = 0; k < a.columns; k++) {
					sum += a.data[i][k] * b.data[k][j];
				}

				result.data[i][j] = sum;
			}
		}

		return result;
	}

	public async transpose(a: Matrix): Promise<Matrix> {
		const result = new Matrix(a.columns, a.rows);

		for (let i = 0; i < a.rows; i++) {
			for (let j = 0; j < a.columns; j++) {
				result.data[j][i] = a.data[i][j];
			}
		}

		return result;
	}
}

class Matrix {
	public rows: number;
	public columns: number;
	public data: MatrixData;

	public constructor(rows: number, columns: number) {
		this.rows = rows;
		this.columns = columns;
		this.data = [];

		for (let i = 0; i < rows; i++) {
			this.data.push([]);
			for (let j = 0; j < columns; j++) {
				this.data[i][j] = 0;
			}
		}
	}

	public async set(row: number, column: number, n: number): Promise<void> {
		if (this.rows < row || this.columns < column) return;

		this.data[row][column] = n;
	}

	public async rand(): Promise<void> {
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				this.data[i][j] = Math.floor(Math.random() * 9) + 1;
			}
		}
	}

	public async add(n: number): Promise<void> {
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				this.data[i][j] += n;
			}
		}
	}

	public async multiply(n: number): Promise<void> {
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				this.data[i][j] *= n;
			}
		}
	}
}

export { Matrix, MatrixMath };
