// JavaScript to close the first detail when the second detail is clicked
function toggleDetails(detailsElement) {
  const allDetails = document.querySelectorAll("details");
  allDetails.forEach((detail) => {
    if (detail !== detailsElement) {
      detail.removeAttribute("open");
    }
  });
}
