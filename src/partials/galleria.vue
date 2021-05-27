<template>
  <div class="galleria">
    <div v-for="(row, r) in photosInRows" :key="`row-${r}`" class="galleria-row" ref="row">
      <a
        v-for="(img, i) in row" :key="`row-${r}-img-${i}`"
        href="#"
        class="galleria-img"
        :title="img.title"
        :style="getStyle(row, img)"
        :data-large="`../img/art/books/${bookName}/${img.file}.jpg`"
        @click.stop.prevent="e => imgClick(e, img)"
      >
        <img
          :src="require('../img/art/books/'+bookName+'/thumbs/'+img.file+'.jpg')"
          :alt="img.title || img.file"
          class="galleria-small"
        />
      </a>
    </div>
    <div v-if="lightImg && lightImg.file" class="galleria__lightbox" @click.stop.prevent="closeLightbox">
      <img
        :src="require('../img/art/books/'+bookName+'/'+lightImg.file+'.jpg')"
        :alt="lightImg.file"
        class="galleria__lightbox__img"
      />
      <div v-if="lightImg.title" class="galleria__lightbox__title">{{ lightImg.title }}</div>
      <button
        type="button"
        class="galleria__lightbox__nav"
        title="Previous"
        @click.stop.prevent="() => lightboxNav(-1)"
      >
        <span class="sr-text">Previous</span>
        <ArrowIcon class="galleria__lightbox__icon--prev" />
      </button>
      <button
        type="button"
        class="galleria__lightbox__nav"
        title="Next"
        @click.stop.prevent="() => lightboxNav(1)"
      >
        <span class="sr-text">Next</span>
        <ArrowIcon class="galleria__lightbox__icon--next" />
      </button>
      <button
        type="button"
        class="galleria__lightbox__close"
        @click.stop.prevent="closeLightbox"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
import ArrowIcon from '../img/svg-icons/arrow.vue';
export default {
  name: 'Galleria',
  components: {
    ArrowIcon
  },
  props: {
    bookName: {
      type: String
    },
    photos: {
      type: Array
    }
  },
  data() {
    return {
      photosInRows: [],
      actualRowWidth: 0,
      imgHeight: 600,
      maxRowWidth: {
        large: 2400,
        small: 1800
      },
      breakpoints: {
        large: 1000,
        medium: 600,
        small: 320
      },
      windowWidth: 0,
      lightImg: null
    };
  },
  methods: {
    putPhotosInRows() {
      if (!this.photos || !this.photos.length) {
        return null;
      }
      this.photosInRows = this.photos.reduce((rows, img) => {
        // if we have no rows created yet, create a row with this 1st image
        if (!rows.length) {
          rows.push([img]);
          return rows;
        } else {
          // loop through all the rows we have created so far
          for (const [i, row] of rows.entries()) {
            const currentRowWidth = this.getTotalWidth(row);
            const maxRowWidth = this.windowWidth < this.breakpoints.medium
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
          for (const img of row.childNodes) {
            if (img.classList && img.classList.contains('galleria-img')) {
              const small = img.children[0];
              const imgSrc = img.dataset.large;

              let imgSmall = new Image();
              imgSmall.src = small.src;
              imgSmall.onload = () => {
                small.classList.add('loaded');
              };

              if (img.querySelector('.galleria-large')) {
                img.querySelector('.galleria-large').src = imgSrc;
              } else {
                let imgLarge = new Image();
                imgLarge.src = imgSrc;
                imgLarge.alt = small.alt;
                imgLarge.onload = () => {
                  // give the link a class of "ready"
                  // to indicate lightbox clicks can now happen
                  img.classList.add("ready");
                  imgLarge.classList.add('galleria-large','loaded');
                };
                img.appendChild(imgLarge);
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
    getStyle(row, img) {
      const onlyOneInRow = row.length === 1;
      const totalWidth = this.getTotalWidth(row);
      // actual displayed row width, divided by the aspect ratio of the row.
      // e.g.: 1000 / (2400 / 600 = 4) = 250
      const rowHeight = onlyOneInRow && img.width <= this.actualRowWidth
        ? this.imgHeight
        : this.actualRowWidth / (totalWidth / this.imgHeight);
      // reduce the image width by the same amount the image height was reduced
      const imgWidth = onlyOneInRow && img.width <= this.actualRowWidth
        ? img.width
        : img.width / (this.imgHeight / rowHeight);
      return {
        height: rowHeight + 'px',
        width: imgWidth + 'px'
      };
    },
    setGalleriaWidth() {
      const { small, medium, large } = this.breakpoints;
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > medium && this.windowWidth < large) {
        this.actualRowWidth = medium;
      } else if (this.windowWidth >= small && this.windowWidth < medium) {
        this.actualRowWidth = small;
      } else {
        this.actualRowWidth = large;
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
      const currentIndex = this.photos.findIndex(img => img.file === this.lightImg.file);
      const lastImgIndex = this.photos.length - 1;
      // if it's the first photo and they clicked previous
      if (currentIndex === 0 && change === -1) {
        this.lightImg = this.photos[lastImgIndex];
      // if it's the last photo and they clicked next
      } else if (currentIndex === lastImgIndex && change === 1) {
        this.lightImg = this.photos[0];
      } else {
        this.lightImg = this.photos[currentIndex + change];
      }
    },
    closeLightbox() {
      this.lightImg = null;
    },
    imgClick(e, img) {
      // don't let lightbox happen before images have loaded
      if (e.target.classList.contains("ready")) {
        if (!this.lightImg || this.lightImg.file !== img.file) {
          this.lightImg = img;
        } else {
          this.closeLightbox();
        }
      }
    }
  },
  async mounted() {
    let timeoutId;
    window.addEventListener('keydown', e => {
      if (e.key === "Escape") {
        this.closeLightbox();
      } else if (e.key === "ArrowLeft" && !!this.lightImg) {
        this.lightboxNav(-1);
      } else if (e.key === "ArrowRight" && !!this.lightImg) {
        this.lightboxNav(1);
      }
    });
    window.addEventListener('resize', () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(this.onResize, 500);
    });
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  }
}
</script>
