let dataBox = document.querySelector("#content");
let art =(event) =>{
      const keyAPI = `https://dog.ceo/api/breeds/image/random`;
    fetch(keyAPI)
    .then((response) => response.json())
    .then((data) =>{
        console.log(data);
        dataBox.innerHTML = `<img src="${data.message}">`;
        })
    .catch((err) => console.error(err));
   event.preventDefault(); 
}
document.querySelector("#btn").addEventListener("click", art);



let dataBox2 =document.querySelector("#content2");
let duck =(event2) => {
const keyAPI2= `https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=1`;
   fetch(keyAPI2)
  .then((res) => res.json())
  .then((data2) =>{
    console.log(data2);
  dataBox2.innerHTML = `<h1 src "${data2.fact}">`;
  })
  .catch((err) => console.error(err));
 event2.preventDefault(); 
}

document.querySelector("#btn2").addEventListener("click", duck);
  


     
     