$(document).ready(function() {

  //set options
  var speed = 500;
  var autoSwitch = true;
  var autoSwitchSpeed = 4000;

   //add first slide, added class active to slide
   $(".slide").first().addClass("active");

   //hide all slides
   $(".slide").hide();
   // show first slide
   $(".active").show();
      //next handler
   $("#next").on("click",nextSlide);

    // prev handler
   $("#prev").on("click", prevSlide);
    //auto slider handler
   if(autoSwitch === true) {
     setInterval(nextSlide,autoSwitchSpeed);
   }

   // switch to next slide
   function nextSlide(){
     $(".active").removeClass("active").addClass("lastActive");
     if($(".lastActive").is(":last-child")){
       $(".slide").first().addClass("active");
     } else {
       $(".lastActive").next().addClass("active");
     }
     $(".lastActive").removeClass("lastActive");
     $(".slide").fadeOut(speed);
     $(".active").fadeIn(speed);
   };
   function prevSlide() {
     $(".active").removeClass("active").addClass("lastActive");
     if($(".lastActive").is(":first-child")){
       $(".slide").last().addClass("active");
     } else {
       $(".lastActive").prev().addClass("active");
     }
     $(".lastActive").removeClass("lastActive");
     $(".slide").fadeOut(speed);
     $(".active").fadeIn(speed);
     };


});
