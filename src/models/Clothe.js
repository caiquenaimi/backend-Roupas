import { v4 as uuidv4 } from "uuid";

export class Clothe {
    constructor(name, price, image, color, size, stock , type) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.color = color;
        this.size = size;
        this.stock = stock;
        this.type = type;
        this.id = uuidv4();
    }
}