function viewPDF(pdfPath) {
  window.open(pdfPath, "_blank");
}

function filterNotices() {
  const datePicker = document.getElementById("notice-date-picker");
  const selectedDate = datePicker.value; // Gets the selected date in 'YYYY-MM-DD' format
  const noticeCards = document.querySelectorAll(".notice-card");
  let noticesFound = false; // Flag to track if any notices match the selected date

  // Loop through all notice cards and hide/show based on selected date
  noticeCards.forEach((card) => {
    const noticeDate = card.getAttribute("data-date"); // Get the date from data attribute
    if (noticeDate === selectedDate) {
      card.style.display = "block"; // Show the card if date matches
      noticesFound = true; // Set flag to true if a notice is found
    } else {
      card.style.display = "none"; // Hide the card if date does not match
    }
  });

  // Show or hide the "No Notices" message based on whether notices were found
  const noNoticesMessage = document.getElementById("no-notices-message");
  if (!noticesFound) {
    noNoticesMessage.style.display = "block"; // Show message if no notices found
  } else {
    noNoticesMessage.style.display = "none"; // Hide message if notices are found
  }
}

function showAllNotices() {
  const noticeCards = document.querySelectorAll(".notice-card");
  const noNoticesMessage = document.getElementById("no-notices-message");

  // Show all notice cards
  noticeCards.forEach((card) => {
    card.style.display = "block";
  });

  // Hide the "No Notices" message
  noNoticesMessage.style.display = "none";
}
