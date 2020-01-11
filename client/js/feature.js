var featureSubmitBtn = document.getElementById("featureSubmitBtn");
var featureFrm = document.getElementById("featureSubmitBtn");
var featurLoadingDiv = document.getElementById ("featureLodingDiv")

featureSubmitBtn.addEventListener("click", funtion(){
    
    // Make the loader visible
    featurLoadingDiv.classList.remove("human-removed");
    // Hide the form from the user
    featureFrm.classList.add("human-removed");
}))