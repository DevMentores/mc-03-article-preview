import "../css/style.css";

const shareBtn = document.getElementById("shareBtn");

// Add event listener
shareBtn.addEventListener("click", function (event) {
	event.stopPropagation(); // Prevents the click event from reaching the document level

	// we get our share banner
	const shareBanner = document.getElementById("shareBanner");
	if (shareBanner) toggleShareBanner();
});

function toggleShareBanner() {
	const shareBanner = document.getElementById("shareBanner");
	shareBanner.classList.toggle("hidden");
}

// Click event listener for the document to hide the share banner when clicked outside
document.addEventListener("click", function (event) {
	const shareBanner = document.getElementById("shareBanner");
	if (
		shareBanner &&
		!shareBtn.contains(event.target) &&
		!shareBanner.contains(event.target)
	) {
		// If the click is outside both the share button and the share banner, hide the banner
		shareBanner.classList.add("hidden");
	}
});
