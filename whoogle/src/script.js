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
    question: "What is your approach to managing complex projects?",
    answer:
      "My approach involves breaking down the project into manageable tasks, setting clear milestones, and prioritizing based on urgency and impact. I focus on consistent communication with stakeholders to ensure alignment at every phase.",
    subQuestions: [
      {
        subQuestion: "How do you prioritize tasks in a high-stakes project?",
        subAnswer:
          "I assess urgency and impact, then organize tasks to ensure that high-priority items receive immediate focus.",
      },
      {
        subQuestion: "Why do you have experience in three different roles?",
        subAnswer:
          "I believe that having skills across Project Management, Web Development, and Industrial Design Engineering makes me a more versatile professional and allows me to tackle complex projects from multiple perspectives.",
      },
      {
        subQuestion: "What project management tools do you typically use?",
        subAnswer:
          "I often use Excel and Notion due to the expense of tools like Asana, Jira, or Trello but i do have experince using them during my time at the Formula Cruiser. For communication, I rely on Teams, Google Meet, or WhatsApp.",
      },
    ],
  },

  // question 2 starts
  {
    question:
      "How do you ensure that your websites are user-friendly and responsive?",
    answer:
      "I prioritize simplicity and intuitive design. I use a mobile-first approach, test on multiple devices, and implement responsive layouts to ensure a consistent user experience across screen sizes.",
    subQuestions: [
      {
        subQuestion: "What technologies do you use for front-end development?",
        subAnswer:
          "I frequently work with HTML, CSS (Tailwind CSS), and JavaScript, alongside libraries like React and Next.js",
      },
      {
        subQuestion: "How do you optimize a website for speed and performance?",
        subAnswer:
          "I use lazy loading, and optimize images to minimize load times.",
      },
    ],
  },
  // question 3 starts
  {
    question: "What is your process for designing user-centered products?",
    answer:
      "My process begins with understanding user needs through research and translating findings into design solutions. I balance form and function to create products that are both practical and appealing.",
    subQuestions: [
      {
        subQuestion: "How do you conduct user research for a project?",
        subAnswer:
          "I use surveys, interviews, and usability tests to understand user needs and preferences.",
      },
      {
        subQuestion:
          "How do you balance aesthetics and functionality in design?",
        subAnswer:
          "I always aim to create designs that are visually appealing but also practical and user-friendly.",
      },
    ],
  },
  // question 4 starts
  {
    question: "How can someone contact you for collaboration?",
    answer:
      "You can reach me through my email or connect with me on LinkedIn. I'm always open to discussing potential collaborations!",
    subQuestions: [
      {
        subQuestion: "Do you offer freelance services?",
        subAnswer:
          "Yes, I'm open to freelance opportunities. You can reach me through my email or connect with me on LinkedIn.",
      },

      {
        subQuestion: "What inspired the unique design of your portfolio?",
        subAnswer:
          "My inspiration came from Oliver Edwards 2020 Groogle's portfolio.",
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
      <h5 class="font-bold">${text}</h5>
      <img src="../assets/logo/arrow-drop-down-line (1).svg" alt="faq toggle" />
    </div>
    <p class="hidden answer py-2">${answer}</p>
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
