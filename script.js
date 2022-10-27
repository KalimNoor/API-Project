// async function getTvShows(show){
//     const URL = `https://api.tvmaze.com/search/shows?q=${show}`
//     const res = await fetch(`${URL}`)
//     const data = await res.json()
//     const image = data[0].show.image.medium;
// }

// getTvShows("kingdom");


function searchShow(show) {
    fetch(`https://api.tvmaze.com/search/shows?q=${show}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
    })

}




//search function  in progress
window.onload = () => {
    const searchBox = document.getElementById("searchBox")
    searchBox.onkeyup = (event) =>{

        searchShow(searchBox.value);
    }
}




