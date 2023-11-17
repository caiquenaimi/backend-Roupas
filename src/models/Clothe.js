import { v4 as uuidv4 } from "uuid";

export class Clothe {
    constructor(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.id = uuidv4();
    }
}