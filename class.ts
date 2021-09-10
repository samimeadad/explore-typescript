class Car {
    model: string;
    price: number;
    private _millage: number;
    constructor( model: string, price: number ) {
        this.model = model;
        this.price = price;
        this._millage = 100000;
    }
    getActualMillage (): number {
        const realMillage = this._millage + 50000;
        return realMillage;
    }
    getTotalPrice ( tax: number ): number {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}

const toyota = new Car( 'Toyota Corola', 355000 );
const price = toyota.getTotalPrice( 25 );
const millage = toyota.getActualMillage();

console.log( price );
console.log( millage );