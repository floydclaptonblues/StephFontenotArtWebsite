const galleryItems = [
  { src: "assets/art/napoleon-new-orleans.webp", label: "Napoleon under a crescent moon", category: "louisiana", alt: "Painting of Napoleon under a crescent moon beside a New Orleans streetlamp" },
  { src: "assets/art/stone-bridge.webp", label: "Stone bridge and cypress", category: "louisiana", alt: "Painting of a stone bridge, cypress trees, water, and birds" },
  { src: "assets/art/ornate-cafe.webp", label: "Ornate café interior", category: "louisiana", alt: "Painting of an ornate café interior with a domed architectural feature" },
  { src: "assets/art/rose-skyline.webp", label: "Rose-sky skyline", category: "louisiana", alt: "Colorful painting of New Orleans church towers against a rose and blue sky" },
  { src: "assets/art/cathedral-silhouette.webp", label: "Cathedral silhouette", category: "louisiana", alt: "Painting of cathedral spires and rooftops against a vivid pink and yellow sky" },
  { src: "assets/art/fleur-de-lis.webp", label: "Beaded fleur-de-lis", category: "louisiana", alt: "Blue fleur-de-lis painting outlined with colorful bead-like dots" },
  { src: "assets/art/quiet-window.webp", label: "Quiet window", category: "louisiana", alt: "Small framed painting of a solitary figure beside a window" },
  { src: "assets/art/cemetery-moon.webp", label: "Cemetery moon", category: "louisiana", alt: "Painting of a New Orleans cemetery beneath a full yellow moon" },
  { src: "assets/art/oyster-moon-lantern.webp", label: "Oyster moon and lantern", category: "louisiana", alt: "Mixed-media painting with an oyster shell moon, streetlamp silhouette, and fleur-de-lis" },

  { src: "assets/art/man-fishing-shining-dawn.webp", label: "Man Fishing on Cliff at Shining Dawn", category: "coastal", alt: "Painting of figures fishing from a cliff beneath a radiant dawn" },
  { src: "assets/art/moon-cat.webp", label: "Moonlit cat", category: "coastal", alt: "Silhouette of a cat looking toward a large yellow moon over water" },
  { src: "assets/art/mahi-mahi.webp", label: "Mahi-mahi", category: "coastal", alt: "Colorful painting of a mahi-mahi fish in blue water" },
  { src: "assets/art/yellowfin-tuna.webp", label: "Yellowfin tuna", category: "coastal", alt: "Painting of a yellowfin tuna swimming through streaked blue water" },
  { src: "assets/art/red-octopus.webp", label: "Red octopus", category: "coastal", alt: "Bold red-orange octopus painted against a deep blue background" },
  { src: "assets/art/king-of-the-sea.webp", label: "King of the sea", category: "coastal", alt: "Graphic painting of a crowned sea king holding a trident" },
  { src: "assets/art/sailfish-sunset.webp", label: "Sailfish at sunset", category: "coastal", alt: "Sailfish riding stylized blue waves beneath a pink sunset" },
  { src: "assets/art/crab-and-oysters.webp", label: "Crab and oysters", category: "coastal", alt: "Whimsical painting of a blue crab and oyster shells" },
  { src: "assets/art/oyster-jellyfish-wall-hanging.webp", label: "Oyster jellyfish wall piece", category: "coastal", alt: "Blue mixed-media wall hanging with oyster-shell jellyfish" },
  { src: "assets/art/oyster-jellyfish-violet.webp", label: "Violet oyster jellyfish", category: "coastal", alt: "Mixed-media oyster-shell jellyfish on a violet background" },
  { src: "assets/art/oyster-jellyfish-wood.webp", label: "Oyster jellyfish on wood", category: "coastal", alt: "Mixed-media oyster-shell jellyfish arranged on dark wood" },
  { src: "assets/art/oyster-jellyfish-aqua.webp", label: "Aqua oyster jellyfish", category: "coastal", alt: "Mixed-media oyster-shell jellyfish on an aqua blue background" },
  { src: "assets/art/oyster-jellyfish-tall.webp", label: "Tall violet oyster jellyfish", category: "coastal", alt: "Vertical mixed-media oyster-shell jellyfish composition on violet" },
  { src: "assets/art/oyster-jellyfish-cobalt.webp", label: "Cobalt oyster jellyfish", category: "coastal", alt: "Mixed-media oyster-shell jellyfish on a cobalt blue background" },
  { src: "assets/art/oyster-jellyfish-lavender.webp", label: "Lavender oyster jellyfish", category: "coastal", alt: "Vertical mixed-media oyster-shell jellyfish composition on lavender" },

  { src: "assets/art/peacock-keyhole.webp", label: "Peacock keyhole", category: "abstract", alt: "Abstract peacock-feather composition surrounding an ornate keyhole form" },
  { src: "assets/art/garden-roses.webp", label: "Garden roses", category: "abstract", alt: "Bright bouquet of multicolored roses painted on canvas" },
  { src: "assets/art/crimson-rose.webp", label: "Crimson rose", category: "abstract", alt: "Large crimson rose with green ornamental vines" },
  { src: "assets/art/golden-rose.webp", label: "Golden rose", category: "abstract", alt: "Outlined rose painted in gold and red textured layers" },
  { src: "assets/art/painted-hand.webp", label: "Painted hand", category: "abstract", alt: "Colorful symbolic hand painted against a golden background" },
  { src: "assets/art/tide-pool-circles.webp", label: "Tide-pool circles", category: "abstract", alt: "Abstract pattern of layered blue, green, gold, and white circles" },
  { src: "assets/art/eye-of-the-storm.webp", label: "Eye of the storm", category: "abstract", alt: "Circular white and blue abstract composition with a small central form" },
  { src: "assets/art/sleeping-figure.webp", label: "Sleeping figure", category: "abstract", alt: "Narrative painting of a sleeping figure framed by theatrical red curtains" },
  { src: "assets/art/figure-in-sun.webp", label: "Figure in the sun", category: "abstract", alt: "Expressive figure standing beneath a radiant golden sun" },

  { src: "assets/art/forest-through-wall-room.webp", label: "Forest Through the Wall — room view", category: "murals", alt: "Forest Through the Wall mural wrapping around a room corner" },
  { src: "assets/art/forest-through-wall-wide.webp", label: "Forest Through the Wall — wide view", category: "murals", alt: "Wide view of the completed Forest Through the Wall mural" },
  { src: "assets/art/forest-through-wall-detail.webp", label: "Forest Through the Wall — detail", category: "murals", alt: "Close detail of trees and foliage in the Forest Through the Wall mural" }
];

