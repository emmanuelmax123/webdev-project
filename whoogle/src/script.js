function runmodal() {
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
}

runmodal();

// Store the original content
let originalContent = "";

function openPm() {
  const frame = document.querySelector(".js-main");
  // Check if we have stored the original content already if not save it
  if (!originalContent) {
    originalContent = frame.innerHTML;
  }

  if (frame.classList.contains("pm-section")) {
    // Revert to original content
    frame.innerHTML = originalContent;
    frame.classList.remove("pm-open");
  } else {
    frame.innerHTML = `
  <!-- Rediones start -->
        <div class="flex flex-col mb-[36px] w-[490px]">
          <div class="flex">
            <img
              src="../assets/logo/rediones-color.svg"
              alt=""
              class="rounded-full size-12 mr-[14px] border-2 border-[#e8e8e8] p-[2px] flex justify-center items-center"
            />
            <div class="mb-2">
              <h4>Rediones</h4>
              <a href="" target="_blank" rel="noopener noreferrer"
                ><h6>www.rediones.com</h6></a
              >
            </div>
          </div>
          <div class="line-clamp-2 open-btn cursor-pointer">
            <h5>
              At Rediones, we're all about bringing scholars together from every
              corner of the world. Our platform creates an inclusive and diverse
              community where sharing ideas, working on exciting projects,
              making new friends, and even having some fun are all part of the
              journey.
            </h5>
          </div>

          <!-- dialog starts here -->
          <dialog
            class="max-w-[1000px] p-5 flex-col bg-[#faf9f6] rounded-2xl outline-none text-[#0a0a0a] modal"
          >
            <!-- cancel icon starts here -->
            <div
              class="h-[36px] close-btn float-end rounded-2xl cursor-pointer"
            >
              <img src="../assets/logo/close-fill.svg" alt="" />
            </div>

            <!-- hero image + info starts here -->
            <div class="flex w-full">
              <img
                src="../assets/images/Home 8.svg"
                alt=""
                class="w-[498px] h-[256px] mr-5 rounded-xl border-2 border-[#e8e8e8]"
              />
              <div class="space-y-5 flex flex-col justify-center">
                <!-- aboust starts here -->
                <div class="flex items-start">
                  <h3 class="w-[5rem] mr-5">About</h3>
                  <p>
                    I was inspired by my own challenging transition from high
                    school to university, where I struggled to make new friends.
                    Understanding the commonality of this experience, I
                    envisioned Rediones as a safe haven for students. A platform
                    dedicated to easing these transitions, fostering a
                    supportive community where students can connect, engage, and
                    thrive together.
                  </p>
                </div>

                <!-- role starts here -->
                <div class="flex items-center">
                  <h3 class="w-[63px] mr-5">Role</h3>
                  <p>Project Manager & Founder</p>
                </div>

                <!-- tech stack -->
                <div class="flex items-center">
                  <h3 class="w-[63px] mr-5">Stack</h3>

                  <img
                    src="../assets/logo/file-excel-2-fill.svg"
                    alt=""
                    class="mr-5"
                  />
                  <img
                    src="../assets/logo/file-word-2-fill.svg"
                    alt=""
                    class="mr-5"
                  />
                  <img src="../assets/logo/notion-fill.svg" alt="" />
                </div>
              </div>
            </div>
          </dialog>
        </div> 
        
        
        <!-- Wildwest -->
        <div class="flex flex-col mb-[36px] w-[490px]">
          <div class="flex">
            <img
              src="../assets/logo/wildwest.svg"
              alt=""
              class="rounded-full size-12 mr-[14px] border-2 border-[#e8e8e8] p-[2px]"
            />
            <div class="mb-2">
              <h4>Wild West</h4>
              <a
                href="https://theformulacruisers.com/"
                target="_blank"
                rel="noopener noreferrer"
                ><h6>www.wildwest.com</h6></a
              >
            </div>
          </div>
          <div class="line-clamp-2 open-btn cursor-pointer">
            <h5>
              A unique experiment to gauge the viability of a non-traditional
              content strategy using a faceless and voiceless TikTok account. I
              developed and
            </h5>
          </div>

          <!-- dialog starts here -->
          <dialog
            class="modal max-w-[1000px] p-5 flex-col bg-[#faf9f6] rounded-2xl outline-none text-[#0a0a0a]"
          >
            <!-- cancel icon starts here -->
            <div
              class="h-[36px] close-btn float-end rounded-2xl cursor-pointer"
            >
              <img src="../assets/logo/close-fill.svg" alt="" />
            </div>

            <!-- hero image + info starts here -->
            <div class="flex w-full">
              <img
                src="../assets/logo/wwstats.svg"
                alt=""
                class="w-[498px] h-[256px] mr-5 rounded-xl border-2 border-[#e8e8e8]"
              />
              <div class="space-y-5 flex flex-col justify-center">
                <!-- aboust starts here -->
                <div class="flex items-start">
                  <h3 class="w-[5rem] mr-5">About</h3>
                  <p>
                    A unique experiment to gauge the viability of a
                    non-traditional content strategy using a faceless and
                    voiceless TikTok account. I developed and curated engaging
                    content, leading to a rapid growth in audience engagement
                    and brand visibility, with that I was able to achieve
                    significant milestones: 100K likes, over 1.6 million views,
                    and expanded follower base to 1,700+ within 16 months. I
                    used Excel to track performance metrics, adapted content
                    strategies based on findings.
                  </p>
                </div>

                <!-- role starts here -->
                <div class="flex items-center">
                  <h3 class="w-[63px] mr-5">Role</h3>
                  <p>Content Creator and Project Manager</p>
                </div>

                <!-- tech stack -->
                <div class="flex items-center">
                  <h3 class="w-[63px] mr-5">Stack</h3>
                  <img
                    src="../assets/logo/tiktok-fill.svg"
                    alt=""
                    class="mr-5"
                  />
                  <img src="../assets/logo/file-excel-2-fill.svg" alt="" />
                </div>
              </div>
            </div>

            <!-- deisgn proces starst here -->
            <div class="mt-[60px] flex justify-between gap-3">
              <h3>Design Process</h3>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>1</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>2</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>3</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>4</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>5</h1>
              </div>
            </div>
          </dialog>
        </div>`;

    // we add pm section so when we click again the fuction will give us the original content
    frame.classList.add("pm-section");
  }
}

