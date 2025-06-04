const scrollRevealOption = 
{
    distance: "50px",
    origin: "buttom",
    duration: 1000,
};
//SPL
ScrollReveal().reveal(".header_container .section_header", scrollRevealOption);

ScrollReveal().reveal(".header_container .section_subheader", 
{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".content",
{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".content h2 ",
{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".content img ",
{
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".content p ",
{
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".content_details",
{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".content_details .row",
{
    ...scrollRevealOption,
    interval: 200,
});
ScrollReveal().reveal(".content_details .row .details ",
{
    ...scrollRevealOption,
    interval: 500,
});
ScrollReveal().reveal(".content_intro",
{
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".content_destation",
{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".content_destation h2 ",
{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".content_destation img ",
{
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".content_destation li ",
{
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".content_destation li ",
{
    ...scrollRevealOption,
    interval: 300,
});
ScrollReveal().reveal(".destation_vid",
{
    ...scrollRevealOption,
    interval: 500,
});
ScrollReveal().reveal(".Gallery",
{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".image",
{
    ...scrollRevealOption,
    interval: 500,
});