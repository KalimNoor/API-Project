 //Moses branch
//could use queryselect these are just place holders as this is just solelely for functionality purposes
 const button = document.getElementById('button');
 const row_body = document.getElementById('row-body');
 const input =document.getElementById('search');

 //tv show ratings
 const getStars = (rating) => {

    //rounding
    rating = Math.round(rating * 2)/2;
    new_rating = rating(rating / rating) * 5;
    let output = [];

    //append filled stars

    for(let index = new_rating; index >= 1; index--){
        output.push(`<i class="fa-solid fa-star" style="color:gold;"></i>&nbsp; ;`)

        //half stars
        if(index == .5) output.push(`<i class="fa-solid fa-star-half" style="color:gold;"></i>&nbsp;`)

        //empty stars
        for(let index = (5 - new_rating); index >= 1; index--)
        output.push((`<i class="fa-solid fa-star-0" style="color:gold;"></i>&nbsp; ;`))

        return output.join('')


    
    }
 }
// elements
const createElement = (x) => {
    //column
    var col = document.createElement('div');
    col.className = 'col s3 m3';

    //card
    let card = document.createElement('div');
    card.className = 'card';

    col.appendChild(card);

    let cardImage = document.createElement('div')
    cardImage.className = 'card-image';
    card.appendChild(cardImage);

    let img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w1280${x.poster_path}`;
    cardImage.appendChild(img);

    let overlay = document.createElement('div');
    overlay.className = 'overlay';
    col.appendChild(overlay);

    let overlay2 = document.createElement('div');
    overlay.className = 'overlay2';
    col.appendChild(overlay2);


    let text = document.createElement('div');
    text.className = 'text';
    text.innerHTML = `<h5>${x.original_title}</h5> <div class="card-panel" style="background:#810000;color:white;"> ${(x.vote_average)} <span id=stars>${getStars(x.vote_average)}</span> </div>`
    overlay.appendChild(text);

    let text2 = document.createElement('div');
    text2.className = "text2";
    text2.innerHTML = `${x.overview}`

    overlay2.appendChild(text2);

    row_body.appendChild(col);






}
 
 //first call to display random movies
 /*
 const options = {
     method: 'GET',
     headers: {
         'X-RapidAPI-Key': 'ff5145fe65mshd8a7ba08d0a20d7p13b1c7jsnc9c35728ce0c',
         'X-RapidAPI-Host': 'tvjan-tvmaze-v1.p.rapidapi.com'
     }
 };
 */
 /*const getShows=() =>{
     fetch('https://tvjan-tvmaze-v1.p.rapidapi.com/shows/%7Bid%7D', options)
     .then(response => response.json())
     .then(data =>{
         data.results.forEach(element => {
             createElements(element)
         })
     })
     .then(response => console.log(response))
     .catch(err => console.error(err));
 }
 */
 
 const getMovies=() =>{
     fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${Math.floor(Math.random() * 100) + 1}`)
     .then(response => response.json())
     .then(data =>{ 
         data.results.forEach(element => {
             createElements(element)
         });
         setTimeout(() => {
             document.getElementById('lds-roller').style = "display:none";
         }, 10000);
     
     });
 
 }
 
 //search for a show/movie
 const fetchName=()=>{
     let value = input.value;
     fetch(`https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="${value}`)
     .then(response => response.json())
     .then(shows=>{
         row_body.innerHTML="";
         shows.results.forEach(element => {
             createElements(element)
         });
 
      fetch('https://tvjan-tvmaze-v1.p.rapidapi.com/search/shows?q=%7Bquery%7D', options)  
     })}
 
 /*fetch('https://tvjan-tvmaze-v1.p.rapidapi.com/search/shows?q=%7Bquery%7D', options)
     .then(response => response.json())
     .then(response => console.log(response))
     .then(shows=>{
         row_body.innerHTML="";
         shows.results.forEach(element => {
             createElements(element)
         });
     })
     .catch(err => console.error(err));
 */
 //search by enter key
     input.addEventListener("keyup", function(event) {
         console.log(event.key)
         if(event.keyCode >= 48 && event.keyCode <= 90) {
             document.getElementById('key').innerHTML = event.key
         }        
         if (event.keyCode === 13) {
          event.preventDefault();
          fetchName()
         }
       });
 
   
 
 
     window.onload = function() {
         getMovies()
       };
       