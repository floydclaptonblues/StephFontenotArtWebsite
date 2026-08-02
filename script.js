const galleryItems = [
  { src: "IMG_1443.jpg", label: "Napoleon under a crescent moon", category: "louisiana", alt: "Painting of Napoleon beneath a crescent moon beside a New Orleans streetlamp" },
  { src: "ArtGalleryUploadPhotos/20250628_182302.JPG", label: "Stone bridge and cypress", category: "louisiana", alt: "Painting of a stone bridge, cypress trees, water, and birds" },
  { src: "ArtGalleryUploadPhotos/FullSizeR.jpg", label: "Ornate café interior", category: "louisiana", alt: "Painting of an ornate café interior with a domed architectural feature" },
  { src: "ArtGalleryUploadPhotos/IMG_1625.jpg", label: "Rose-sky skyline", category: "louisiana", alt: "Colorful painting of New Orleans church towers against a rose and blue sky" },
  { src: "ArtGalleryUploadPhotos/IMG_1626.jpg", label: "Cathedral silhouette", category: "louisiana", alt: "Painting of cathedral spires and rooftops against a vivid pink and yellow sky" },
  { src: "ArtGalleryUploadPhotos/IMG_1627.jpg", label: "Beaded fleur-de-lis", category: "louisiana", alt: "Blue fleur-de-lis painting outlined with colorful bead-like dots" },
  { src: "rs=w_1160,h_844.webp", label: "Bayou tavern scene", category: "louisiana", alt: "Painted bayou tavern scene with a jester, raccoon, opossum, alligator, and slot machine" },
  { src: "ArtGalleryUploadPhotos/IMG_2324.jpg", label: "Cemetery moon", category: "louisiana", alt: "Painting of a New Orleans cemetery beneath a full yellow moon" },
  { src: "IMG_1461.jpg", label: "Oyster moon and lantern", category: "louisiana", alt: "Mixed-media painting with an oyster shell moon, streetlamp silhouette, and fleur-de-lis" },

  { src: "IMG_1435.jpg", label: "Man Fishing on Cliff at Shining Dawn", category: "coastal", alt: "Painting of figures fishing from a cliff beneath a radiant dawn" },
  { src: "ArtGalleryUploadPhotos/FullSizeR%20(2).jpg", label: "Moonlit cat", category: "coastal", alt: "Silhouette of a cat looking toward a large yellow moon over water" },
  { src: "IMG_1441.jpg", label: "Mahi-mahi", category: "coastal", alt: "Colorful painting of a mahi-mahi fish in blue water" },
  { src: "IMG_1445.jpg", label: "King of the sea", category: "coastal", alt: "Graphic painting of a crowned sea king holding a trident" },
  { src: "IMG_1446.jpg", label: "Sailfish at sunset", category: "coastal", alt: "Sailfish riding stylized blue waves beneath a pink sunset" },
  { src: "ArtGalleryUploadPhotos/IMG_3997.jpg", label: "Crab and oysters", category: "coastal", alt: "Whimsical painting of a blue crab and oyster shells" },
  { src: "IMG_1459.jpg", label: "Lavender oyster jellyfish", category: "coastal", alt: "Vertical mixed-media oyster-shell jellyfish composition on lavender" },

  { src: "IMG_1437.jpg", label: "Garden roses", category: "abstract", alt: "Bright bouquet of multicolored roses painted on canvas" },
  { src: "IMG_1451.jpg", label: "Painted hand", category: "abstract", alt: "Colorful symbolic hand painted against a golden background" },
  { src: "IMG_1462.jpg", label: "Tide-pool circles", category: "abstract", alt: "Abstract pattern of layered blue, green, gold, and white circles" },
  { src: "ArtGalleryUploadPhotos/IMG_1624.jpg", label: "Eye of the storm", category: "abstract", alt: "Circular white and blue abstract composition with a small central form" },
  { src: "IMG_1434.jpg", label: "Sleeping figure", category: "abstract", alt: "Narrative painting of a sleeping figure framed by theatrical red curtains" },
  { src: "ArtGalleryUploadPhotos/IMG_7840%201.jpg", label: "Figure in the sun", category: "abstract", alt: "Expressive figure standing beneath a radiant golden sun" },

  { src: "ArtGalleryUploadPhotos/IMG_9790.jpg", label: "Forest Through the Wall — room view", category: "murals", alt: "Forest Through the Wall mural wrapping around a room corner" },
  { src: "ArtGalleryUploadPhotos/IMG_9792.jpg", label: "Forest Through the Wall — wide view", category: "murals", alt: "Wide view of the completed Forest Through the Wall mural" },
  { src: "ArtGalleryUploadPhotos/IMG_9784.jpg", label: "Forest Through the Wall — detail", category: "murals", alt: "Close detail of trees and foliage in the Forest Through the Wall mural" }
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
