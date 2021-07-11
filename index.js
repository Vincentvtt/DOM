console.log("Hello from external javascript file");
document.querySelector("h1").innerText = "Good bye!";
document.querySelector("a").setAttribute("href","test.com");

$("h1").css("color", "blue");
$("li").css("fontSize", "3rem");
$("button").click(function() {
    $("ul").slideToggle( "slow", function() {
      // Animation complete.
    });
  })