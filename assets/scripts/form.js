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


function handleFormSubmit (e) {

    //Stop the page refreshing
    e.preventDefault();

    //Get reference to the form
    const form = e.target;

    addListItem(form.name.value);

    console.log(form.name.value);
    console.log(form.age.value);

}



document.getElementById("id-form").addEventListener("submit", handleFormSubmit)