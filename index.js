document.getElementById("toggle-btn").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  const image = document.getElementById("brand-image");
  const icons = document.querySelectorAll("#menu-items svg");
  const labels = document.querySelectorAll("#menu-items span");
  const icons1 = document.querySelectorAll("#menu-items-2 svg");
  const labels1 = document.querySelectorAll("#menu-items-2 span");
  const contents = document.getElementById("content");

  sidebar.classList.toggle("col-span-2"); // Toggle the width
  sidebar.classList.toggle("w-20"); // Set a fixed smaller width
  contents.classList.toggle("col-span-11");

  if (sidebar.classList.contains("w-20")) {
    image.src = "images/logo.png";
    image.style.width = "55px"; // Source for collapsed state
  } else {
    image.src = "images/kyan-black.png";
    image.style.width = "160px"; // Source for expanded state
  }

  //   contents.classList.toggle("col-span-12");
  icons.forEach((icon) => {
    icon.classList.toggle("mr-0"); // Remove margin when collapsed
  });
  icons1.forEach((icon1) => {
    icon1.classList.toggle("mr-0"); // Remove margin when collapsed
  });

  labels.forEach((label) => {
    label.classList.toggle("hidden"); // Hide labels when collapsed
  });
  labels1.forEach((label1) => {
    label1.classList.toggle("hidden"); // Hide labels when collapsed
  });
});

const mobileMenu = document.getElementById("mobile-menu");
document.getElementById("mobile-button").addEventListener("click", function () {
  mobileMenu.classList.remove("hidden-menu");
});
document
  .getElementById("close-mobile-button")
  .addEventListener("click", function () {
    mobileMenu.classList.add("hidden-menu");
  });

document.getElementById("profile-btn").addEventListener("click", function () {
  const dropdownProfile = document.getElementById("dropdown-profile");

  dropdownProfile.classList.toggle("hidden");
});
document
  .getElementById("notification-btn")
  .addEventListener("click", function () {
    const dropdownNotif = document.getElementById("dropdown-notif");

    dropdownNotif.classList.toggle("hidden");
  });
