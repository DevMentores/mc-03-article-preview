import "../css/style.css";

const shareBtn = document.getElementById("shareBtn");
const cardFooter = document.getElementById("cardFooter");

// Add event listener
shareBtn.addEventListener("click", function (event) {
	event.stopPropagation(); // Prevents the click event from reaching the document level

	// we get our share banner
	const shareBanner = document.getElementById("shareBanner");
	if (shareBanner) {
		toggleShareBanner();
	} else {
		createShareBanner();
	}
});

function toggleShareBanner() {
	const shareBanner = document.getElementById("shareBanner");
	shareBanner.classList.toggle("hidden");
}

function createShareBanner() {
	const shareBanner = document.createElement("nav");
	shareBanner.id = "shareBanner";
	shareBanner.classList.add("hidden");
	shareBanner.innerHTML = `
    <p class="font-manrope uppercase tracking-widest text-fem-blue-300 font-normal text-sm">share</p>
  <a href="#" class="block mb-2">
    <img src="./assets/icon-facebook.svg" alt="Facebook" class="w-6 h-6">
  </a>
  <a href="#" class="block mb-2">
    <img src="./assets/icon-twitter.svg" alt="Twitter" class="w-6 h-6">
  </a>
  <a href="#" class="block">
    <img src="./assets/icon-pinterest.svg" alt="Instagram" class="w-6 h-6">
  </a>
`;
	cardFooter.appendChild(shareBanner);
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
