document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll("#starRating span");
  let selectedRating = 0;

  stars.forEach((star, idx) => {
    star.addEventListener("click", () => {
      selectedRating = idx + 1;
      highlightStars(selectedRating);
    });
  });

  function highlightStars(rating) {
    stars.forEach((star, idx) => {
      star.classList.toggle("active", idx < rating);
    });
  }

  window.submitStars = function () {
    if (selectedRating === 0) {
      alert("Please select a rating!");
    } else {
      const feedback = document.querySelector("textarea").value;
      console.log("Rating:", selectedRating);
      console.log("Feedback:", feedback);
      alert("Thank you for your feedback!");
      // Here you would typically send the data to the backend via AJAX or form
    }
  };
});
