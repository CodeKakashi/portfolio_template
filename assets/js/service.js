AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Web Development",
    cardImage: "assets/images/experience-page/webDevelopment.png",
    desp: "<li><strong>Full Stack Expertise:</strong> Proficient in both front-end and back-end development, ensuring end-to-end functionality and user experience.</li><li><strong>Responsive Design:</strong> Creating websites and web applications that adapt seamlessly to various devices for an optimal user experience.</li><li><strong>Cutting-Edge Technologies:</strong> Staying current with the latest web development frameworks and tools to deliver modern and efficient solutions.</li>"
  },
  {
    title: "Mobile App Development",
    cardImage: "assets/images/experience-page/mobileAppDevelopment.png",
    desp: "<li><strong>User-Centric Design:</strong> Focusing on creating intuitive and visually appealing interfaces to enhance the overall user experience.</li><li><strong>Platform-Specific Technologies:</strong> Utilizing programming languages and frameworks tailored to the target platforms, such as Swift for iOS or Kotlin/Java for Android.</li><li><strong>Cross-Platform Development:</strong> Employing tools like React Native or Flutter to build apps that can run on multiple platforms, minimizing development efforts and maximizing reach.</li>",
  },
  {
    title: "Front End Development",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    desp: "<li><strong>User Interface (UI) Design:</strong> Crafting the visual elements and layout of a website or application to ensure an appealing and user-friendly experience.</li><li><strong>HTML, CSS, and JavaScript:</strong> Utilizing these core technologies to structure content, style interfaces, and implement interactive features on the client side.</li><li><strong>Responsive Design:</strong> Ensuring that websites and applications adapt seamlessly to different devices and screen sizes for a consistent user experience.</li>",
  },
  {
    title: "Back End Development",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    desp: "<li><strong>Server-Side Logic:</strong> Implementing the functionality and business logic that power the application, ensuring data processing, storage, and retrieval.</li><li><strong>Database Management:</strong> Designing and managing databases to store and organize data efficiently, supporting the application's requirements.</li><li><strong>APIs and Integrations:</strong> Creating and integrating Application Programming Interfaces (APIs) to facilitate communication between different software systems and services.</li>",
  },
  {
    title: "Digital Marketing",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    desp: "<li><strong>Targeted Campaigns:</strong> Strategically planning and executing digital campaigns to reach specific audiences and achieve marketing goals.</li><li><strong>SEO and SEM:</strong> Optimizing online content to improve search engine visibility and managing paid advertising campaigns for increased online presence.</li><li><strong>Analytics and Insights:</strong> Utilizing data analytics tools to track and measure the performance of digital marketing efforts and refine strategies accordingly.</li>",
  },
  {
    title: "Content Creation",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    desp: "<li><strong>Creative Writing:</strong> Developing engaging and compelling written content for various platforms, ensuring a consistent brand voice.</li><li><strong>Visual Content:</strong> Creating visually appealing graphics, images, and videos to enhance the overall storytelling and user experience.</li><li><strong>Content Strategy:</strong> Planning and implementing content strategies that align with business goals, target audiences, and current market trends.</li>",
  },
  {
    title: "E-commerce Solutions",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    desp: "<li><strong>Online Store Development:</strong> Building and customizing e-commerce platforms to provide seamless and secure online shopping experiences.</li><li><strong>Payment Gateway Integration:</strong> Integrating secure payment options to facilitate smooth and reliable online transactions for customers.</li><li><strong>Inventory Management:</strong> Implementing efficient systems to manage product listings, inventory levels, and order fulfillment processes.</li>",
  },
  {
    title: "Database Management",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    desp: "<li><strong>Database Design:</strong> Planning and creating efficient database structures to store and organize data in a scalable and secure manner.</li><li><strong>Data Security:</strong> Implementing measures to ensure the confidentiality, integrity, and availability of data through encryption and access controls.</li><li><strong>Performance Optimization:</strong> Fine-tuning and optimizing database queries and configurations to enhance overall system performance.</li>",
  },
  {
    title: "Social Media Management",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    desp: "<li><strong>Content Planning:</strong> Developing and scheduling content calendars to maintain a consistent and engaging social media presence.</li><li><strong>Community Engagement:</strong> Interacting with the audience, responding to comments, and fostering a sense of community on social media platforms.</li><li><strong>Analytics and Reporting:</strong> Monitoring social media metrics, analyzing performance, and providing insights to improve future strategies.</li>",
  },
  {
    title: "Training and Workshops",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    desp: "<li><strong>Customized Programs:</strong> Tailoring training sessions to meet specific organizational needs and goals, providing targeted learning experiences.</li><li><strong>Interactive Workshops:</strong> Creating engaging and hands-on workshop environments to foster active participation and knowledge retention.</li><li><strong>Professional Development:</strong> Offering training modules that contribute to the continuous improvement and skill development of individuals and teams.</li>",
  },
  {
    title: "Logo Design",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    desp: "<li><strong>Brand Identity:</strong> Crafting unique and memorable logos that represent the essence and values of a brand.</li><li><strong>Visual Storytelling:</strong> Designing logos that communicate a brand's story and resonate with its target audience.</li><li><strong>Versatility:</strong> Ensuring logos are scalable, recognizable, and effective across various mediums and applications.</li>",
  },
  {
    title: "Poster Designing",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    desp: "<li><strong>Visual Impact:</strong> Creating eye-catching and compelling posters that effectively communicate key messages and information.</li><li><strong>Typography and Layout:</strong> Implementing thoughtful typography and layout designs to enhance the overall readability and aesthetics of posters.</li><li><strong>Branding Consistency:</strong> Aligning poster designs with existing brand elements to maintain a cohesive visual identity.</li>",
  },
  {
    title: "UI/UX (User Interface/User Experience)",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    desp: "<li><strong>User-Centric Design:</strong> Prioritizing the needs and preferences of users to create intuitive and enjoyable digital experiences.</li><li><strong>Wireframing and Prototyping:</strong> Building visual prototypes and wireframes to test and refine the user interface before development.</li><li><strong>Usability Testing:</strong> Conducting thorough testing to ensure interfaces are user-friendly, efficient, and meet accessibility standards.</li>",
  },
  {
    title: "Graphic Design",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    desp: "<li><strong>Visual Branding:</strong> Developing cohesive visual elements, including color schemes, typography, and imagery, to establish a strong brand identity.</li><li><strong>Print and Digital Media:</strong> Creating graphics for both online and offline platforms, ensuring consistency across various mediums.</li><li><strong>Creative Problem Solving:</strong> Applying design thinking to solve communication challenges and convey messages effectively through visual elements.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Kuriyeedu.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://elevatetech.codes/",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
    href: "https://hackasolution.devpost.com/",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
    href: "https://uniglobe-hacks.devpost.com/",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
    href: "https://atlashacks2.devpost.com/",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
    href: "https://neohacks.org/",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
    href: "https://www.missioninspired.org/hackathon",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
    href: "https://hack3.co/",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
    href: "https://jithack.netlify.app/",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
    href: "https://recesshacks.com/",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
    href: "https://citro.tech/",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
    href: "https://nhacks-vi.devpost.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
