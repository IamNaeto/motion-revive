function toggleUserDropdown() {
  const dropdown = document.getElementById("Dropdown");
  dropdown.classList.toggle("active");

  var arrowIcon = document.querySelector(".arrow-icon");
  if (dropdown.classList.contains("active")) {
    arrowIcon.classList.add("up");
  } else {
    arrowIcon.classList.remove("up");
  }
}

function handleDropdownItemClick(item) {
  console.log("Dropdown item clicked:", item);
}

function toogleNotification() {
  const notification = document.getElementById("Notify");
  notification.classList.toggle("active");
}

window.onclick = function (event) {
  if (
    !event.target.matches(".dropbtn") &&
    !event.target.matches(".arrow-icon")
  ) {
    const dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("active")) {
        openDropdown.classList.remove("active");
        document.querySelector(".arrow-icon").classList.remove("up");
      }
    }
  }
};

export { toggleUserDropdown, handleDropdownItemClick, toogleNotification };
