//--------------------------
// 1. ZMIENNE I TYPY
//--------------------------

//a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych

// const arrayOfType = [true, 10, "siemka"]

// function checkType(arr){
//   return  arr.map(value => typeof value)
// }
// console.log(checkType(arrayOfType))

//b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.

// console.log(2 + "2", " - wynik testu wynika z połączenia numbera ze stringiem co ostatecznie daje nam number")
// console.log(2 + 2, "- wynk to typ number i wynika z dodania dwóch typów number do siebie")
// console.log(2 * "8", "- wynik to typ number i wynika z pomnożenia typu number z typem string co daje nam ostatecznie number ")
// console.log(2 * 2, "- wynikiem testu jest number, ponieważ pomnożyliśmy dwie liczby przez siebie ")
// console.log(1 == true, "- wynikiem testu jest wartość boolean ponieważ użyliśmy operatora porównania który zwraca true lub false")
// console.log(0 == false, "- wynikiem testu jest wartość boolean ponieważ użyliśmy operatora porównania który zwraca true lub false")
// console.log(0 == null, " - wynikiem testu jest wartość boolean ponieważ użyliśmy operatora porównania który zwraca true lub false ")
// console.log(null == undefined, "- wynikiem testu jest wartość boolean ponieważ użyliśmy operatora porównania który zwraca true lub false")

//napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="

// console.log("=", "Jest on znakiem przypisania wartości z prawej strony tego znaku, do zmiennej znajdującej się po lewej stronie")
// console.log( "==","Sprawdza czy wartość po lewej stronie jest równa wartości po prawej stronie bez względu na ich typ")
// console.log("===", "Sprawdza czy wartość po lewej stronie jest równa wartości po prawej stronie biorąc pod uwagę ich typ")

//c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli

// console.log("W typach referencyjnych wartość jest przekazywana za pomocą referencji tzn.za pomocą informacji, w jakim miejscu w pamięci jest przetrzymywana wartość i są to tablice, obiekty i funkcje, a w typach prostych informacja jest przekazywana za pomocą wartości i typami prostymi są np. stringi czy numbery. ");

//d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości:

// let val = 0 (przekonwertuj na typ Boolean)
// let val = 0;
// console.log(Boolean(val))

// // let num = "2137" (przekonwertuj na typ Number)
// let num = "2137";
// console.log(Number(num))

// // let num = 007 (przekonwertuj na String)
// let num = 007;

// let str = num.toString(10);
// str = "00" + str;
// str = str.slice(-3);
// console.log(str, "wyświetla oporawnie w https://jsfiddle.net/");

// // let und = undefined (przekonwertuj na Boolean)
// let und = undefined;
// console.log(Boolean(und))

//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli

// let emptyArray = Array()

// emptyArray.push("Ford")
// emptyArray.push("Porsche")
// emptyArray.push("Bmw")

// console.log(emptyArray)

//f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli

let emptyObject = new Object();

emptyObject.key1 = "values1";
emptyObject.key2 = "values2";
emptyObject.key3 = "value3";

console.log(emptyObject);

//g)* opisz krótko czym dokładnie jest typ NaN

//h)** znajdź w sieci informacje o typie Symbol i opisz go krótko

//--------------------------
//2. FUNKCJE & WARUNKI
//--------------------------

//a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb

//b) napisz funkcję która przymie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik

//c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację

//d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości

//e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.

// let testPerson = {
//     name: "Jan",
//     surname: "Kowalski",
//     age: 20,
//     height: 180
// }

//f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.

//g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
// - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
// - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
// - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"

//h napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego

//j)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10

//j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu

//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.

//--------------------------
// FUNKCJE & PĘTLE
//--------------------------

//uwaga! Możesz spróbować każdą z pętli napisać w funkcji

//a) napisz pętlę która odliczy od 1 do 9
//b) napisz pętlę która odliczy od 9 do 1
//c) napisz pętlę która odliczy od 5 do 15
//d) napisz pętlę która odliczy od 0 do -10
//e) napisz pętlę która odliczy od 1 do 2, iteracja co 2
//f) napisz pętlę która odliczy od 10 do -10, iteracja co 4
//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...
//h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości
//i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfram jest parzysta czy nie, możesz użyć operatora trójargumentowego

//Uwaga! kolejne pętle trzeba napisać w funkcji

//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości
//k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)

//l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób
// const arrNames = ["Ksawery", "Zenobiusz", "Klementyna", "Apolonia", "Jeremiasz", "Bernadetta"]

//ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.
// const arrObjects = [{
//     brand: "Mustang",
//     color: "niebieski"
// }, {
//     brand: "Tesla",
//     color: "czarna"
// }, {
//     brand: "Polonez",
//     color: "żółty"
// }, {
//     brand: "Toyota",
//     color: "fioletowa"
// }]

//m) napisz funkcję która przyjmie tablic arrNumbers i wyświetli w konsoli tylko przyste elementy tablicy

// const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
// - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther
// - za pomocą push umieści elementy o typie number w tablicy arrNumbers
// - za pomocą push umieści numery parzyste w tablicy arrEven
// - na końcu zwróci obiekt z tymi trzema tablicami

// const arrTypes = [2,4,5,undefined, null, "val", NaN, 7, 10, 333, "874", 22, 21, 400, "400", "undefined" ]
// ​
// const arrOther = []
// const arrNubers = []
// const arrEven = []

//--------------------------
// METODY
//--------------------------

//a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names

// const names = ["Seba", "Kari", "Mati", "Andżi"]

//b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami

// const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami

// const people = [{
//     name: "Tomasz",
//     lastname: "Kowalski",
//     gender: "male",
// }, {
//     name: "Karol",
//     lastname: "Nowak",
//     gender: "male",
// }, {
//     name: "Joanna",
//     lastname: "Kowalska",
//     gender: "female",
// }, {
//     name: "Anna",
//     lastname: "Nowak",
//     gender: "female",
// }]

//d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy. Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.

// const shopping = "kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny"

//e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."

// const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];