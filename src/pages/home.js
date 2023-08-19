import header from "../assets/components/header.js";
import introduction from "../assets/components/introduction.js";
import preview from "../assets/components/preview.js";
import features from "../assets/components/features.js";
import heroLogin from "../assets/components/heroLogin.js";
import footer from "../assets/components/footer.js";

export default class home {
  constructor(root) {
    this.root = root;

    root.innerHTML = `
    ${header()}${introduction()}${preview()}${features()}${heroLogin()}${footer()}
    `;

    const introductionBtn = this.root.querySelector(".introduction__btn");
    const introductionVideo = this.root.querySelector(".introduction__video");

    introductionBtn.addEventListener("click", (e) => {
      introductionVideo.classList.remove("hide");
      introductionBtn.classList.add("hide");
    });
  }
}
