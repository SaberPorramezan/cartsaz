// Import Main Scss
import "./styles/main.scss";
// Import Pages
import home from "./pages/home.js";
import contactUs from "./pages/contactUs.js";
import faq from "./pages/faq.js";
import notFound from "./pages/404.js";

const app = document.querySelector("#app");
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", (e) => {
  router();
});

function router() {
  if (location.pathname === "/") {
    new home(app);
  } else if (location.pathname === "/contact-us") {
    new contactUs(app);
  } else if (location.pathname === "/faq") {
    new faq(app);
  } else {
    new notFound(app);
  }
}
