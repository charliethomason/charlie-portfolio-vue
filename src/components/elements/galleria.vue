<template>
  <div class="galleria">
    <div v-for="(row, r) in imagesInRows" :key="`row-${r}`" class="galleria__row" ref="row">
      <button
        type="button"
        v-for="(img, i) in row" :key="`row-${r}-img-${i}`"
        class="galleria__img"
        :style="getStyle(row, img)"
        :data-large="require('../../img/'+meta.id+'/collection/'+name+'/'+img.file+'.jpg')"
        :data-alt="img.title"
        :ref="`galleriaImg-${img.file}`"
        @click.stop.prevent="e => imgClick(e, img)"
      >
        <div class="galleria__img__text" aria-hidden="true">
          <div class="galleria__img__title">{{ img.title }}</div>
        </div>
        <div class="galleria__loader" />
      </button>
    </div>
    <div v-if="lightImg && lightImg.file" class="galleria__lightbox" @click.stop.prevent="closeLightbox">
      <img
        :src="require('../../img/'+meta.id+'/collection/'+name+'/'+lightImg.file+'.jpg')"
        :alt="lightImg.file"
        class="galleria__lightbox__img"
      />
      <div class="galleria__lightbox__caption">
        <button
          type="button"
          class="galleria__lightbox__nav galleria__lightbox__nav--prev"
          title="Previous"
          @click.stop.prevent="() => lightboxNav(-1)"
        >
          <span class="sr-text">Previous</span>
          <ArrowIcon class="galleria__lightbox__icon--prev" />
        </button>
        <div v-if="lightImg.title" class="galleria__lightbox__title">
          {{ lightImg.title }}
          <div class="galleria__lightbox__info">{{ lightImg.medium }} - {{ lightImg.year }}</div>
        </div>
        <button
          type="button"
          class="galleria__lightbox__nav galleria__lightbox__nav--next"
          title="Next"
          @click.stop.prevent="() => lightboxNav(1)"
        >
          <span class="sr-text">Next</span>
          <ArrowIcon class="galleria__lightbox__icon--next" />
        </button>
      </div>
      <button
        type="button"
        class="galleria__lightbox__close"
        ref="closeBtn"
        @click.stop.prevent="closeLightbox"
      >
        Close <span class="sr-text">lightbox</span>
      </button>
    </div>
  </div>
</template>

