//--------------------------
// 1. ZMIENNE I TYPY
//--------------------------

//a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych

const arrayOfType1 = [true, 10, "siemka"];

function checkType1(arr) {
  return arr.map((value) => typeof value);
}
console.log(checkType1(arrayOfType1));

//b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.

console.log(2 + "2"," - wynik testu wynika z połączenia numbera ze stringiem co ostatecznie daje nam number");

console.log(2 + 2,"- wynk to typ number i wynika z dodania dwóch typów number do siebie");

console.log(2 * "8","- wynik to typ number i wynika z pomnożenia typu number z typem string co daje nam ostatecznie number ");

console.log(2 * 2,"- wynikiem testu jest number, ponieważ pomnożyliśmy dwie liczby przez siebie ");

console.log(1 == true,"- wynikiem testu jest wartość boolean ponieważ użyliśmy operatora porównania który zwraca true lub false");

console.log(0 == false,"- wynikiem testu jest wartość boolean ponieważ użyliśmy operatora porównania który zwraca true lub false");

console.log(0 == null," - wynikiem testu jest wartość boolean ponieważ użyliśmy operatora porównania który zwraca true lub false ");

console.log(null == undefined,"- wynikiem testu jest wartość boolean ponieważ użyliśmy operatora porównania który zwraca true lub false");

//napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="

console.log("=","Jest on znakiem przypisania wartości z prawej strony tego znaku, do zmiennej znajdującej się po lewej stronie");

console.log("==","Sprawdza czy wartość po lewej stronie jest równa wartości po prawej stronie bez względu na ich typ");

console.log("===","Sprawdza czy wartość po lewej stronie jest równa wartości po prawej stronie biorąc pod uwagę ich typ");

//c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli

console.log("W typach referencyjnych wartość jest przekazywana za pomocą referencji tzn.za pomocą informacji, w jakim miejscu w pamięci jest przetrzymywana wartość i są to tablice, obiekty i funkcje, a w typach prostych informacja jest przekazywana za pomocą wartości i typami prostymi są np. stringi czy numbery. ");

//d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości:

let val = 0; // (przekonwertuj na typ Boolean)
console.log(Boolean(val));

let numWithString = "2137"; //(przekonwertuj na typ Number)
console.log(Number(numWithString));

let strigWithnum = 007; // (przekonwertuj na String)
let str = strigWithnum.toString(10);
str = "00" + str;
str = str.slice(-3);
console.log(str, "wyświetla oporawnie w https://jsfiddle.net/");

let und = undefined; //(przekonwertuj na Boolean)
console.log(Boolean(und));

//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli

let emptyArray = Array();

emptyArray.push("Ford");
emptyArray.push("Porsche");
emptyArray.push("Bmw");

console.log(emptyArray);

//f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli

let emptyObject = new Object();

emptyObject.key1 = "values1";
emptyObject.key2 = "values2";
emptyObject.key3 = "value3";

console.log(emptyObject);

//g)* opisz krótko czym dokładnie jest typ NaN

console.log("NaN Not a Number Jest to specjalna wartość zmiennoprzecinkowa, która oznacza, że wynik operacji nie został zdefiniowany lub nie można go przedstawić jako liczby rzeczywistej np 0 podzielone przez 0 daje NaN.");

//h)** znajdź w sieci informacje o typie Symbol i opisz go krótko

console.log("Symbole są niezmienne (nie można ich zmienić) i są unikalne W Symbolu dostępne są różne metody i różne właściwości symbolu.Jeśli ten sam fragment kodu jest używany w różnych programach, lepiej jest użyć Symbol w kluczu obiektowym. To dlatego, że możesz używać tej samej nazwy klucza w różnych kodach i unikać problemów z powielaniem.");

//--------------------------
//2. FUNKCJE & WARUNKI
//--------------------------

//a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb

function addNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(addNumbers(2, 3, 5));

//b) napisz funkcję która przymie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik

function triangleArea(base, height) {
  return (1 / 2) * base * height;
}

console.log(triangleArea(20, 10));

//c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację

const checkAge = (age) => age < 18 ? "Wrong age" : `"Od 18 urodzin mineło ${age - 18} lat"`;

console.log(checkAge(30));

//d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości

const arrayOfAnimals = ["dog", "cat", "pig", "cow", "horse", "duck"];

function checkAnimals(array, index) {
  for (l = 0; l < array.length; l++) {
    return `Przekazana tablica ma "${array.length}" elementów a elementem numer ${index} jest "${array[index - 1]}"`;
  }
}
console.log(checkAnimals(arrayOfAnimals, 3));

//e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.

let testPerson = {
  name: "Jan",
  surname: "Kowalski",
  age: 20,
  height: 180,
};

function person(obj) {
  console.log(`"Pan/i ${obj.name} ${obj.surname} ma ${obj.age} lat oraz ${obj.height} cm wzrostu"`);
}

person(testPerson);

// f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie.
//  Spróbuj zmodyfikować na przykład wiek.

let testPerson2 = {
  name: "Jan",
  surname: "Kowalski",
  age: 20,
  height: 180,
};

function modifyObject(obj, newAge) {
  obj.age = newAge;
}
modifyObject(testPerson2, 30);

console.log(testPerson2);

//g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
// - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
// - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
// - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"

function checkNumbers(paramater) {
  if (typeof paramater !== typeof 1) {
    console.log("przyjmowany jest tylko typ number");
  } else if (paramater % 3 == 0 && paramater % 5 == 0) {
    console.log("FizzBuzz");
  } else if (paramater % 3 == 0) {
    console.log("Fizz");
  } else if (paramater % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(`"cyfra ${paramater} nie jest podzielna przez 3 i przez 5"`);
  }
}

