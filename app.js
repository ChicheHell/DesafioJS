function sumaTodosImpares(array) {
  // La funcion llamada 'sumaTodosImpares' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros impares.
  // ej:
  // sumaTodosImpares([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15

  // Tu código aca: 

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
    }
  }
  return sum;
};

//-----------------------------------------------------------------------------------------------------------------------

function stringMasLarga(str) {
  // La función llamada 'stringMasLarga', recibe como argumento un frase (string) 'str'
  // y debe devolver la palabra (string) más larga que haya en esa frase (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
  // stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
  // Tip: podes usar el metodo de String 'split'

  // Tu código aca: 

  const words = str.split(' ');
  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

//-----------------------------------------------------------------------------------------------------------------------

function estaOffline(usuarios, nombre) {
  // La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado 'usuarios' y un string llamada 'nombre'.
  // cada objeto tiene una property 'nombre' que es un string y otra llamada 'online' que es un booleano.
  // La función debe retornar true si el usuario se encuentra offline, de lo contrario false.
  // ej:
  // var usuarios = [
  //     {
  //       nombre: 'toni',
  //       online: true
  //     },
  //     {
  //       nombre: 'emi',
  //       online: true
  //     },
  //     {
  //       nombre: 'agus',
  //       online: false
  //     }
  // ];
  // estaOffline(usuarios, 'agus') retorna true
  // estaOffline(usuarios, 'emi') retorna false

  // Tu código aca:

  for (const usuario of usuarios) {
    if (usuario.nombre === nombre) {
      return !usuario.online;
    }
  }
  return false;
}

//-----------------------------------------------------------------------------------------------------------------------

function actividadesEnComun(persona1, persona2) {
  // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
  // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
  // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
  //     persona2 = ['comer', 'dormir', 'futbol']
  // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
  // Tip: podes usar ciclos for anidados.

  // Tu código aca:

  const actividadesComunes = [];
  for (const actividad1 of persona1) {
    for (const actividad2 of persona2) {
      if (actividad1 === actividad2) {
        actividadesComunes.push(actividad1);
      }
    }
  }
  return actividadesComunes;
}

//-----------------------------------------------------------------------------------------------------------------------

function buscaDestruye(arreglo, num) {
  // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
  // Esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
  // La función debe retornar el array sin los números sacados.
  // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
  // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
  // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
  //
  // Tu código aca:

  return arreglo.filter((elemento) => elemento !== num);
}

//-----------------------------------------------------------------------------------------------------------------------

function sumaDeArrays(array) {
  // El array recibido por parametro es un array multidimencional con array's que 
  //contienen elementos de tipo number
  // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
  // Sumando los elementos de cada array que contenga dos elementos,
  // y devolviendo la suma del mismo
  // OJO: Si el elemento dentro del array que ingresa por prop, 
  //ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
  //let a = [[5, 5], 4, [10, 15], [25, 10]]. 

  // Tu código aca:

    let sum = 0;
    array.forEach((element) => {
      if (Array.isArray(element)) {
        sum += sumaDeArrays(element);
      } else if (typeof element === "number") {
        sum += element;
      }
    });
    return sum;
}

//-----------------------------------------------------------------------------------------------------------------------

function mismoValorMismosElementos(numero, divisor) {
  // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
  // Todos los elementos deben tener el mismo valor
  // OJO: Si el resultado de la division no es un entero, deben devolver false

  // Tu código aca:

  if (numero % divisor === 0) {
    return Array(divisor).fill(numero);
  } else {
    return false;
  }
}

//-----------------------------------------------------------------------------------------------------------------------

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento

  // Tu código aca:

  const newArray = [];
  for (const element of array) {
    newArray.push(cb(element));
  }
  return newArray;
}

//-----------------------------------------------------------------------------------------------------------------------

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición

  //Tu código aca:

  return array.filter((elemento) => elemento[0].toLowerCase() === 'a');
}