<script>
import ArrowIcon from "../../img/svg-icons/arrow.vue";
export default {
  name: "Galleria",
  components: {
    ArrowIcon
  },
  props: {
    name: {
      type: String
    },
    images: {
      type: Array
    }
  },
  data() {
    return {
      imagesInRows: [],
      actualRowWidth: 0,
      imgHeight: 600,
      maxRowWidth: {
        large: 2400,
        small: 1800
      },
      breakpoints: {
        full: 2400,
        jumbo: 2000,
        xlarge: 1400,
        large: 1000,
        medium: 600,
        small: 450
      },
      windowWidth: 0,
      lightImg: null
    };
  },
  computed: {
    meta() {
      return this.$route.meta;
    }
  },
  methods: {
    putPhotosInRows() {
      const { small, medium } = this.breakpoints;
      if (!this.images || !this.images.length) {
        return null;
      }
      this.imagesInRows = this.windowWidth <= small
        ? [this.images]
        : this.images.reduce((rows, img) => {
          // if we have no rows created yet, create a row with this 1st image
          if (!rows.length) {
            rows.push([img]);
            return rows;
          } else {
            // loop through all the rows we have created so far
            for (const [i, row] of rows.entries()) {
              const currentRowWidth = this.getTotalWidth(row);
              const maxRowWidth = this.windowWidth <= medium
                ? this.maxRowWidth.small
                : this.maxRowWidth.large;
              const isLastRow = i === rows.length-1;
              // "If the currrent total width of the images in this row is
              // greater than/equal to the max width allowed for a single row."
              // If the image heights are 600px then the max possible row width is 2400px.
              // 2400 / 600 = 4, thus a 4:1 min aspect ratio for each row.
              if (currentRowWidth >= maxRowWidth) {
                // if this is the last row and it's already full, create a new one with this image.
                // otherwise continue on to check the next row.
                if (isLastRow) {
                  rows.push([img]);
                  break;
                } else {
                  continue;
                }
              // if there is still space in this row, add this image.
              } else {
                row.push(img);
                break;
              }
            }
            return rows;
          }
        }, []);
    },
    loadImages() {
      if (!this.$refs.row || !this.$refs.row.length){
        return null;
      }
      this.$refs.row.forEach(row => {
        if (row.childNodes && row.childNodes.length) {
          for (const btn of row.childNodes) {
            if (btn.classList && btn.classList.contains("galleria__img")) {
              const loader = btn.children[1];
              const imgSrc = btn.dataset.large;

              if (btn.querySelector(".galleria__large")) {
                btn.querySelector(".galleria__large").src = imgSrc;
              } else {
                let imgLarge = new Image();
                imgLarge.src = imgSrc;
                imgLarge.alt = btn.dataset.alt;
                imgLarge.onload = () => {
                  // give the link a class of "ready"
                  // to indicate lightbox clicks can now happen
                  btn.classList.add("ready");
                  imgLarge.classList.add("galleria__large","loaded");
                  loader.classList.add("large-loaded");
                };
                btn.appendChild(imgLarge);
              }
            }
          }
        }
      });
    },
    getTotalWidth(row) {
      return row.reduce((sum, r) => {
        return sum + r.width;
      }, 0);
    },
    formatNumber(num) {
      // firefox sometimes rounds numbers up which breaks the layout
      const flooredNum = Math.floor(num * 10) / 10;
      return `${flooredNum}px`;
    },
    getStyle(row, img) {
      if (this.windowWidth <= this.breakpoints.small) {
        return {
          height: "auto",
          width: "auto"
        };
      }
      const onlyOneInRow = row.length === 1;
      const totalWidth = this.getTotalWidth(row);
      // actual displayed row width, divided by the aspect ratio of the row.
      // e.g.: 1000 / (2400 / 600 = 4) = 250
      const calculatedRowHeight = this.actualRowWidth / (totalWidth / this.imgHeight);
      const rowHeight = onlyOneInRow && img.width <= this.actualRowWidth
        ? this.imgHeight
        : calculatedRowHeight < this.imgHeight
          ? calculatedRowHeight
          : this.imgHeight; // img height should never be greater than imgHeight
      // reduce the image width by the same amount the image height was reduced
      const imgWidth = onlyOneInRow && img.width <= this.actualRowWidth
        ? img.width
        : img.width / (this.imgHeight / rowHeight);
      return {
        height: this.formatNumber(rowHeight),
        width: this.formatNumber(imgWidth)
      };
    },
    setGalleriaWidth() {
      const {
        small,
        medium,
        large,
        xlarge,
        jumbo,
        full
      } = this.breakpoints;
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > full) {
        this.actualRowWidth = full;
      } else if (this.windowWidth > jumbo && this.windowWidth <= full) {
        this.actualRowWidth = jumbo;
      } else if (this.windowWidth > xlarge && this.windowWidth <= jumbo) {
        this.actualRowWidth = xlarge;
      } else if (this.windowWidth > large && this.windowWidth <= xlarge) {
        this.actualRowWidth = large;
      } else if (this.windowWidth > medium && this.windowWidth <= large) {
        this.actualRowWidth = medium;
      } else if (this.windowWidth > small && this.windowWidth <= medium) {
        this.actualRowWidth = small;
      } else if (this.windowWidth <= small) {
        this.actualRowWidth = null;
      }
    },
    async onResize() {
      const startRowWidth = this.actualRowWidth;
      await this.setGalleriaWidth();
      await this.putPhotosInRows();
      if (startRowWidth !== this.actualRowWidth) {
        this.loadImages();
      }
    },
    lightboxNav(change) {
      const currentIndex = this.images.findIndex(img => img.file === this.lightImg.file);
      const lastImgIndex = this.images.length - 1;
      // if it's the first photo and they clicked previous
      if (currentIndex === 0 && change === -1) {
        this.lightImg = this.images[lastImgIndex];
      // if it's the last photo and they clicked next
      } else if (currentIndex === lastImgIndex && change === 1) {
        this.lightImg = this.images[0];
      } else {
        this.lightImg = this.images[currentIndex + change];
      }
    },
    closeLightbox() {
      const currLightId = this.lightImg.file;
      this.lightImg = null;
      this.$nextTick(function() {
        this.$refs[`galleriaImg-${currLightId}`][0].focus();
      });
    },
    imgClick(e, img) {
      // don't let lightbox happen before images have loaded
      if (e.target.classList.contains("ready")) {
        if (!this.lightImg || this.lightImg.file !== img.file) {
          this.lightImg = img;
          this.$nextTick(function() {
            this.$refs.closeBtn.focus();
          });
        } else {
          this.closeLightbox();
        }
      }
    }
  },
  async mounted() {
    let timeoutId;
    window.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        this.closeLightbox();
      } else if (e.key === "ArrowLeft" && !!this.lightImg) {
        this.lightboxNav(-1);
      } else if (e.key === "ArrowRight" && !!this.lightImg) {
        this.lightboxNav(1);
      }
    });
    window.addEventListener("resize", () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(this.onResize, 500);
    });
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
}
</script>
