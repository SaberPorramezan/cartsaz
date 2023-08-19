import header from "../assets/components/header.js";
import accordions from "../assets/components/accordions.js";
import heroLogin from "../assets/components/heroLogin.js";
import footer from "../assets/components/footer.js";

export default class faq {
  constructor(root) {
    this.root = root;

    root.innerHTML = `
    ${header()}<!--* FAQ Start -->
    <section class="faq container">
      <h1>سوالات متداول</h1>${accordions()}</section>
    <!--* FAQ End -->${heroLogin()}${footer()}
    `;
  }
}
