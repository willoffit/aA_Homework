document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  
  const handleFavorite = (e) => {
    e.preventDefault();
    const inputFavorite = document.querySelector(".favorite-input");
    const favorite = inputFavorite.value;
    inputFavorite.value = "";
    const newLi = document.createElement("li");
    newLi.textContent = favorite;
    const favorites = document.getElementById("sf-places");
    favorites.appendChild(newLi);
  };

  const submitButton = document.querySelector(".favorite-submit");

  submitButton.addEventListener("click", handleFavorite);



  // adding new photos

  // const handlePhotoFormToggle = (e) => {
  //   e.preventDefault();
  //   const form = document.querySelector(".photo-form-container");
    
  //   if (form.classList.contains('hidden')) {
  //     form.classList.remove('hidden');
  //   } else {
  //     form.classList.add('hidden');
  //   }

  //   if (!form.classList.contains('hidden')) {
  //     const inputPhoto = document.querySelector('.photo-url-input');
  //     const photoURL = inputPhoto.value;
  //     inputPhoto.value = "";
  //     const newLi = document.createElement("li");
  //     newLi.textContent = photoURL;
  //     const photos = document.querySelector(".dog-photos");
  //     photos.append
  //   }
    
  // };

  // const toggleButton = document.querySelector(".photo-show-button");

  // toggleButton.addEventListener("click", handlePhotoFormToggle);


});
