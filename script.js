const API_URL = "1223249fbehdguveevefv1f4v";
const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultEl = document.querySelector(".search-results");
const showMoreButton = document.getElementById("show-more-button");


let inputData = "";
let page = 1;

// https://api.unsplash.com/search/photos?page=1&cat&1223249fbehdguveevefv1f4v

function searchImage() {
    inputData = searchInputEl.value;
    // console.log(inputData);
    async function getData() {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${API_URL}`);
        const data = await response.json();
        console.log(data);
        // return data;
    }

//     getData().then(data => {
//         $.each(data.voname, function (key, val) {
//             console.log(val);
//             $('#search-results').append(' <div class="search-result">\
//                 < img src = "'+val.url+'"\
//                 alt = "image" >\
//                 <a href="'+val.anchorurl+'" target="_blank">an\
//                     image of a beach</a>\
//         </div > ');
//         })
//     })

}




formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log("Submitted");
    searchImage();
})


