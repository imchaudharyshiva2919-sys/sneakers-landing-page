// Velora — Responsive Search
// Paste this entire <script> block just before </body> in index.html

const searchBox   = document.querySelector('.search-box');
const searchIcon  = document.querySelector('.search-box i');
const searchInput = document.querySelector('.search-box input');

// The breakpoint where the input gets hidden (must match CSS media query)
const MOBILE_BREAKPOINT = 650;

function isSmallScreen() {
  return window.innerWidth <= MOBILE_BREAKPOINT;
}

function openSearch() {
  searchBox.classList.add('open');
  searchInput.focus();
}

function closeSearch() {
  searchBox.classList.remove('open');
  searchInput.blur();
}

searchIcon.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent bubbling to document listener

  if (isSmallScreen()) {
    // Small screen: toggle the floating search box
    if (searchBox.classList.contains('open')) {
      closeSearch();
    } else {
      openSearch();
    }
  } else {
    // Large screen: search bar is always visible — just focus the input
    searchInput.focus();
  }
});

// Close when clicking anywhere outside the search box
document.addEventListener('click', (e) => {
  if (!searchBox.contains(e.target)) {
    closeSearch();
  }
});

// Close on Enter (after user finishes typing)
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    // TODO: wire up actual search logic here if needed
    closeSearch();
  }
});

// If user resizes from small → large while open, clean up the open state
window.addEventListener('resize', () => {
  if (!isSmallScreen() && searchBox.classList.contains('open')) {
    closeSearch();
  }
});

function scaleFeatured() {
  const scaler = document.querySelector('.featured-scaler');
  const product = document.querySelector('.featured-product');
  const scale = window.innerWidth / 1200;
  scaler.style.transform = `scale(${scale})`;
  scaler.style.transformOrigin = 'top left';
  product.style.height = (900 * scale) + 'px';
}

scaleFeatured();
window.addEventListener('resize', scaleFeatured);

//============= Featured Section =============//

// const shoes = [
//     {
//         name: "Velocity Rise 01",
//         price: "₹6,999",
//         mainImage: "images/shoe1-main.png",
//     },

// ]


//======================== Slider =====================//
const shoes = [
{
    name:"Velocity Rise 01",
    price:"₹6,999",
    mainImage:"images/VELORA Nova.png",
    thumbnails:[
        "images/VELORA Nova(1).png",
        "images/VELORA Nova(2).png",
        "images/VELORA Nova(3).png"
    ],
    color: "#000000"
},
{
    name:"Velocity Rise 02",
    price:"₹7,499",
    mainImage:"images/VELORA Eclipse.png",
    thumbnails:[
        "images/VELORA Eclipse(1).png",
        "images/VELORA Eclipse(2).png",
        "images/VELORA Eclipse(3).png"
    ],
    color: "#c072c4"
},
{
    name:"Velocity Rise 03",
    price:"₹8,299",
    mainImage:"images/VELORA Horizon.png",
    thumbnails:[
        "images/VELORA Horizon(1).png",
        "images/VELORA Horizon(2).png",
        "images/VELORA Horizon(3).png"
    ],
    color: "#01255b"
},
{
    name:"Velocity Rise 04",
    price:"₹8,999",
    mainImage:"images/VELORA Zenith.png",
    thumbnails:[
        "images/VELORA Zenith(1).png",
        "images/VELORA Zenith(2).png",
        "images/VELORA Zenith(3).png"
    ],
    color: "#daaa63"
}
];
let activeThumb;
const shoeName = document.getElementById("shoeName");
const price = document.getElementById("price");
const mainImage = document.getElementById("mainImage");

const thumb1 = document.getElementById("thumb1");
const thumb2 = document.getElementById("thumb2");
const thumb3 = document.getElementById("thumb3");
const center = document.querySelector(".center");
const sizes = document.querySelectorAll(".sizeChart");

const previewContainer = document.getElementById("previewContainer");

// Show the 4th shoe by default
let currentIndex = 3;

function renderPage() {

    const shoe = shoes[currentIndex];
    center.style.background = shoe.color
    shoeName.textContent = shoe.name;
    price.textContent = shoe.price;
    mainImage.src = shoe.mainImage;

    thumb1.src = shoe.thumbnails[0];
    thumb2.src = shoe.thumbnails[1];
    thumb3.src = shoe.thumbnails[2];

    previewContainer.innerHTML = "";

    shoes.forEach((shoe, index) => {

        if(index !== currentIndex){

            const img = document.createElement("img");

            img.src = shoe.mainImage;
            img.className = "preview";

            img.addEventListener("click", function(){

                currentIndex = index;
                renderPage();

            });

            previewContainer.appendChild(img);

        }

    });
    activeThumb = null

}

renderPage();

  // Thumb 1
  thumb1.addEventListener("click", function () {
      const shoe = shoes[currentIndex];
      thumb2.src = shoe.thumbnails[1];
      thumb3.src = shoe.thumbnails[2];
      let temp = shoe.thumbnails[0];
      let temp2 = shoe.mainImage;



      if(activeThumb != 1){
  
      thumb1.src = shoe.mainImage;

      mainImage.src = temp;

      activeThumb = 1

      } else {
        activeThumb = null

        thumb1.src = shoe.thumbnails[0]

        mainImage.src = temp2
      }
  });

  // Thumb 2
  thumb2.addEventListener("click", function () {
      const shoe = shoes[currentIndex];
      thumb1.src = shoe.thumbnails[0];
      thumb3.src = shoe.thumbnails[2];
      let temp = shoe.thumbnails[1];
      let temp2 = shoe.mainImage

      if(activeThumb != 2){
  
      thumb2.src = shoe.mainImage;

      mainImage.src = temp;

      activeThumb = 2

      } else {
        activeThumb = null

        thumb2.src = shoe.thumbnails[1]

        mainImage.src = temp2
      }
  });

  // Thumb 3
  thumb3.addEventListener("click", function () {
      const shoe = shoes[currentIndex];
      thumb2.src = shoe.thumbnails[1];
      thumb1.src = shoe.thumbnails[0];
      let temp = shoe.thumbnails[2];
      let temp2 = shoe.mainImage

      if(activeThumb != 3){
  
      thumb3.src = shoe.mainImage;

      mainImage.src = temp;

      activeThumb = 3

      } else {
        activeThumb = null

        thumb3.src = shoe.thumbnails[2]

        mainImage.src = temp2
      }
  });

//========= size selector ============//
  sizes.forEach((size) => {
    size.addEventListener("click", function(){

        sizes.forEach((item) => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});