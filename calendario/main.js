function createGame(player1, hour, player2){
  return `
   <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
       <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
  </li>
 `
}
let delay = -0.4;
function createCard(date, day, games){
    delay = delay + 0.4;
   return`
       <div class="card" style="animation-delay: .8s" >
            <h2>${date} <span>${day}</span></h2>
            <ul>
            ${games}
        </ul>
     </div>
  `
 }
document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brasil", "08:00", "serbia") +
      createGame("uruguay", "13:00", "argentina") +
      createGame("colombia", "20:00", "japao")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("brasil", "13:00", "serbia") +
      createGame("portugal", "16:00", "uruguay") +
      createGame("islands", "16:00", "kazakhstan")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("brasil", "16:00", "cameroon") +
      createGame("brasil", "08:00", "serbia")
  )