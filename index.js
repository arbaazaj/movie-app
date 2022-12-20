const APILINK = 'https://api.themoviedb.org/3/movie/550?api_key=ca809267ab27b86c082f0e9f5b9ddd9e';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?api_key=api_key=ca809267ab27b86c082f0e9f5b9ddd9e&query=';

const section = document.querySelector('#section');
const form = document.querySelector('#form');
const search = document.querySelector('#query');

function fetchMovies(url) {
    fetch(url).then(res => res.json())
        .then((data) => {
            console.log(data.result);
            data.forEach(element => {
                const divCard = document.createElement('div');
                const divRow = document.createElement('div');
                const divColumn = document.createElement('div');
                const image = document.createElement('img');
                const title = document.createElement('h3');
                const center = document.createElement('center');

                title.innerHTML = `${element.title}`;

            });
    });
}

fetchMovies(APILINK);