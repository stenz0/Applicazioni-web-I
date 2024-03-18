import dayjs from "dayjs"

function Film(Fid, title, isFavourite = false, date = null, rating = 0, Pid = 1){
    this.Fid = Fid;
    this.title = title;
    this.isFavourite = isFavourite;
    if (date === null) this.date = "None";
    else this.date = dayjs(date).format("YYYY-MM-DD");
    this.rating = rating;
    this.Pid = Pid;

    this.toString = () => {
        return `
        Fid: ${this.Fid}, Title: ${this.title}, Favourite? ${this.isFavourite}, Date: ${this.date}, Rating: ${this.rating}, Pid: ${this.Pid}`
    }
}

function FilmLibrary() {
    this.films = [];
    
    this.addNewFilm = (film) => {
        this.films.push(film);
    }

    this.printLibrary = () => {
        console.log("\n \n *****Library requested*****")
        for (let film of this.films){
            console.log(film.toString());
        }
        console.log();
    }

    this.sortByDate = (

    ) => {
        console.log("\n *****Sort by date*****")
        let newFilms = Array.from(this.films);
        newFilms.sort((a, b) => {
            if (a.date == 'None') return 1;
            else if (b.date == 'None') return -1;
            else return dayjs(a.date).isBefore(dayjs(b.date));
        }
        );
        for (let x of newFilms){
            console.log(x.toString());
        }
        console.log();
    }

    this.deleteFilm = (fid) => {
        this.films.pop(fid);
        this.printLibrary();
    }

    this.resetWatchedFilms = () => {
        for (let film of this.films){
            film.date = "None";
        }
        this.printLibrary();
    }

    this.getRated = () => {
        let newFilms = Array.from(this.films);
        for (let film of this.films){
            if (film.rating === 0){
                newFilms.pop(film);
            }
        }
        console.log("*****Ratings*****")
        for (let x of newFilms){
            console.log(x.toString());
        }
    }
}

let f1 = new Film(1, "Pulp Fiction", true, "March 10, 2024", 5, 1);
let f2 = new Film(2, "21 Grams", true, "March 17, 2024", 4, 1)
let f3 = new Film(3, "Star Wars");
let f4 = new Film(4, "Matrix");
let f5 = new Film(5, "Shrek", false, "March 21, 2024", 3, 1);

let l1 = new FilmLibrary();
l1.addNewFilm(f1);
l1.addNewFilm(f2);
l1.addNewFilm(f3);
l1.addNewFilm(f4);
l1.addNewFilm(f5);
l1.printLibrary();
l1.sortByDate();
l1.deleteFilm(f2);
l1.resetWatchedFilms();
l1.getRated();
console.log();