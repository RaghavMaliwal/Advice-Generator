let id = document.querySelector("span");
let quote = document.querySelector("#quote");
let newButton = document.querySelector(".next");
let i = 1;
i = localStorage.getItem("id", i) || i;
newButton.addEventListener("click", async () => {
  if (i == 22 || i == 48 || i == 67) {
    i++;
  }

  if (i >= 225) {
    i = 1;
  }
  let URL = "https://api.adviceslip.com/advice/" + i.toString();
  console.log(i);

  let data = await fetch(URL);
  //   console.log(data);
  let jsondata = await data.json();
  id.innerHTML = jsondata.slip.id;
  quote.innerText = '"' + jsondata.slip.advice + '"';

  i++;
  localStorage.setItem("id", i);
});
