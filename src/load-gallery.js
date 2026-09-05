import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

/** @type {PhotoSwipeLightbox | undefined} */
let lightbox;

function createLightbox() {
  const instance = new PhotoSwipeLightbox({
    gallery: "#my-gallery",
    children: "a",
    pswpModule: () => import("photoswipe"),
  });

  instance.on("uiRegister", function () {
    instance.pswp.ui.registerElement({
      name: "download-button",
      order: 8,
      isButton: true,
      tagName: "a",

      // SVG with outline
      html: {
        isCustomSVG: true,
        inner:
          '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
        outlineID: "pswp__icn-download",
      },

      onInit: (el, pswp) => {
        el.setAttribute("download", "");
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");

        pswp.on("change", () => {
          el.href = pswp.currSlide.data.src;
        });
      },
    });
  });

  return instance;
}

function initGallery() {
  if (lightbox) {
    lightbox.destroy();
    lightbox = undefined;
  }

  // About (and other non-gallery pages) have no gallery element.
  if (!document.querySelector("#my-gallery")) {
    return;
  }

  lightbox = createLightbox();
  lightbox.init();
}

// astro:page-load runs on first load and after ClientRouter navigations.
document.addEventListener("astro:page-load", initGallery);
