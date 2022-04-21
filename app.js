const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let quote = $(".quote");
let btn = $(".generate-button");
let cn;
fetch(`https://api.chucknorris.io/jokes/random`)
  .then(function (response) {
    console.log("Success! ", response);
    return response.json();
  })
  .then(function (data) {
    console.log("DATA:", data);
    quote.innerHTML = `${data.value}`;
  })
  .catch(function (err) {
    console.warn("Something went wrong ", err);
  });

btn.addEventListener("click", function () {
  location.reload();
});
