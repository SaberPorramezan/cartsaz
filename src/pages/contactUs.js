import header from "../assets/components/header.js";
import heroLogin from "../assets/components/heroLogin.js";
import footer from "../assets/components/footer.js";

export default class contactUs {
  constructor(root) {
    this.root = root;

    root.innerHTML = `
    ${header()}<!--* Contact Us Start -->
    <section class="contact-us container">
      <div class="contact-us__info">
        <div class="contact-us__title">
          <h1>تماس با ما</h1>
          <p>
            جهت ارتباط با ما میتوانید با یکی از مسیر های زیر با ما ارتباط برقرار
            کنید:
          </p>
        </div>
        <div class="contact-us__btns">
          <button class="btn btn--outline-primary btn--outline-instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="icon"
            >
              <path
                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
                fill="#D12879"
              />
            </svg>
            پیام در دایرکت اینستاگرام
          </button>
          <button class="btn btn--outline-primary btn--outline-whatsapp">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="icon"
            >
              <path
                d="M21.9798 11.41C21.6398 5.61001 16.3698 1.14002 10.2998 2.14002C6.1198 2.83002 2.7698 6.22 2.1198 10.4C1.7398 12.82 2.23983 15.11 3.32983 17L2.43981 20.31C2.23981 21.06 2.92979 21.74 3.66979 21.53L6.9298 20.63C8.4098 21.5 10.1398 22 11.9898 22C17.6298 22 22.3098 17.03 21.9798 11.41ZM16.8798 15.72C16.7898 15.9 16.6798 16.07 16.5398 16.23C16.2898 16.5 16.0198 16.7 15.7198 16.82C15.4198 16.95 15.0898 17.01 14.7398 17.01C14.2298 17.01 13.6798 16.89 13.1098 16.64C12.5298 16.39 11.9598 16.06 11.3898 15.65C10.8098 15.23 10.2698 14.76 9.74981 14.25C9.22981 13.73 8.76978 13.18 8.34978 12.61C7.93979 12.04 7.6098 11.47 7.3698 10.9C7.1298 10.33 7.00982 9.78002 7.00982 9.26002C7.00982 8.92002 7.06981 8.59002 7.18981 8.29002C7.30981 7.98002 7.49983 7.70002 7.76983 7.45002C8.08983 7.13002 8.43981 6.98002 8.80981 6.98002C8.94981 6.98002 9.08978 7.01002 9.21978 7.07002C9.34978 7.13002 9.46981 7.22001 9.55981 7.35001L10.7198 8.99C10.8098 9.12 10.8798 9.23 10.9198 9.34C10.9698 9.45 10.9898 9.55 10.9898 9.65C10.9898 9.77 10.9498 9.89002 10.8798 10.01C10.8098 10.13 10.7198 10.25 10.5998 10.37L10.2198 10.77C10.1598 10.83 10.1398 10.89 10.1398 10.97C10.1398 11.01 10.1498 11.05 10.1598 11.09C10.1798 11.13 10.1898 11.16 10.1998 11.19C10.2898 11.36 10.4498 11.57 10.6698 11.83C10.8998 12.09 11.1398 12.36 11.3998 12.62C11.6698 12.89 11.9298 13.13 12.1998 13.36C12.4598 13.58 12.6798 13.73 12.8498 13.82C12.8798 13.83 12.9098 13.85 12.9398 13.86C12.9798 13.88 13.0198 13.88 13.0698 13.88C13.1598 13.88 13.2198 13.85 13.2798 13.79L13.6598 13.41C13.7898 13.28 13.9098 13.19 14.0198 13.13C14.1398 13.06 14.2498 13.02 14.3798 13.02C14.4798 13.02 14.5798 13.04 14.6898 13.09C14.7998 13.14 14.9198 13.2 15.0398 13.29L16.6998 14.47C16.8298 14.56 16.9198 14.67 16.9798 14.79C17.0298 14.92 17.0598 15.04 17.0598 15.18C16.9998 15.35 16.9598 15.54 16.8798 15.72Z"
                fill="#2FDB9D"
              />
            </svg>
            تماس در واتساپ
          </button>
        </div>
        <div class="contact-us__email">
          <h4>همچنین میتوانید از ایمیل زیر جهت ارسال پیام استفاده کنید:</h4>
          <a href="cartsaz.com@gmail.com">cartsaz.com@gmail.com</a>
        </div>
      </div>
      <svg
        width="177"
        height="177"
        viewBox="0 0 177 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="contact-us__img"
      >
        <rect
          x="0.84375"
          y="0.921753"
          width="175.235"
          height="175.235"
          rx="87.6174"
          fill="#DFEFFF"
        />
        <path
          d="M108.374 48.713H68.5483C57.5563 48.713 48.6353 57.5943 48.6353 68.5464V92.3624V96.345C48.6353 107.297 57.5563 116.178 68.5483 116.178H74.5222C75.5975 116.178 77.0313 116.895 77.7083 117.771L83.6822 125.697C86.3107 129.202 90.6119 129.202 93.2405 125.697L99.2144 117.771C99.9711 116.776 101.166 116.178 102.4 116.178H108.374C119.366 116.178 128.287 107.297 128.287 96.345V68.5464C128.287 57.5943 119.366 48.713 108.374 48.713ZM72.5309 88.5391C70.3006 88.5391 68.5483 86.747 68.5483 84.5565C68.5483 82.3661 70.3405 80.5739 72.5309 80.5739C74.7213 80.5739 76.5135 82.3661 76.5135 84.5565C76.5135 86.747 74.7612 88.5391 72.5309 88.5391ZM88.4613 88.5391C86.2311 88.5391 84.4787 86.747 84.4787 84.5565C84.4787 82.3661 86.2709 80.5739 88.4613 80.5739C90.6518 80.5739 92.4439 82.3661 92.4439 84.5565C92.4439 86.747 90.6916 88.5391 88.4613 88.5391ZM104.392 88.5391C102.162 88.5391 100.409 86.747 100.409 84.5565C100.409 82.3661 102.201 80.5739 104.392 80.5739C106.582 80.5739 108.374 82.3661 108.374 84.5565C108.374 86.747 106.622 88.5391 104.392 88.5391Z"
          fill="#0182FE"
        />
        <rect
          x="1.8394"
          y="1.91741"
          width="173.243"
          height="173.243"
          rx="86.6217"
          stroke="url(#paint0_linear_706_5432)"
          stroke-opacity="0.4"
          stroke-width="1.9913"
        />
        <defs>
          <linearGradient
            id="paint0_linear_706_5432"
            x1="88.4611"
            y1="0.921753"
            x2="88.4611"
            y2="133.343"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0182FE" />
            <stop offset="1" stop-color="#0182FE" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </section>
    <!--* Contact Us End -->${heroLogin()}${footer()}
    `;
  }
}