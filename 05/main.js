const menuPizzas = [];

class pizzas {
  constructor(id, nombre, ingredientes, precio) {
    this.id = id;
    this.nombre = nombre;
    (this.ingredientes = ingredientes), (this.precio = precio);
  }
}

const Muza = new pizzas(
  0,
  "Muzarella",
  [
    " salsa",
    " queso muzarella", 
    " aceitunas"
  ],
  599
);

const Pepperoni = new pizzas(
  1,
  "Pepperoni",
  [
    " salsa" ,
    " queso muzarella",
    " pepperoni"
  ],
  1200
);
const Margeritta = new pizzas(
  2,
  "Margeritta",
  [
    " salsa",
    " queso muzarella",
    " albahaca"
  ],
  1100
);

const Primavera = new pizzas(
  3,
  "Primavera",
  [
    " palmitos",
    " queso cremoso",
    " salsa golf",
    " huevo duro"
  ],
  900
);
const Fugazeta = new pizzas(
  4,
  "Fugazeta",
  [
    " cebolla caramelizada",
    " muzarella",
    " salsa de tomate",
  ],
  800
);
const Hawaiana = new pizzas(
  5,
  "Hawaiana",
  [
    " ananá",
    " salsa", 
    " queso muzarella",
    " jamon cocido",
    " aceitunas negras",
  ],
  1500
);

menuPizzas.push(
  Muza,
  Margeritta,
  Pepperoni,
  Primavera,
  Fugazeta,
  Hawaiana
);

console.log("a) Las pizzas que tengan un id impar.");

let pizzaInpar = menuPizzas.filter((pizza) => pizza.id % 2 != 0);

pizzaInpar.forEach((pizzas) => {
  console.log(`La pizza ${pizzas.nombre} tiene ID inpar`);
});

console.log("");
console.log("b) ¿Hay alguna pizza que valga menos de $600?");

let mostrarValor = () => {
  menuPizzas.some((pizza) => pizza.precio <= 600)
    ? console.log(`Obvio, si tenemos los mejores precios del condado!`)
    : console.log(`Perdón bro pero no existe pizza de $600`);
};
mostrarValor();

console.log("");
console.log("c) El nombre de cada pizza con su respectivo precio.");

menuPizzas.forEach((pizzas) => {
  console.log(`La pizza ${pizzas.nombre} sale $${pizzas.precio}`);
});

console.log("");
console.log("d) Todos los ingredientes de cada pizza");

menuPizzas.forEach((pizzas) => {
  console.log(
    `La pizza ${pizzas.nombre} viene con: ${pizzas.ingredientes}`
  );
});
console.log("");
console.log("Gracias por ver, vuelva prontos");