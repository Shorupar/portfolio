const scrollRevealOption = 
{
    distance: "50px",
    origin: "buttom",
    duration: 1000,
};

//about
ScrollReveal().reveal(".about_container .section_header", scrollRevealOption);

ScrollReveal().reveal(".about_container .section_subheader", 
{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".about_container .about_flex", 
{
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".about_container .btn", 
{
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".about_container img", 
{
    ...scrollRevealOption,
    delay: 1500,
});
