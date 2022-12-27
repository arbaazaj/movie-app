const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ca809267ab27b86c082f0e9f5b9ddd9e&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=ca809267ab27b86c082f0e9f5b9ddd9e&query=';

const section = document.querySelector('#section');
const form = document.querySelector('#form');
const search = document.querySelector('#query');

fetchMovies(APILINK);

function fetchMovies(url) {
    fetch(url).then(res => res.json())
        .then(function(data) {
            console.log(data.results);
            data.results.forEach(element => {
                const divCard = document.createElement('div');
                divCard.setAttribute('class', 'card');
                const divRow = document.createElement('div');
                divRow.setAttribute('class', 'row');
                const divColumn = document.createElement('div');
                divColumn.setAttribute('class', 'column');
                const image = document.createElement('img');
                image.setAttribute('class', 'thumbnail');
                image.setAttribute('id', 'img');
                const title = document.createElement('h3');
                title.setAttribute('id', 'title');
                const center = document.createElement('center');

                title.innerHTML = `${element.title}`;
                image.src = IMG_PATH + element.poster_path;

                center.appendChild(image);
                divCard.appendChild(center);
                divCard.appendChild(title);
                divColumn.appendChild(divCard);
                divRow.appendChild(divColumn);

                section.appendChild(divRow);

            });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    section.innerHTML = '';

    const searchQuery = search.value;

    if (searchQuery) {
        fetchMovies(SEARCHAPI + searchQuery);
        search.value = '';
    }

});