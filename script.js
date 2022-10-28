// async function getTvShows(show){
//     const URL = `https://api.tvmaze.com/search/shows?q=${show}`
//     const res = await fetch(`${URL}`)
//     const data = await res.json()
//     const image = data[0].show.image.medium;
// }

// getTvShows("kingdom");


// function searchShow(show) {
//     fetch(`https://api.tvmaze.com/search/shows?q=${show}`)
//     .then(response => response.json())
//     .then((data) => {
//         const result = data.map(element => element.show.name);
     
      
//         renderResults(result);
//     })

// }


// function renderResults(results) {
//     const resultList = document.getElementById("search-result")
//     resultList.innerHTML = ""
//     results.forEach(result => {
//         const element = document.createElement("div");
//         element.innerText = result
//         //append 
//         resultList.appendChild(element)

//     });
// }


// //search function  in progress
// window.onload = () => {
//     const searchBox = document.getElementById("search")
//     searchBox.onkeyup = (event) =>{

//         searchShow(searchBox.value);
//     }
// }


// // const cardElement = document.querySelector('card')
// // const main = document.querySelector('main')

// // async function getTvShows(show){
// //     const URL = `https://api.tvmaze.com/search/shows?q=${show}`
// //     const res = await fetch(`${URL}`)
// //     const data = await res.json()
// //     const image = data[0].show.image.medium;
// //     console.log(image)

// // }

// // getTvShows("office");


const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-show-cards-container]")

fetch(`https://api.tvmaze.com/search/shows?q=office`)
.then(res => res.json())
.then(data => {
    data.forEach(show => {
    const card =userCardTemplate.content.cloneNode(true)
    const header = card.querySelector("[data-header")
    const image = card.querySelector("[image-show]")
    const rating = card.querySelector("[rating-show]")

    const showName = data[0].show.name
    const apiImage = data[0].show.image.medium;
    const showRating = data[0].show.rating.average
   
    
    

    header.textContent = showName 
    image.setAttribute("src", `${apiImage}`)
    rating.textContent = showRating
    userCardContainer.append(card)

    })
})


