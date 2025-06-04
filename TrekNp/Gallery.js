const scrollRevealOption = 
{
    distance: "50px",
    origin: "buttom",
    duration: 1000,
};
//Gallery
ScrollReveal().reveal(".gallery_photos .photos", scrollRevealOption);
ScrollReveal().reveal(".gallery_photos .photos",
{
    ...scrollRevealOption,
    interval: 200,
});