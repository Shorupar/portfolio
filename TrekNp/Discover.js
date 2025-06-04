const scrollRevealOption = 
{
    distance: "50px",
    origin: "buttom",
    duration: 1000,
};

//discover
ScrollReveal().reveal(".header_container .section_header", scrollRevealOption);

ScrollReveal().reveal(".header_container .section_subheader", 
{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".discover_card",
{
    ...scrollRevealOption,
    interval: 500,
});
//loadmore&loadless
document.addEventListener("DOMContentLoaded", function () 
{
    let loadMoreBtn = document.querySelector("#load-more");
    let loadLessBtn = document.querySelector("#load-less");
    let cards = document.querySelectorAll(".discover .discover_grid .discover_card");
    let currentItem = 3;  
    // Function to show more items
    function showMoreItems() 
    {
      for (let i = currentItem; i < currentItem + 3 && i < cards.length; i++) 
      {
        cards[i].style.display = "inline-block";
      }
      currentItem += 3;
      ScrollReveal().reveal("#load-more",
      {
        ...scrollRevealOption,
        interval: 500,
      });
      // Show/hide load buttons based on current item count
      if (currentItem >= cards.length) 
      {
        loadMoreBtn.style.display = "none";
        loadLessBtn.style.display = "inline-block";
      }
    }  
    // Load more items when "Load More" button is clicked
    loadMoreBtn.addEventListener("click", showMoreItems);  
    // Function to show fewer items
    loadLessBtn.addEventListener("click", function () 
    {
      for (let i = currentItem - 1; i >= currentItem - 3 && i >= 0; i--) 
      {
        cards[i].style.display = "none";
      }
      currentItem -= 3;  
      // Show/hide load buttons based on current item count
      if (currentItem <= 3) 
      {
        loadMoreBtn.style.display = "inline-block";
        loadLessBtn.style.display = "none";
      }
    });
  });
