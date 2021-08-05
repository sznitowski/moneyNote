const type = document.getElementById("inputType")
const amount = document.getElementById("inputAmount")
const concept = document.getElementById("inputConcept")
const div = document.getElementById("divOperation");
const btnCreateOperation = document.getElementById("btnCreateOperation");

function btnCreateOperation (idOperation, concept, amount, type)  {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", () => {
  let response = JSON.parse(xhr.responseText);  

  if (response.rechazo) {
    alert(response.rechazo);
  } else {

  const divPost = document.createElement("div")  
  const concept = document.createElement("h5");
  const amount = document.createElement("h4");
  const type = document.createElement("p");

  concept.textContent = response.concept;
  amount.textContent = response.amount;
  type.textContent = response.type;

  divPost.appendChild(concept);
  divPost.appendChild(amount);
  divPost.appendChild(type);

  divPost.classList.add("boxOperations")
  
    }
   });

  xhr.open("POST", `/createOperation`);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify({ id: idOperation, concept, amount, type }));
}