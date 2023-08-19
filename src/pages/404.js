import header from "../assets/components/header.js";
import heroLogin from "../assets/components/heroLogin.js";
import footer from "../assets/components/footer.js";

export default class notFound {
  constructor(root) {
    this.root = root;

    root.innerHTML = `
    ${header()}<!--* Not Found Start -->
    <section class="not-found container">
      <h1>صفحه مورد نظر یافت نشد !</h1>
      <a href="/" class="btn btn--pill btn--primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          class="icon"
        >
          <path
            d="M9.57 18.82C9.38 18.82 9.19 18.75 9.04 18.6L2.97 12.53C2.68 12.24 2.68 11.76 2.97 11.47L9.04 5.4C9.33 5.11 9.81 5.11 10.1 5.4C10.39 5.69 10.39 6.17 10.1 6.46L4.56 12L10.1 17.54C10.39 17.83 10.39 18.31 10.1 18.6C9.96 18.75 9.76 18.82 9.57 18.82Z"
            fill="currentColor"
          />
          <path
            d="M20.5 12.75H3.67001C3.26001 12.75 2.92001 12.41 2.92001 12C2.92001 11.59 3.26001 11.25 3.67001 11.25H20.5C20.91 11.25 21.25 11.59 21.25 12C21.25 12.41 20.91 12.75 20.5 12.75Z"
            fill="currentColor"
          />
        </svg>
        بازگشت به صفحه اصلی
      </a>
    </section>
    <!--* Not Found End -->${heroLogin()}${footer()}
    `;
  }
}