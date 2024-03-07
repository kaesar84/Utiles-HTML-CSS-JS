fetch("notion.json")
  .then((response) => response.json())
  .then((data) => {
    // Use the data here
    // console.log(data);
    // Show the elements included in data
    
    for (let element of data) {
      console.log(element);
      // Access the properties of each element
      // let iterations = 0;
      for (let element of data) {     
        // iterations++; 
        let name = element.Nombre;
        let category = element.Categoria;
        let link = element.Link;
        let description = element.Descripcion;

        let contenidoSection = document.getElementById("contenidoSection");

        createDiv(name, category, link, description);
       
      }
      // console.log("Number of iterations:", iterations);
    }
   
  })
  .catch((error) => {
    // Handle any errors
    console.error("Error:", error);
  });


function createDiv(name, category, link, description) {
  // Create a new div element
  const div = document.createElement("div");
  div.classList.add("card");

  // Create paragraph elements for each property
  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = `Name: ${name}`;
  div.appendChild(nameParagraph);

  const categoryParagraph = document.createElement("p");
  categoryParagraph.textContent = `Category: ${category}`;
  div.appendChild(categoryParagraph);

  const linkParagraph = document.createElement("p");
  linkParagraph.textContent = `Link: ${link}`;
  div.appendChild(linkParagraph);

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent = `Description: ${description}`;
  div.appendChild(descriptionParagraph);

  // Append the div to the document body or any other desired element
  contenidoSection.appendChild(div);
}
