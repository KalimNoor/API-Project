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
    col.className = 'col s3 s3';

    //card
    let card = document.createElement('div');
    card.className = 'card';

    col.appendChild(card);

    let cardImage = document.createElement('div')
    cardImage.className = 'card-image';

    card.appendChild(cardImage);

    let img = document.createElement('img');
    img.src = ``
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
 //display shows
const getTvShows = () => {
    fetch(`https://api.tvmaze.com/singlesearch/shows?q="${show}`)
    .then(response => response.json())
    .then(data =>{ 
        data.results.forEach(element => {
            createElements(element)
        });
        setTimeout(() => {
            document.getElementById('lds-roller').style = "display:none";
        }, 10000);
    
});
};

//call on window



//search a show by entering a name

const fetchName=()=>{
    let value = input.value;
    fetch(`https://api.tvmaze.com/singlesearch/shows?q="${show}`)
    .then(response => response.json())
    .then(shows=>{
        row_body.innerHTML="";
        shows.results.forEach(element => {
            createElements(element)
        });

       
    })};

/////////figure out how key element matches up with actual html file

input.addEventListener("keyup", (e) => {
    if(e.keyCode >= 48 && e.keyCode <= 90){
        document.getElementById('key').innerHTML = e.key
    }
    if(e.keyCode === 13) {
        e.preventDefault();
        fetchName()
    }
})
 
window.onload = function(){
    getTvShows
};