export class ClotheList {
    constructor() {
        this.clothes = [];
    }

    getAllClothes() {
        return this.clothes;
    }

    getClotheById(id) {
        return this.clothes.find((clothe) => clothe.id === id);
    }

    getClotheByType(type) {
        return this.clothes.filter((clothe) => clothe.type === type);
    }

    addClothe(clothe) {
        this.clothes.push(clothe);
    }

    updateClothe(id, name, price, image, color, size, stock, type) {
        this.clothes = this.clothes.map((clothe) => {
            if (clothe.id === id) {
                clothe.name = name;
                clothe.price = price;
                clothe.image = image;
                clothe.color = color;
                clothe.size = size;
                clothe.stock = stock;
                clothe.type = type;
            }
            return clothe;
        });
        return this.getClotheById(id);
    }

    removeClothe(id) {
        this.clothes = this.clothes.filter(clothe => clothe.id !== id)
    }

   

}