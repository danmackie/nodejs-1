import fs from 'fs';
import path from 'path';

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
)

export default class Cart {
    static addProduct(id) {
        //Fetch from previous cart
        //Analyse cart => find existing product
    }
}