const categoryLabels = {
  louisiana: "Louisiana",
  coastal: "Coast & wildlife",
  abstract: "Abstract & botanical",
  murals: "Murals"
};

const galleryGrid = document.querySelector("#gallery-grid");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
let visibleItems = [...galleryItems];
let currentIndex = 0;

function makeGalleryCard(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "gallery-card";
  button.dataset.category = item.category;
  button.dataset.src = item.src;
  button.dataset.alt = item.alt;
  button.dataset.label = item.label;
  button.setAttribute("aria-label", `View ${item.label}`);

  const image = document.createElement("img");
  image.src = item.src;
  image.alt = item.alt;
  image.loading = "lazy";
  image.decoding = "async";

  const caption = document.createElement("span");
  caption.className = "gallery-caption";
  caption.innerHTML = `<strong>${item.label}</strong><span>${categoryLabels[item.category]}</span>`;

  button.append(image, caption);
  button.addEventListener("click", () => openLightbox(item));
  return button;
}

galleryItems.forEach((item) => galleryGrid.appendChild(makeGalleryCard(item)));

function openLightbox(item) {
  visibleItems = galleryItems.filter((candidate) => {
    const card = galleryGrid.querySelector(`[data-src="${candidate.src}"]`);
    return card && !card.hidden;
  });
  currentIndex = Math.max(0, visibleItems.findIndex((candidate) => candidate.src === item.src));
  renderLightbox();
  if (!lightbox.open) lightbox.showModal();
}

function renderLightbox() {
  const item = visibleItems[currentIndex];
  if (!item) return;
  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxCaption.textContent = item.label;
}

function moveLightbox(direction) {
  if (!visibleItems.length) return;
  currentIndex = (currentIndex + direction + visibleItems.length) % visibleItems.length;
  renderLightbox();
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("active", active);
      candidate.setAttribute("aria-pressed", String(active));
    });

    galleryGrid.querySelectorAll(".gallery-card").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

document.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
document.querySelector(".lightbox-prev").addEventListener("click", () => moveLightbox(-1));
document.querySelector(".lightbox-next").addEventListener("click", () => moveLightbox(1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

window.addEventListener("keydown", (event) => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") moveLightbox(-1);
  if (event.key === "ArrowRight") moveLightbox(1);
});

document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = {
      src: button.dataset.lightboxSrc,
      alt: button.dataset.lightboxAlt,
      label: "Forest Through the Wall"
    };
    visibleItems = [item];
    currentIndex = 0;
    renderLightbox();
    lightbox.showModal();
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
menuToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
