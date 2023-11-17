import { Clothe } from "../models/Clothe.js";
import { ClotheList } from "../models/ClotheList.js";

const clotheList = new ClotheList();

export const getClothes = (req, res) => {
    const { type } = req.query;

    if (type) {
        const clothes = clotheList.getClotheByType(type);

        if (clothes.length) {
            return res.status(200).send(clothes);
        }

        return res.status(404).send(
            { "message": `Clothe with type(${type})  not found` }
        )
    }

    const clothes = clotheList.getAllClothes();

    if (!clothes) {
        return res.status(404).send(
            { "message": `Clothes not found` }
        )
    }

    return res.status(200).send(clothes);

};

export const getClotheById = (req, res) => {

    const { id } = req.params;

    const clothe = clotheList.getClotheById(id);

    if (clothe) {
        return res.status(200).send(clothe);
    }

    return res.status(404).send(
        { "message": `Clothe with ID(${id})  not found` }
    )
}

/* export const getClotheByType = (req, res) => {

    const { type } = req.query;

    const clothes = clotheList.getClotheByType(type);

    if (clothes.length) {
        return res.status(200).send(clothes);
    }

    return res.status(404).send(
        { "message": `Clothe with type(${type})  not found` }
    )

} */

export const postClothe = (req, res) => {

    const { name, price, image, color, size, stock, type } = req.body;

    console.log(size);

    const errors = [];

    const IsURLValid = (URL) => {
        const regex = new RegExp(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g);
        return regex.test(URL);
    }

    if (!name) {
        errors.push("name");
    } if (!price) {
        errors.push("price");
    } if (!image) {
        errors.push("image");
    } if (!color) {
        errors.push("color");
    } if (!size) {
        errors.push("size");
    } if (!stock) {
        errors.push("stock");
    } if (!type) {
        errors.push("type");
    } if (errors.length) {
        return res.status(400).send(
            { "message": `Missing ${errors.join(", ")} in request body` }
        )
    } else if (typeof price !== "number") {
        return res.status(400).send(
            { "message": `Price must be a number` }
        )
    } else if (parseInt(stock) > 15000) {
        return res.status(400).send(
            { "message": `Stock maximum is 15000 pices of clothe` }
        )
    } else if (color.length > 20) {
        return res.status(400).send(
            { "message": `Color maximum characters is 20` }
        )
    } else if (size != "PP" && size !== "P" && size !== "M" && size !== "G" && size && "GG" && size !== "XG") {
        return res.status(400).send(
            { "message": `Size must be PP, P, M , G , GG or XG` }
        )
    }
    else if (type.length > 50) {
        return res.status(400).send(
            { "message": `Type maximum 50 characters ` }
        )
    } else if (typeof name !== "string") {
        return res.status(400).send(
            { "message": `Name must be a string` }
        )
    } else if (name.length < 6 || name.length > 40) {
        return res.status(400).send(
            { "message": `Name must be between 6 and 40 characters` }
        )
    } else if (IsURLValid(image) === false) {
        return res.status(400).send(
            { "message": `incorrect image URL ` }
        )
    } else {
        const clothe = new Clothe(name, price, image, color, size, stock, type);

        clotheList.addClothe(clothe);

        return res.status(201).send(
            {
                "message": `${name} created successfully`,
                clothe,
            })
    };

}

export const putClothe = (req, res) => {

    const { id } = req.params;

    const { name, price, image, color, size, stock, type } = req.body;

    const clothe = clotheList.getClotheById(id);


    const errors = [];

    const IsURLValid = (URL) => {
        const regex = new RegExp(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g);
        return regex.test(URL);
    }

    if (!name) {
        errors.push("name");
    } else if (!price) {
        errors.push("price");
    } else if (!image) {
        errors.push("image");
    } else if (!color) {
        errors.push("color");
    } else if (!size) {
        errors.push("size");
    } else if (!stock) {
        errors.push("stock");
    } else if (!type) {
        errors.push("type");
    } else if (errors.length) {
        return res.status(400).send(
            { "message": `Missing ${errors.join(", ")} in request body` }
        )
    } else if (typeof price !== "number") {
        return res.status(400).send(
            { "message": `Price must be a number` }
        )
    } else if (typeof stock !== "number" && stock.parseInt(stock) > 15000) {
        return res.status(400).send(
            { "message": `Stock must be a number with maximum 15000 clothes` }
        )
    } else if (typeof size !== "string" && size !== "PP" || size !== "P" || size !== "M" || size !== "G" || size !== "GG" || size !== "XG") {
        return res.status(400).send(
            { "message": `Size must be a string with the correct sizes` }
        )
    } else if (typeof color !== "string" && color.length > 20) {
        return res.status(400).send(
            { "message": `Color must be a string` }
        )
    } else if (typeof type !== "string" && type.length > 50) {
        return res.status(400).send(
            { "message": `Type must be a string with maximum 50 characters ` }
        )
    } else if (typeof name !== "string") {
        return res.status(400).send(
            { "message": `Name must be a string` }
        )
    } else if (name.length < 6 || name.length > 40) {
        return res.status(400).send(
            { "message": `Name must be between 6 and 40 characters` }
        )
    } else if (IsURLValid(image) === false) {
        return res.status(400).send(
            { "message": `incorrect image URL ` }
        )
    } else if (!clothe) {
        return res.status(404).send(
            { "message": `Clothe with ID(${id})  not found` }
        )
    }
    else {

        const clotheUpdated = clotheList.updateClothe(id, name, price, image, color, size, stock, type);

        return res.status(200).send(
            {
                "message": `${name} updated successfully`,
                clotheUpdated,
            })
    };



    return res.status(404).send(
        { "message": `Clothe with ID(${id})  not found` }
    )
}

export const deleteClothe = (req, res) => {

    const { id } = req.params;

    const clothe = clotheList.getClotheById(id);

    if (clothe) {
        clotheList.removeClothe(id);
        return res.status(200).send(
            { "message": `Clothe with ID(${id}) deleted successfully` }
        )
    }

    return res.status(404).send(
        { "message": `Clothe with ID(${id}) not found` }
    )
}