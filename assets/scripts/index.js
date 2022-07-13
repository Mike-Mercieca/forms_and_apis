function addListItem(text) {

    // Get a reference to the container
  const container = document.getElementById("container");

  // Create a li element
  const newLiElement = document.createElement("li");

  // Add the text to it

  newLiElement.textContent = text;

  //Actually add the element to the page

  container.appendChild(newLiElement);
}

//Listen to the button and wait for click

document.getElementById("first-button").addEventListener("click", (e) => {

    //Get the texbox's value
    const text = document.getElementById("input-box").value;

    addListItem(text)

})