function openIde() {
  const frame = document.querySelector(".js-main");
  // Check if we have stored the original content already if not save it
  if (!originalContent) {
    originalContent = frame.innerHTML;
  }

  if (frame.classList.contains("ide-section")) {
    // Revert to original content
    frame.innerHTML = originalContent;
    frame.classList.remove("pm-open");
    runmodal();
  } else {
    frame.innerHTML = `<!-- mdt starts -->
        <div class="flex flex-col mb-[36px] w-[490px]">
          <div class="flex">
            <img
              src="../assets/logo/thaus.svg"
              alt=""
              class="rounded-full size-12 mr-[14px] border-2 border-[#e8e8e8] p-[2px]"
            />
            <div class="mb-2">
              <h4>The Technology for Healthcare Research Group</h4>
              <a
                href="https://www.thuas.com/research/research-groups/technology-health-care"
                target="_blank"
                rel="noopener noreferrer"
                ><h6>www.technologyforhealthcareresearchgroup.com</h6></a
              >
            </div>
          </div>
          <div class="line-clamp-2 open-btn cursor-pointer">
            <h5>
              I Collaborated with two music therapist at pieter van foreest i
              was tasked with testing and optimizing the MDT (Music Demantia
              Technology)
            </h5>
          </div>

          <!-- dialog starts here -->
          <dialog
            class="modal max-w-[1000px] p-5 flex-col bg-[#faf9f6] rounded-2xl outline-none text-[#0a0a0a]"
          >
            <!-- cancel icon starts here -->
            <div
              class="h-[36px] close-btn float-end rounded-2xl cursor-pointer"
            >
              <img src="../assets/logo/close-fill.svg" alt="" />
            </div>

            <!-- hero image + info starts here -->
            <div class="flex w-full">
              <img
                src="../assets/images/MDT.png"
                alt=""
                class="w-[498px] h-[256px] mr-5 rounded-xl border-2 border-[#e8e8e8]"
              />
              <div class="space-y-5 flex flex-col justify-center">
                <!-- aboust starts here -->
                <div class="flex items-start">
                  <h3 class="w-[5rem] mr-5">About</h3>
                  <p>
                    The project focuses on creating a specialized musical
                    instrument, particularly a piano, designed to cater to
                    individuals with dementia. In this project, I tested the
                    prototype with dementia patients, reviewd my finding and use
                    the insights to refine the software of the MDT prototype,
                    resulting in a 85.91% decrease in user frustraction compared
                    to the older version.
                  </p>
                </div>

                <!-- role starts here -->
                <div class="flex items-center">
                  <h3 class="w-[63px] mr-5">Role</h3>
                  <p>Industrial Design Engineer and Project Manager</p>
                </div>

                <!-- tech stack -->
                <div class="flex items-center">
                  <h3 class="w-[63px] mr-5">Stack</h3>

                  <img src="../assets/logo/python.svg" alt="" />
                </div>
              </div>
            </div>

            <!-- deisgn proces starst here -->
            <div class="mt-[60px] flex justify-between gap-3">
              <h3>Design Process</h3>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>1</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>2</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>3</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>4</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>5</h1>
              </div>
            </div>
          </dialog>
        </div>
        
        <!-- Formula Cruiser -->
        <div class="flex flex-col mb-[36px] w-[490px]">
          <div class="flex">
            <img
              src="../assets/logo/fc-color.svg"
              alt=""
              class="rounded-full size-12 mr-[14px] border-2 border-[#e8e8e8] p-[2px] flex justify-center items-center"
            />
            <div class="mb-2">
              <h4>Formula Cruiser</h4>
              <a
                href="https://theformulacruisers.com/"
                target="_blank"
                rel="noopener noreferrer"
                ><h6>www.theformulacruisers.com</h6></a
              >
            </div>
          </div>
          <div class="line-clamp-2 open-btn cursor-pointer">
            <h5>
              I was tasked with developing visual displays that highlighted
              potential sponsorship spots on the race car. I collaborated with
              the finance department
            </h5>
          </div>

          <!-- dialog starts here -->
          <dialog
            class="max-w-[1000px] p-5 flex-col bg-[#faf9f6] rounded-2xl outline-none text-[#0a0a0a] modal"
          >
            <!-- cancel icon starts here -->
            <div
              class="h-[36px] close-btn float-end rounded-2xl cursor-pointer"
            >
              <img src="../assets/logo/close-fill.svg" alt="" />
            </div>

            <!-- hero image + info starts here -->
            <div class="flex w-full">
              <img
                src="../assets/images/formulacruiser.png"
                alt=""
                class="w-[498px] h-[256px] mr-5 rounded-xl border-2 border-[#e8e8e8]"
              />
              <div class="space-y-5 flex flex-col justify-center">
                <!-- aboust starts here -->
                <div class="flex items-start">
                  <h3 class="w-[5rem] mr-5">About</h3>
                  <p>
                    I was tasked with developing visual displays that
                    highlighted potential sponsorship spots on the race car. I
                    collaborated with the finance department to create a
                    comprehensive business case for the brand by analyzing
                    market trends, customer insights, and competitive
                    landscapes. Additionally, I designed the team's racing
                    shirt.
                  </p>
                </div>

                <!-- role starts here -->
                <div class="flex items-center">
                  <h3 class="w-[63px] mr-5">Role</h3>
                  <p>Brand Designer</p>
                </div>

                <!-- tech stack -->
                <div class="flex items-center">
                  <h3 class="w-[63px] mr-5">Stack</h3>

                  <img
                    src="../assets/logo/file-word-2-fill.svg"
                    alt=""
                    class="mr-5"
                  />
                  <img
                    src="../assets/logo/blender-fill.svg"
                    alt=""
                    class="mr-5"
                  />
                  <img
                    src="../assets/logo/adobe-photoshop-logo-svgrepo-com.svg"
                    alt=""
                    class="h-[36px]"
                  />
                </div>
              </div>
            </div>

            <!-- deisgn proces starst here -->
            <div class="mt-[60px] flex justify-between gap-3">
              <h3>Design Process</h3>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>1</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>2</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>3</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>4</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>5</h1>
              </div>
            </div>
          </dialog>
        </div>
        
        <!-- Waag -->
        <div class="flex flex-col mb-[36px] w-[490px]">
          <div class="flex">
            <img
              src="../assets/logo/waag.svg"
              alt=""
              class="rounded-full size-12 mr-[14px] border-2 border-[#e8e8e8] p-[2px]"
            />
            <div class="mb-2">
              <h4>Waag</h4>
              <a
                href="https://waag.org/en/"
                target="_blank"
                rel="noopener noreferrer"
                ><h6>www.waag.com</h6></a
              >
            </div>
          </div>
          <div class="line-clamp-2 open-btn cursor-pointer">
            <h5>
              Waag sought a creative solution to better visualize their air
              quality data, aiming to raise greater awareness about the issue.
              Along with three others, I was tasked with addressing this
              challenge.
            </h5>
          </div>

          <!-- dialog starts here -->
          <dialog
            class="modal max-w-[1000px] p-5 flex-col bg-[#faf9f6] rounded-2xl outline-none text-[#0a0a0a]"
          >
            <!-- cancel icon starts here -->
            <div
              class="h-[36px] close-btn float-end rounded-2xl cursor-pointer"
            >
              <img src="../assets/logo/close-fill.svg" alt="" />
            </div>

            <!-- hero image + info starts here -->
            <div class="flex w-full">
              <img
                src="../assets/images/Airbox front.png"
                alt=""
                class="w-[498px] h-[256px] mr-5 rounded-xl border-2 border-[#e8e8e8]"
              />
              <div class="space-y-5 flex flex-col justify-center">
                <!-- aboust starts here -->
                <div class="flex items-start">
                  <h3 class="w-[5rem] mr-5">About</h3>
                  <p>
                    Waag sought a creative solution to better visualize their
                    air quality data, aiming to raise greater awareness about
                    the issue. Along with three others, I was tasked with
                    addressing this challenge. We developed the Airbox
                    prototype, which utilized Waag's data to display air quality
                    through dynamic visual effects using lights and smoke.
                  </p>
                </div>

                <!-- role starts here -->
                <div class="flex items-center">
                  <h3 class="w-[63px] mr-5">Role</h3>
                  <p>Industrial Design Engineer</p>
                </div>

                <!-- stack starts here -->
                <div class="flex items-center">
                  <h3 class="w-[63px] mr-5">Stack</h3>
                  <img src="../assets/logo/blender-fill.svg" alt="" />
                </div>
              </div>
            </div>

            <!-- deisgn proces starst here -->
            <div class="mt-[60px] flex justify-between gap-3">
              <h3>Design Process</h3>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>1</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>2</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>3</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>4</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>5</h1>
              </div>
            </div>
          </dialog>
        </div>

        <!-- Ahrend -->
        <div class="flex flex-col mb-[36px] w-[490px]">
          <div class="flex">
            <img
              src="../assets/logo/ahrend.svg"
              alt=""
              class="rounded-full size-12 mr-[14px] border-2 border-[#e8e8e8] p-[2px]"
            />
            <div class="mb-2">
              <h4>Ahrend</h4>
              <a
                href="https://www.ahrend.com/"
                target="_blank"
                rel="noopener noreferrer"
                ><h6>www.ahrend.com</h6></a
              >
            </div>
          </div>
          <div class="line-clamp-2 open-btn cursor-pointer">
            <h5>
              Ahrend designer Kees de Boer needed assistance in creating office
              furniture that would encourage employees to return to the
              workplace. Together with my team
            </h5>
          </div>

          <!-- dialog starts here -->
          <dialog
            class="modal max-w-[1000px] p-5 flex-col bg-[#faf9f6] rounded-2xl outline-none text-[#0a0a0a]"
          >
            <!-- cancel icon starts here -->
            <div
              class="h-[36px] close-btn float-end rounded-2xl cursor-pointer"
            >
              <img src="../assets/logo/close-fill.svg" alt="" />
            </div>

            <!-- hero image + info starts here -->
            <div class="flex w-full">
              <img
                src="../assets/images/ahrend.png"
                alt=""
                class="w-[498px] h-[256px] mr-5 rounded-xl border-2 border-[#e8e8e8]"
              />
              <div class="space-y-5 flex flex-col justify-center">
                <!-- aboust starts here -->
                <div class="flex items-start">
                  <h3 class="w-[5rem] mr-5">About</h3>
                  <p>
                    Ahrend designer Kees de Boer needed assistance in creating
                    office furniture that would encourage employees to return to
                    the workplace. Together with my team, we developed a desk
                    solution that enabled workers to communicate effectively
                    while adhering to the 1.5-meter COVID-19 safety regulations.
                  </p>
                </div>

                <!-- role starts here -->
                <div class="flex items-center">
                  <h3 class="w-[63px] mr-5">Role</h3>
                  <p>Industrial Design Engineer</p>
                </div>
              </div>
            </div>

            <!-- deisgn proces starst here -->
            <div class="mt-[60px] flex justify-between gap-3">
              <h3>Design Process</h3>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>1</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>2</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>3</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>4</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>5</h1>
              </div>
            </div>
          </dialog>
        </div>`;
    frame.classList.add("ide-section");
    runmodal();
  }
}

