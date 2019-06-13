let moreExperience = document.getElementById("more"); // Lien a

moreExperience.addEventListener("click", function(){
document.querySelectorAll(".cacher").forEach(div => {
	if (div.style.display === "block") {
		div.style.display = "none";
		document.getElementById("grid").style.height = "300px";
		moreExperience.innerHTML = "Plus de resultat pour \"Experience\"";
		document.getElementById("footer").style.marginTop = "400px";

	} else {
		div.style.display = "block";
		document.getElementById("grid").style.height = "605px";
		moreExperience.innerHTML = "Moins de resultat pour \"Experience\"";
		document.getElementById("footer").style.marginTop = "710px";
	}
	
})
});

// let moreExperience = document.getElementById("more"); // Lien a

// moreExperience.addEventListener("click", function(){
// document.getElementById("grid").style.height = "600px";
// document.querySelectorAll(".cacher").forEach(div => {
// 	div.style.display = "block";
// })
// });


