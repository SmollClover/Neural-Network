export type MatrixData = Array<Array<number>>;

class Matrix {
	private rows: number;
	private columns: number;
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

	public set(row: number, column: number, n: number): void {
		if (this.rows < row || this.columns < column) return;

		this.data[row][column] = n;
	}

	public rand(): void {
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				this.data[i][j] = Math.floor(Math.random() * 100);
			}
		}
	}

	public add(n: number | Matrix): void {
		if (n instanceof Matrix) {
			for (let i = 0; i < this.rows; i++) {
				for (let j = 0; j < this.columns; j++) {
					this.data[i][j] += n.data[i][j];
				}
			}
		} else {
			for (let i = 0; i < this.rows; i++) {
				for (let j = 0; j < this.columns; j++) {
					this.data[i][j] += n;
				}
			}
		}
	}

	public mult(n: number): void {
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				this.data[i][j] *= n;
			}
		}
	}
}

export { Matrix };
