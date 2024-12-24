import data from '../data/productos.json';

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    });
};

export const pedirItemPorId = (id) => {
    console.log("ID recibido en pedirItemPorId:", id);

    return new Promise((resolve, reject) => {
        const item = data.find((producto) => producto.id === id);

        if (item) {
            console.log("Item encontrado:", item);
            resolve(item);
        } else {
            console.error(`Error: Item con id ${id} no encontrado`);
            reject(new Error(`Item con id ${id} no encontrado`));
        }
    });
};