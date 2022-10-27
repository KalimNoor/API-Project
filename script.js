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
        const result = data.map(element => element.show.name);
     
      
        renderResults(result);
    })

}


function renderResults(results) {
    const resultList = document.getElementById("result")
    resultList.innerHTML = ""
    results.forEach(result => {
        const element = document.createElement("div");
        element.innerText = result
        //append 
        resultList.appendChild(element)
    });
}


//search function  in progress
window.onload = () => {
    const searchBox = document.getElementById("search")
    searchBox.onkeyup = (event) =>{

        searchShow(searchBox.value);
    }
}




