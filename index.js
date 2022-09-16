document.addEventListener("DOMContentLoaded", () => {
	// Toggle navigation
	var navigationToggle = document.querySelector(".navigation-toggle")
	var navigationPanel = document.querySelector(".navigation-panel")

	navigationToggle.addEventListener("click", () => {
		navigationToggle.classList.toggle("active")
		navigationPanel.classList.toggle("active")
	})

	// Toggle map view
	var mapToggle = document.querySelector(".map-toggle")
	var closeMap = document.querySelector(".close-map")

	mapToggle.addEventListener("click", () => toggleMapView())
	closeMap.addEventListener("click", () => toggleMapView())

	const toggleMapView = () => {
		document.querySelector(".map-modal").classList.toggle("active")
	}
})
