const url = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  console.log("first: ", results);
  results.results.forEach((pokemon) => {
    const div = document.createElement("div");
    div.textContent = pokemon.name;
    document.querySelector(".pokemon").appendChild(div);
  });
}
getPokemon(url);
console.log("second: ", results);

let canvas = document.querySelector("#canvasElem");
canvas.onmousemove = function (e) {
  let ctx = canvas.getContext("2d");
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
};