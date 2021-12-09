//iteracion4.1.1  Consigue el valor "HULK" del array de cars y muestralo por consola.

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//iteracion4.1.1 Cambia el primer elemento de avengers a "IRONMAN"

avengers[0] = "IRONMAN";
console.log(avengers);

//iteracion4.1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.

//alert(avengers.length);

//iteracion4.1.4  Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty","Summer");
let last = rickAndMortyCharacters.indexOf('Summer');
console.log(rickAndMortyCharacters[last]);

////iteracion4.1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
rickAndMortyCharacters.push('Lapiz Lopez');
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0]);
let lastOne = rickAndMortyCharacters.length - 1;
console.log(rickAndMortyCharacters[lastOne]);

//iteracion4.1.6 Elimina el segundo elemento del array y muestra el array por consola. 
const rickAndMortyCharacter = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacter.splice(1,1);
console.log(rickAndMortyCharacter);


