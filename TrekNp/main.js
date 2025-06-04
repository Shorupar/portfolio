const scrollRevealOption = 
{
    distance: "50px",
    origin: "buttom",
    duration: 1000,
};
//header
ScrollReveal().reveal(".header_container h1", scrollRevealOption);

ScrollReveal().reveal(".header_container h4", 
{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_container .btn",
{
    ...scrollRevealOption,
    delay: 1000,
});

