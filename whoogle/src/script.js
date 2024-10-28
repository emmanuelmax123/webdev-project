const modals = document.querySelectorAll(".modal");
const openbtn = document.querySelectorAll(".open-btn");
const closebtn = document.querySelectorAll(".close-btn");

openbtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modals[index].showModal();
  });
});

closebtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modals[index].close();
  });
});

const filterBtn = document.querySelectorAll(".filter-btn");
const sections = document.querySelectorAll(".ide, .pm, .webdev");
const aboutMe = document.querySelector(".js-aboutMe");

filterBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    const active = btn.classList.contains("active");

    // remove active class
    filterBtn.forEach((btn) => {
      btn.classList.remove("active", "border-2", "border-[#0a0a0a]");
    });

    if (active) {
      // if btn is active show original content
      sections.forEach((section) => {
        section.classList.remove("hidden");
      });
      aboutMe.classList.remove("hidden");
    } else {
      aboutMe.classList.add("hidden");

      // show filter section
      sections.forEach((section) => {
        // show matching work
        if (section.classList.contains(filter)) {
          section.classList.remove("hidden");

          console.log("wordks");
        } else {
          section.classList.add("hidden");
        }
      });
      btn.classList.add("active", "border-2", "border-[#0a0a0a]");
    }
  });
});

function runimages() {
  const profile = document.querySelector(".js-profile");
  const maincontent = document.querySelector(".js-maincontent");
  profile.classList.add("hidden");
  maincontent.classList.add("hidden");

  const image = document.querySelector(".js-imgSection");
  image.classList.remove("hidden");
  image.innerHTML = `<div class="columns-[300px] px-4 py-10 space-y-5">
        <img
          src="../assets/images/04F80FF3-4A7B-4AA2-BF76-DB760FBB51C1.jpg"
          alt=""
          class="rounded-lg" 
        />
        <img
          src="../assets/images/689C9EC4-91A2-4021-9837-ED38749D9CD8.jpg "
          alt=""
          class="rounded-lg" 
        />
        <img src="../assets/images/image (22).png " alt="" class="rounded-lg" />
        <img src="../assets/images/image (23).png " alt="" class="rounded-lg" />
        <img src="../assets/images/image (24).png " alt="" class="rounded-lg" />
        <img src="../assets/images/image (27).png " alt="" class="rounded-lg"  />
        <img src="../assets/images/image (28).png " alt="" class="rounded-lg"  />
        <img src="../assets/images/image (29).png " alt="" class="rounded-lg" />
        <img src="../assets/images/image (30).png " alt="" class="rounded-lg" />
        <img src="../assets/images/wk (1).jpg " alt="" class="rounded-lg" />
        <img src="../assets/images/image (21).png " alt="" class="rounded-lg" />
        <img src="../assets/images/MicrosoftTeams-image (26) 1.jpg" alt="" class="rounded-lg">
        <img src="../assets/images/DSC08945 1.jpg" alt="" class="rounded-lg">
        <img src="../assets/images/hi..2.jpg" alt="" class="rounded-lg">
        <img src="../assets/images/hi..1.jpg" alt="" class="rounded-lg">
        <img src="../assets/images/hi..5 1.jpg" alt="" class="rounded-lg">
        <img src="../assets/images/head 1.jpg" alt="" class="rounded-lg">
        <img src="../assets/images/image 23.jpg" alt="" class="rounded-lg">
        <img src="../assets/images/dee5.jpg" alt="" class="rounded-lg">
        <img src="../assets/images/dee3 1.jpg" alt="" class="rounded-lg">
        <img src="../assets/images/dee4.jpg" alt="" class="rounded-lg">
        <img src="../assets/images/rediones5 1.jpg" alt="" class="rounded-lg">
      </div>`;
}

function runProjects() {
  const aboutsection = document.querySelector(".js-aboutsection");
  const faq = document.querySelector(".js-faq");
  const mainLine = document.querySelector(".js-main");
  const aboutMe = document.querySelector(".js-aboutMe");
  const profile = document.querySelector(".js-profile");
  const maincontent = document.querySelector(".js-maincontent");
  const image = document.querySelector(".js-imgSection");

  image.classList.add("hidden");
  profile.classList.remove("hidden");
  maincontent.classList.remove("hidden");

  aboutsection.classList.add("hidden");
  faq.classList.add("hidden");
  aboutMe.classList.add("hidden");
  mainLine.classList.remove("border-r-2", "border-r-[#e8e8e8]");
  console.log("works");
}

// faq starts here
const faqs = [
  // question 1 starts
  {
    question: "What projects have you worked on?",
    answer: "blue",
    subQuestions: [
      {
        subQuestion: "What industries have you worked in?",
        subAnswer: "ball",
      },
      {
        subQuestion: "What is your experience with project management?",
        subAnswer: "black",
      },
      {
        subQuestion: "Can you tell me more about your startup, Rediones?",
        subAnswer: "ball",
      },
    ],
  },

  // question 2 starts
  {
    question: " What skills and technologies do you specialize in?",
    answer: "blue",
    subQuestions: [
      {
        subQuestion: "What languages and frameworks do you use?",
        subAnswer: "ball",
      },
      {
        subQuestion: "What skills do you specialize in?",
        subAnswer: "black",
      },
    ],
  },
];

const faqContainer = document.querySelector(".js-faqs");

function createFaqItem(text, answer = "", isMain = true) {
  const faqItem = document.createElement("div");
  faqItem.classList.add("border-b-2", "border-b-[#0a0a0a]", "py-[12px]");

  faqItem.innerHTML = `
    <div class="flex justify-between question">
      <h4>${text}</h4>
      <img src="../assets/logo/arrow-drop-down-line (1).svg" alt="faq toggle" />
    </div>
    <p class="hidden answer">${answer}</p>
  `;

  // Event handling for main or sub-questions
  faqItem.querySelector(".question").addEventListener("click", () => {
    const answerElement = faqItem.querySelector(".answer");
    answerElement.classList.toggle("hidden");
  });

  return faqItem;
}

// Generate the FAQ
faqs.forEach((faq) => {
  // Create and add the main question
  const mainFaqItem = createFaqItem(faq.question, faq.answer);
  faqContainer.appendChild(mainFaqItem);

  // Track whether sub-questions have been created
  let subQuestionsCreated = false;

  // Show sub-questions when the main question is clicked
  mainFaqItem.querySelector(".question").addEventListener("click", () => {
    const answerElement = mainFaqItem.querySelector(".answer");
    answerElement.classList.toggle("hidden");

    // Only create sub-questions if they haven't been created yet
    if (!subQuestionsCreated) {
      faq.subQuestions.forEach((sub) => {
        const subFaqItem = createFaqItem(sub.subQuestion, sub.subAnswer, false);
        subFaqItem.classList.add("sub-question");
        mainFaqItem.insertAdjacentElement("afterend", subFaqItem);
      });
      subQuestionsCreated = true;
    }
  });
});
