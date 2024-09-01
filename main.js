const courses = [
  {
    url: "15days.html",
    title: "15 Weeks Self Improvement and Good Trading Habits Program",
    thumbnail: "images/course1.png",
    category: "Course",
    description: "How to become discipline trader",
    price: "---",
    isFree:true,
  },

  {
    url: "#",
    title: "Reversal Trading with Time Formula and Math Calculation Course",
    category: "Course",
    thumbnail: "images/course2.png",
    description:
      "Learn Reversal Trading Strategy.",
    price: "coming soon",
    isLocked: true, 
  },


  {
    url: "#",
    title: "Swing Trading with Maths Calculation Course",
    category: "Course",
    thumbnail: "images/course3.png",
    description: "Learn Swing Trading Strategy.",
    price: "coming soon",
    isLocked: true, 
  },

 
  {
    url: "#",
    title: "Equity Course (How to pick Jackpot Stocks)",
    category: "Course",
    thumbnail: "images/course4.png",
    description: "Learn about Stocks",
    price: "coming soon",
    isLocked: true, 
  },
];

const coursesContainer = document.querySelector(".courses-container");

const displayCourse = (
  urlValue,
  titleValue,
  categoryValue,
  thumbnailValue,
  descriptionValue,
  priceValue,
  isFree,
  isLocked
) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const a = document.createElement("a");
  a.setAttribute("href", isLocked ? "#" : urlValue); // Disable link if locked
  a.classList.add(isLocked ? "locked" : "active");

  const category = document.createElement("div");
  category.classList.add("category");
  category.innerHTML = categoryValue;

  const img = document.createElement("img");
  img.setAttribute("src", thumbnailValue);

  const title = document.createElement("h2");
  title.classList.add("title");
  title.innerHTML = titleValue;

  const description = document.createElement("div");
  description.classList.add("description");
  description.innerHTML = descriptionValue;

  const info = document.createElement("div");
  info.classList.add("info");

  const price = document.createElement("div");
  price.classList.add("price");

  // Conditionally set price based on isFree flag
  if (isFree) {
    price.innerHTML = `<span style="text-decoration: line-through;">₹${priceValue}</span> Free`;
  } else {
    price.innerHTML = `₹${priceValue}`;
  }

  // Add lock overlay if course is locked
  if (isLocked) {
    const lockOverlay = document.createElement("div");
    lockOverlay.classList.add("lock-overlay");
    lockOverlay.innerHTML = `
      <div class="lock-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v3m-6 0v-3a4 4 0 014-4h4a4 4 0 014 4v3m0-9V7a4 4 0 00-8 0v2" />
        </svg>
      </div>
      <div class="lock-text">Locked</div>
    `;
    card.appendChild(lockOverlay); // Add overlay to the card
  }

  // Appending Elements
  coursesContainer.appendChild(card);
  card.appendChild(a);
  a.appendChild(category);
  a.appendChild(img);
  a.appendChild(title);
  a.appendChild(description);
  a.appendChild(info);

  info.appendChild(price);
};

const generateCourseData = () => {
  courses.forEach((c) => {
    displayCourse(
      c.url,
      c.title,
      c.category,
      c.thumbnail,
      c.description,
      c.price,
      c.isFree || false, // Pass the isFree flag or default to false
      c.isLocked || false // Pass the isLocked flag or default to false
    );
  });
};

generateCourseData();
