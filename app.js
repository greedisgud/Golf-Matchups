const player1Search = document.getElementById("player1");
const p1Rounds = document.querySelector(".p1Rounds");
const p1Avg = document.querySelector(".p1Average");
const p1SgOtt = document.querySelector(".p1SgOtt");
const p1SgApr = document.querySelector(".p1SgApr");
const p1SgAtg = document.querySelector(".p1SgArg");

player1Search.addEventListener("change", setQueryP1);

function setQueryP1(e) {
  e.preventDefault();
  getPlayer1Results(player1Search.value);
}

function getPlayer1Results(query) {
  fetch(`./data/${query}.JSON`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        alert("Error");
      }
    })
    .then(displayPlayer1Results);
}

function displayPlayer1Results(res) {
  console.log(res);
  p1Rounds.innerText = `Rounds: ${res.ROUNDS}`;
  p1Avg.innerText = `Average: ${res.AVERAGE}`;
  p1SgOtt.innerText = `Strokes Gained OTT: ${res.SG_OTT}`;
  p1SgApr.innerText = `Strokes Gained APR: ${res.SG_APR}`;
  p1SgAtg.innerText = `Strokes Gained ATG: ${res.SG_ARG}`;
}
