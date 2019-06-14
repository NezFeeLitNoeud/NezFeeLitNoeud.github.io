let moreExperience = document.getElementById("more"); // Lien a

// Add an event Listener on click on the more element
moreExperience.addEventListener("click", function(){
document.querySelectorAll(".cacher").forEach(div => {

function myFunction(x) {
  // If media query matches,
  if (x.matches) { 
  		// if the div style display matched block, then we make all the changes on the div
		if (div.style.display === "block") {
			div.style.display = "none";
			document.getElementById("grid").style.height = "300px";
			moreExperience.innerHTML = "Plus de resultat pour \"Expériences\"";
			document.getElementById("footer").style.marginTop = "430px";

		// Otherwise, we make the contrary
		} else {
			div.style.display = "block";
			document.getElementById("grid").style.height = "605px";
			moreExperience.innerHTML = "Moins de resultat pour \"Expériences\"";
			document.getElementById("footer").style.marginTop = "730px";
		}
	// if media queries doesn't match, 
  } else {
  	// if the div style display matched block, then we make all the changes on the div
  	if (div.style.display === "block") {
			console.log("red");
			div.style.display = "none";
			document.getElementById("grid").style.height = "300px";
			moreExperience.innerHTML = "Plus de resultat pour \"Expériences\"";
			document.getElementById("footer").style.marginTop = "400px";

		} else {
			console.log("orange");
			div.style.display = "block";
			document.getElementById("grid").style.height = "605px";
			moreExperience.innerHTML = "Moins de resultat pour \"Expériences\"";
			document.getElementById("footer").style.marginTop = "710px";
		}
  	}
}

//  create a var x with the method matchMedia that features the width of the screen
var x = window.matchMedia("(max-width: 1130px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

})
});