checkNumbers(15);

//h napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego

function checkNumbers2(number) {
  const result = number % 2 == 0 ? `liczba ${number} jest parzysta` : `liczba ${number} jest nie parzysta`;
  return result;
}
console.log(checkNumbers2(10));

//j)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomNumber(10));

//j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu

function getRandomNumber2(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomNumber2(10, 20));

//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.

console.log("3 metody Math użyte w poprzednim zadaniu.");

//--------------------------
// FUNKCJE & PĘTLE
//--------------------------

//uwaga! Możesz spróbować każdą z pętli napisać w funkcji

//a) napisz pętlę która odliczy od 1 do 9

for (let i = 1; i <= 9; i++) {
  console.log(i);
}

//b) napisz pętlę która odliczy od 9 do 1

for (let i = 9; i >= 1; i--) {
  console.log(i);
}

//c) napisz pętlę która odliczy od 5 do 15

let i = 5;
while (i < 15) {
  console.log(i);
  i++;
}

//d) napisz pętlę która odliczy od 0 do -10

let iterator = 0;
while (iterator >= -10) {
  console.log(iterator);
  iterator--;
}

//e) napisz pętlę która odliczy od 1 do 20, iteracja co 2

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

//f) napisz pętlę która odliczy od 10 do -10, iteracja co 4

for (let i = 10; i >= -10; i -= 4) {
  console.log(i);
}

//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...

for (let i = 1; i < 100; i *= 2) {
  console.log(i);
}

//h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości

for (let i = 1; i < 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfram jest parzysta czy nie, możesz użyć operatora trójargumentowego

for (let i = 1; i <= 10; i++) {
  const result = i % 2 == 0 ? `${i} jest liczbą parzystą` : `${i} jest liczbą nie parzystą`;
  console.log(result);
}

//Uwaga! kolejne pętle trzeba napisać w funkcji

//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości

function deduct(number) {
  for (i = 1; i <= number; i++) {
    console.log(i);
  }
}

deduct(8);

//k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)

function deduct2(number) {
  for (i = 0; i <= 50; i += number) {
    console.log(i);
  }
}

deduct2(3);

//l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób
// const arrNames = ["Ksawery", "Zenobiusz", "Klementyna", "Apolonia", "Jeremiasz", "Bernadetta"]

const arrNames = [
  "Ksawery",
  "Zenobiusz",
  "Klementyna",
  "Apolonia",
  "Jeremiasz",
  "Bernadetta",
];

function sayHello(array) {
  for (i = 0; i < array.length; i++) {
    console.log("Hello " + array[i]);
  }
}
sayHello(arrNames);

//ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.

const arrObjects = [
  {
    brand: "Mustang",
    color: "niebieski",
  },
  {
    brand: "Tesla",
    color: "czarna",
  },
  {
    brand: "Polonez",
    color: "żółty",
  },
  {
    brand: "Toyota",
    color: "fioletowa",
  },
];

function cars(array) {
  for (key of array) {
    console.log(`"przed Tobą stoi ${key.color} ${key.brand}"`);
  }
}
cars(arrObjects);

//m) napisz funkcję która przyjmie tablic arrNumbers i wyświetli w konsoli tylko przyste elementy tablicy

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkNumbers3(array) {
  for (j = 0; j < array.length; j++) {
    if (array[j] % 2 == 0) {
      console.log(array[j]);
    } else {
      continue;
    }
  }
}
checkNumbers3(arrNumbers);

// n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
// - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther
// - za pomocą push umieści elementy o typie number w tablicy arrNumbers
// - za pomocą push umieści numery parzyste w tablicy arrEven
// - na końcu zwróci obiekt z tymi trzema tablicami

const arrTypes = [2,4,5,undefined,null,"val",NaN,7,10,333,"874",22,21,400,"400","undefined",];

const arrOther = [];
const arrNubers = [];
const arrEven = [];

function checkType(array, other, number, even) {
  for (k = 0; k < array.length; k++) {
    if (typeof array[k] !== typeof 1) {
      other.push(array[k]);
    } else if (typeof array[k] === typeof 1) {
      number.push(array[k]);
    }
  }
  even.push(array, other, number);
}

checkType(arrTypes, arrOther, arrNubers, arrEven);

console.log("arrOther", arrOther);
console.log("arrNubers", arrNubers);
console.log("arrEven", arrEven);

//--------------------------
// METODY
//--------------------------

//a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names

const names = ["Seba", "Kari", "Mati", "Andżi"];

const greetPeople = names.map((name) => "siemka " + name);

console.log(greetPeople);

//b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami

const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const checkNumbers4 = array10.filter((number) => number % 2 == 0);

console.log(checkNumbers4);

//c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami

const people = [
  {
    name: "Tomasz",
    lastname: "Kowalski",
    gender: "male",
  },
  {
    name: "Karol",
    lastname: "Nowak",
    gender: "male",
  },
  {
    name: "Joanna",
    lastname: "Kowalska",
    gender: "female",
  },
  {
    name: "Anna",
    lastname: "Nowak",
    gender: "female",
  },
];

const womanArray = people.filter((key) => key.gender == "female");

console.log(womanArray);

//d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy.
// Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.

const shopping =
  "kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny";

const shoppingList = shopping.toLowerCase().split(" ").sort();

console.log(shoppingList);

//e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

const reverseAlphabet = alphabet.reduce((sum, next) => {
  return alphabet.reverse().join("");
});

console.log(reverseAlphabet);
