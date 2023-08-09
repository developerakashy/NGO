const fundraiser = document.querySelector(".fundraiser-cards");

var title = [
  "Help Dr. Bhagat care for 500+ elderly parents rescued from abuse and homelessness",
  "Help visually impaired Professor Agarwal build a home for 100 blind girls abandoned by their families",
  "Help 400 abandoned grandparents fight hunger and receive medical care. Donate now",
  "Help Annamrita Foundation save over 12 lakh underprivileged kids from hunger and malnutrition",
  "Help 67-year-old Vanitha provide 80 abandoned orphans with shelter and care",
  "500 cancer patients are fighting for life, help Nargis Dutt Foundation give them urgent chemotherapy",
];

var supportersCount = [11148, 883, 3279, 455, 355, 11148];

var daysLeft = [4, 2, 1, 2, 4, 4];

var progress = [75, 26, 85, 15, 14, 37];

var amountCollected = [
  "99,12,085",
  "13,15,855",
  "42,22,267",
  "4,60,927",
  "7,02,975",
  "18,51,374",
];

var amountGoal = [
  "2,00,00,000",
  "50,00,000",
  "50,00,000",
  "30,00,000",
  "50,00,000",
  "50,00,000",
];

for (let i = 0; i < 6; i++) {
  fundraiser.innerHTML += `<section class="fundraiser">
    <section class="fundraiser-image fundraiser-image${i + 1}"></section>
    <article>${title[i]}</article>
    <div class="fundraiser-support-time">
      <section class="fundraiser-support">
        <span class="fundraiser-support-image"><img height="24px" width="24px"
            src="https://cfstatic.give.do/cfb41077-269b-4376-a68a-aa45355843fd.webp" alt=""></span>
        <span class="fundraiser-support-count">${
          supportersCount[i]
        } Supporters</span>
      </section>
      <section class="fundraiser-time">
        <span><svg>
            <path
              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z">
            </path>
          </svg></span>
        <span>${daysLeft[i]} Days Left</span>
      </section>
    </div>
    <section class="fundraiser-button">
      <button class="login fundraiser-btn">Donate Now</button>
    </section>
    <div class="progress">
      <div class="progress-bar bg-warning" role="progressbar" style="width: ${
        progress[i]
      }%" aria-valuenow="75"
        aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="fundraiser-amount">
      <p>₹${amountCollected[i]}</p>
      <article>Raised of ₹${amountGoal[i]} goal</article>
    </div>
  </section>`;
}

// const mobileOpenheader = document.querySelector("#mobile-open")
// const mobileCloseheader = document.querySelector("#mobile-close")

// mobileOpenheader.addEventListener("click",()=>{
//   document.querySelector("header").style.display = "revert"
//   // mobileOpenheader.style.display = "none"
// })

// mobileCloseheader.addEventListener("click",()=>{
//   document.querySelector("header").style.display = "none"
// })
