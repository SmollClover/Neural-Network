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

	public rand(): void {
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				this.data[i][j] = Math.floor(Math.random() * 100);
			}
		}
	}

	public add(n: number): void {
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				this.data[i][j] += n;
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
