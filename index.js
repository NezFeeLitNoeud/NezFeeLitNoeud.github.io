let moreExperience = document.getElementById("more"); // Lien a

// moreExperience.addEventListener("click", function(){
// document.querySelectorAll(".cacher").forEach(div => {
// 	if (div.style.display === "block") {
// 		div.style.display = "none";
// 		document.getElementById("grid").style.height = "300px";
// 		moreExperience.innerHTML = "Plus de resultat pour \"Experience\"";
// 		document.getElementById("footer").style.marginTop = "400px";

// 	} else {
// 		div.style.display = "block";
// 		document.getElementById("grid").style.height = "605px";
// 		moreExperience.innerHTML = "Moins de resultat pour \"Experience\"";
// 		document.getElementById("footer").style.marginTop = "710px";
// 	}
	
// })
// });

// let moreExperience = document.getElementById("more"); // Lien a

// moreExperience.addEventListener("click", function(){
// document.getElementById("grid").style.height = "600px";
// document.querySelectorAll(".cacher").forEach(div => {
// 	div.style.display = "block";
// })
// });

let queries = false;
moreExperience.addEventListener("click", function(){
document.querySelectorAll(".cacher").forEach(div => {


function myFunction(x) {
  if (x.matches) { // If media query matches
		if (div.style.display === "block") {
			console.log("blue");
			div.style.display = "none";
			document.getElementById("grid").style.height = "300px";
			moreExperience.innerHTML = "Plus de resultat pour \"Experiences\"";
			document.getElementById("footer").style.marginTop = "430px";

		} else {
			console.log("purple");
			div.style.display = "block";
			document.getElementById("grid").style.height = "605px";
			moreExperience.innerHTML = "Moins de resultat pour \"Experiences\"";
			document.getElementById("footer").style.marginTop = "730px";
		}
  } else {
  	if (div.style.display === "block") {
			console.log("red");
			div.style.display = "none";
			document.getElementById("grid").style.height = "300px";
			moreExperience.innerHTML = "Plus de resultat pour \"Experiences\"";
			document.getElementById("footer").style.marginTop = "400px";

		} else {
			console.log("orange");
			div.style.display = "block";
			document.getElementById("grid").style.height = "605px";
			moreExperience.innerHTML = "Moins de resultat pour \"Experiences\"";
			document.getElementById("footer").style.marginTop = "710px";
		}
  	}
}

var x = window.matchMedia("(max-width: 1130px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

})
});