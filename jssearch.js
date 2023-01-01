let products = {
    data: [
        {
            image: './images/javascriptDef.png',
            productName: 'what is javascript?',
            category: 'JS',
            price: 9.9
        },
        {
            image: './images/htmlBasics.PNG',
            productName: 'basics of HTML',
            category: 'HTML',
            price: 5.9
        },
        {
            image: './images/htmlElements.png',
            productName: 'HTML elements and tags',
            category: 'HTML',
            price: 9.9
        },
        {
            image: './images/cssSelectors.jpg',
            productName: 'CSS selectors',
            category: 'CSS',
            price: 69.9
        },
        {
            image: './images/javascriptVariables.png',
            productName: 'variables and data type of javascript',
            category: 'JS',
            price: 19.9
        },
        {
            image: './images/javascriptOperators.png',
            productName: 'Javascript operators and conditions',
            category: 'JS',
            price: 29.9
        },
        {
            image: './images/htmlAttrVal.jpg',
            productName: 'HTML attributes and values',
            category: 'HTML',
            price: 19.9
        },
        {
            image: './images/cssProperties.png',
            productName: 'CSS properties',
            category: 'CSS',
            price: 29.9
        },
        {
            image: './images/javascriptObjects.png',
            productName: 'Javascript objects and arrays',
            category: 'JS',
            price: 39.9
        },
        {
            image: './images/cssMesures.png',
            productName: 'mesures and unites of CSS',
            category: 'CSS',
            price: 19.9
        },
        {
            image: './images/cssAnimation.png',
            productName: 'CSS animations',
            category: 'CSS',
            price: 19.9
        },
        {
            image: './images/javascriptFunctions.png',
            productName: 'The basics of javascript',
            category: 'JS',
            price: 29.9
        },
        {
            image: './images/javascriptEvents.png',
            productName: 'javascript events',
            category: 'JS',
            price: 59.9
        },
        {
            image: './images/cssColors.png',
            productName: 'css colors',
            category: 'css',
            price: 29.9
        },
        {
            image: './images/phpBasics.png',
            productName: 'getting started with php',
            category: 'php',
            price: 15.9
        },
        {
            image: './images/javascriptFunctions2.png',
            productName: 'functions and loops with javascript',
            category: 'JS',
            price: 19.9
        },
        {
            image: './images/phpDataBase.png',
            productName: 'connecting to database using PHP',
            category: 'PHP',
            price: 29.9
        },
        {
            image: './images/phpCRUD.png',
            productName: 'manipulating crud using php',
            category: 'php',
            price: 45.9
        },
        {
            image: './images/javascriptDOM.png',
            productName: 'DOM the power of javascript',
            category: 'JS',
            price: 23.9
        },
        {
            image: './images/javascriptDOM.png',
            productName: 'DOM the power of javascript',
            category: 'JS_g4',
            price: 23.9
        },
        {
            image: './images/javascriptDOM.png',
            productName: 'groupe 2 ',
            category: 'groupe2',
            price: 23.9
        
      },
    ],
  };
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };