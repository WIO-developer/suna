function onScroll() {
  var overlay_modal = document.getElementById("overlay_modal")
  var popup = document.getElementById("popup_menu")
  var home = document.getElementById("home")
  if (overlay_modal.style.opacity != "0.5") {
    overlay_modal.style.left = "0"
    popup.style.right = "0"
    overlay_modal.style.opacity = "0.5"
    popup.style.opacity = "1"
    home.style.visibility = "visible"
  } else {
    overlay_modal.style.left = "100%"
    popup.style.right = "-100%"
    overlay_modal.style.opacity = "0"
    popup.style.opacity = "0"
    home.style.visibility = "hidden"
  }
}

const Header = {
  onScroll,
}

export default Header