const freelancer = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
    { name: "Carol", price: 70, occupation: "programmer" },
]

function getFreelancer(){
    const randNames = Math.floor(Math.random()*names.length)
  const randOccupations = Math.floor(Math.random()*occupations.length)
  const randPrice = Math.floor(Math.random()*startingPrice.length)
  const freelancer ={
    name: names[randNames],
    occupation : occupations[randOccupations],
    price:startingPrice[randPrice]
  }
  return freelancer;
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
