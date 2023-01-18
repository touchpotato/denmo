$("#login").click(function() {
    $(".modal").addClass("open");
});

// $(document).mousemove(function(event) {
//     var xPos = (event.clientX / $(window).width())-0.5,
//         yPos = (event.clientY / $(window).height())-0.5,
//         plane = $(".hero");
   
//    TweenLite.to(plane, 0.5, {
//      rotationY: 50 * xPos, 
//      rotationX: -50 * yPos,
//      ease: "Power4.inOut",
//      transformPerspective: 1000,
//      transformOrigin: "center"
//    });
//   });