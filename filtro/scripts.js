
filtro = ()=>{
  const filterBtns = document.querySelectorAll(".filter-btn");
  const imgItems = document.querySelectorAll(".img-container img");
  
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      imgItems.forEach(img => {
        if (filter === "all" || img.dataset.category === filter) {
          img.style.display = "block";
        } else {
          img.style.display = "none";
        }
      });
    });
  });
}


