

//object construction

/* 
const currentDate = new Date("1993/01/02")

console.log(currentDate);
 */


function Book(title, author, year, genre) {
    this.title = title;  // this mindig objekctumra mutat vissza
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.age = function () {  //ha kulon hivjuk meg akkor fut csak le mySecondFavouriteBook.age()
        const d = new Date()
        const currentYear = d.getFullYear()
        return currentYear - this.year
    }
}

const myFavouriteBook = new Book("War and Peace", "Tolsztoj", 1867, "historical novel")

console.log(myFavouriteBook);

const mySecondFavouriteBook = new Book("Algebra alapjai", "Joe Algbr", 1992, "sci-fi")

console.log(mySecondFavouriteBook.age());