//-----------------------------------------------------------------------------------------------------------------------
function sumarElTipo(arreglo) {
  // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento
  // que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
  // de veces que se repita cada tipo.
  // El objeto que devuelve tiene como propiedades el nombre de cada vehiculo y su valor es la cantidad de veces que se repite.
  // Ej:
  // sumarElTipo(['auto', 'moto', 'auto']); debe retornar {auto: 2, moto: 1}
  // Tip: podes usar el ciclo for o el metodo de Array 'reduce'

  // Tu código aca: 

  const tiposDeVehiculos = {};
  for (const vehiculo of arreglo) {
    if (!tiposDeVehiculos[vehiculo]) {
      tiposDeVehiculos[vehiculo] = 1;
    } else {
      tiposDeVehiculos[vehiculo]++;
    }
  }
  return tiposDeVehiculos;
}

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto

  // Tu código: 

  const gato = {
    nombre: nombre,
    edad: edad,
    meow: function() {
      return "Meow!";
    }
  };
  return gato;
}

function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto 
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)

  // Tu código: 

  objeto[property] = null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")

  // Tu código: 

  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto

  // Tu código:

  return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation = Notacion de corchetes. 
  // Devuelve el objeto

  // Tu código:

  delete objeto[unaPropiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los 
  // argumentos que se pasan a la función
  // Devuelve el objeto

  // Tu código:

  return {
    nombre: nombre,
    email: email,
    password: password
  };
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"

  // Tu código:

  return usuario.hasOwnProperty('email') && usuario.email !== undefined;
}

function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) 
  //cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  return objeto.hasOwnProperty(propiedad);
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código: 
  return usuario.password === password;
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto

  // Tu código:

  usuario.password = nuevaPassword;
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"

  // Tu código: 

  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el  array de usuarios
  // Tu código: 
  for (const usuario of usuarios) {
    usuario.esPremium = true;
  }
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma

  // Tu código:

  let totalLikes = 0;
  for (const post of usuario.posts) {
    totalLikes += post.likes;
  }
  return totalLikes;
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)

  // Tu código: 

  producto.calcularPrecioDescuento = function() {
    return producto.precio - (producto.precio * producto.porcentajeDeDescuento);
  };
  return producto;
}

//-------------------------------------------Interacción con el DOM--------------------------------------------------------
// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá: 
const createdBySpan = document.querySelector('#createdBy');
createdBySpan.innerHTML += ' Felipe Conde';

//-----------------------------------------------------------------------------------------------------------------------

// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
//       asignándole el valor de la propiedad 'description' del objeto ToDo.
//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell

function buildToDo(todo, index) { //todo es un objeto de la clase TODO. //index numerico 
  // Tu código acá:
  const toDoShell = document.createElement('div');
  toDoShell.classList.add('toDoShell');

  const toDoText = document.createElement('span');
  toDoText.innerHTML = todo.description;
  toDoText.id = index.toString();

  if (todo.complete) {
    toDoText.innerHTML = '✓ ' + todo.description;
  } else {
    toDoText.innerHTML = '✗ ' + todo.description;
  }

  toDoShell.appendChild(toDoText);

  return toDoShell;
}

//-----------------------------------------------------------------------------------------------------------------------

// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionar el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacío ("")
//  3) Llamar a la función previamente creada 'buildToDo' pasándole como argumento el array toDoItems
//  4) Iterar sobre el resultado devuelto por la función 'buildToDo' e ir agregando cada elemento a 'toDoContainer'
//  5) Al final de este archivo, escribir una línea para hacer el llamado a esta función (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

class ToDo {
  constructor(description, complete) {
    this.description = description;
    this.complete = complete;
  }
}
const todo1 = new ToDo('Completar el Desafio', true);
const todo2 = new ToDo('Subir a GitHub', true);
const todo3 = new ToDo('Subir la tarea que falta', false);
const toDoItems = [todo1, todo2, todo3];

function displayToDos() {
  // Tu código acá:
  
  const toDoContainer = document.querySelector('#toDoContainer');
  toDoContainer.innerHTML = '';

  for (let i = 0; i < toDoItems.length; i++) {
    toDoContainer.appendChild(buildToDo(toDoItems[i], i));
  }
}

// Llamado a la función para mostrar los ToDos en pantalla
displayToDos();