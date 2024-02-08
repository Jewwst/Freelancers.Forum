const users = [
    { name: "Bingus Bongus", age: 19, occupation: "bouncy boi" },
    { name: "Screeb", age: 26, occupation: "exploder" },
    { name: "Ghost Face", age: 33, occupation: "hitman" },
    { name: "The Winged Dragon Of Ra", age: 2052, occupation: "literal god" },
    { name: "Hora Loux", age: 66, occupation: "fighter" },
];

function getFreelancer(){
    const randNames = Math.floor(Math.random()*names.length)
  const randOccupations = Math.floor(Math.random()*occupations.length)
  const randPrice = Math.floor(Math.random()*startingPrice.length)
}

function renderContents(){
     const html = freelancers.map((freelancer)=>{
      return `<div class='freelancerText'>
      <div class='itemText'> ${freelancer.name}</div>
      <div class='itemText'>${freelancer.occupation}</div>
      <div class='itemPrice'>${freelancer.price}</div>    
    </div><hr>`
    })
    container.innerHTML = html.join("");
  }