function webDev() {
  const frame = document.querySelector(".js-main");
  // Check if we have stored the original content already if not save it
  if (!originalContent) {
    originalContent = frame.innerHTML;
  }

  if (frame.classList.contains("webdev-section")) {
    // Revert to original content
    frame.innerHTML = originalContent;
    frame.classList.remove("pm-open");
  } else {
    frame.innerHTML = `<!-- search agarnt start -->
        <div class="flex flex-col mb-[36px] w-[490px]">
          <div class="flex">
            <img
              src="../assets/logo/searchagent.svg"
              alt=""
              class="rounded-full size-12 mr-[14px] border-2 border-[#e8e8e8] p-[2px] flex justify-center items-center"
            />
            <div class="mb-2">
              <h4>Search Agent</h4>
              <a href="" target="_blank" rel="noopener noreferrer"
                ><h6>www.search-agent.com</h6></a
              >
            </div>
          </div>
          <div class="line-clamp-2 open-btn cursor-pointer">
            <h5>
              Finding a job as an expat can be challenging, especially when
              you're still learning the local language. That's why I decided to
              build Search Agent—a web scraping platform that filters job
              listings based on your preferred language.
            </h5>
          </div>

          <!-- dialog starts here -->
          <dialog
            class="max-w-[1000px] p-5 flex-col bg-[#faf9f6] rounded-2xl outline-none text-[#0a0a0a] modal"
          >
            <!-- cancel icon starts here -->
            <div
              class="h-[36px] close-btn float-end rounded-2xl cursor-pointer"
            >
              <img src="../assets/logo/close-fill.svg" alt="" />
            </div>

            <!-- hero image + info starts here -->
            <div class="flex w-full">
              <img
                src="../assets/images/searchagent.jpg"
                alt=""
                class="w-[498px] h-[256px] mr-5 rounded-xl border-2 border-[#e8e8e8]"
              />
              <div class="space-y-5 flex flex-col justify-center">
                <!-- aboust starts here -->
                <div class="flex items-start">
                  <h3 class="w-[5rem] mr-5">About</h3>
                  <p>
                    Finding a job as an expat can be challenging, especially
                    when you're still learning the local language. That's why I
                    decided to build Search Agent—a web scraping platform that
                    filters job listings based on your preferred language.
                  </p>
                </div>

                <!-- role starts here -->
                <div class="flex items-center">
                  <h3 class="w-[63px] mr-5">Role</h3>
                  <p>Full Stack Developer</p>
                </div>

                <!-- tech stack -->
                <div class="flex items-center">
                  <h3 class="w-[63px] mr-5">Stack</h3>

                  <img
                    src="../assets/logo/html5-fill.svg"
                    alt=""
                    class="mr-5"
                  />
                  <img
                    src="../assets/logo/tailwind-css-fill.svg"
                    alt=""
                    class="mr-5"
                  />
                  <img src="../assets/logo/javascript-fill.svg" alt="" />
                </div>
              </div>
            </div>

            <!-- deisgn proces starst here -->
            <div class="mt-[60px] flex justify-between gap-3">
              <h3>Design Process</h3>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>1</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>2</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>3</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>4</h1>
              </div>
              <div
                class="border-[#0a0a0a] border-2 w-[100px] h-[112px] rounded-lg flex items-center justify-center"
              >
                <h1>5</h1>
              </div>
            </div>
          </dialog>
        </div>`;
    frame.classList.add("webdev-section");
  }
}
