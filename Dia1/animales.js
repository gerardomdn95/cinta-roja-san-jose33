// Clases con primera letra mayúscula (Pascal case)
class Animal {
    constructor(nombre, edad, habitat, color) {
        this.nombre = nombre; 
        this.edad = edad;
        this.habitat = habitat;
        this.color = color;
    }
}

class Anfibio extends Animal {
    constructor(nombre, edad, habitat, color, venenosos, acuatico) {
        super(nombre, edad, habitat, color);
        // this.nombre = nombre; 
        // this.edad = edad;
        // this.habitat = habitat;
        // this.color = color;
        this.venenosos = venenosos;
        this.acuatico = acuatico;
    }
}

const perro = new Animal("Diva", 4, "Casa", "Blanco y negro");
const gato = new Animal("Nieve", 1, "hogar", "miel");
const rana = new Anfibio("rene", 2, "pantano", "café", false, false);

console.log(perro, gato, rana);