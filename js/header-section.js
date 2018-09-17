$(window).scroll(function(){
var topvalue = $("div#Checkout_Information").offset().top -100;
scroll = $(window).scrollTop();

if (scroll >= topvalue)
{ 
$(".sticky-header-section").fadeIn("slow");
}
else 
{
$(".sticky-header-section").fadeOut("slow");
}
});