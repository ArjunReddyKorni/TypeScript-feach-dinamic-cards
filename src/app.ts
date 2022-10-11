//Declare global container constant to represent <div> container
var pdiv = document.querySelector("#colu");
//Define Fruit Object type with required properties
type fruit = {
  name: string;
  price: string;
  image: string;
  unit: string;
};

//Fetch data from server using getFruits() method

function getFruits() {
  console.log("test");

  fetch("http://localhost:3000/fruits")
    .then((res: any) => (res = res.json()))
    .then((res: any) => {
      transform(res);
    });
  console.log("test");
}

//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type

function transform(fruits: any) {
  console.log("test");
  fruits.forEach((element: any) => {
    let transformedFruit = {
      id: element.id,
      name: element.name,
      price: element.price,
      image: element.image,
      unit: element.unit,
    };
    showFruit(transformedFruit);
    console.log("testfor");
  });
  console.log("testoutfor");
}

//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container

function showFruit(element: any) {
  console.log("test");

  let divs = document.createElement("div");

   divs.classList.add('col-lg-2');
   divs.classList.add('card');
   divs.classList.add('m-2');
  pdiv?.appendChild(divs);
  let imgs = document.createElement("img");

  imgs.setAttribute("src", element.image);

  imgs.setAttribute("width", "120px");
  imgs.setAttribute("height", "100px");
  imgs.style.paddingLeft = "30px";
  divs.appendChild(imgs);

  let h3 = document.createElement("h3");
  let text = document.createTextNode(element.name)
  h3.appendChild(text)
  h3.style.textAlign = "center";
  divs.appendChild(h3)

  let span = document.createElement("span");
  span.style.textAlign = "center";
  let spanT = document.createTextNode("Price:$"+element.price+"per"+element.unit)
  span.appendChild(spanT)
  divs.appendChild(span)


}

//Call getFruits() method globally
getFruits();

// let div = document.createElement("div");
//     let h1 = document.createElement("h1");
//     let hText = document.createTextNode(element.id);
//     h1.appendChild(hText)
//     let body = document.querySelector("body");
//     body?.appendChild(div);
//     div.appendChild(h1);
// <div class="col-lg-2 card text-align-center m-2">
//         <img style="padding-left: 30px;" src="./images/apple.jpg" height="100px" width="120px" alt="">
//         <h3 style="text-align: center;" class="text-align-center">Apple</h3>
//         <span style="text-align: center;">"price": "1.1" "lb"</span>

//     </div>
