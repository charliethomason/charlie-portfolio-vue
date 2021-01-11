<template>
  <div class="galleria">
    <div v-for="(row, r) in photosInRows" :key="`row-${r}`" class="galleria-row" ref="row">
      <a
        v-for="(img, i) in row" :key="`row-${r}-img-${i}`"
        href="#"
        class="galleria-img"
        :style="getStyle(row, img)"
        :data-large="`../img/art/books/${bookName}/${img.file}.jpg`"
      >
        <img
          :src="require('../img/art/books/'+bookName+'/thumbs/'+img.file+'.jpg')"
          :alt="img.file"
          class="galleria-small"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Galleria',
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
      actualRowWidth: 1000,
      imgHeight: 600,
      maxRowWidth: 2400,
      breakpoints: {
        large: 1000,
        medium: 600,
        small: 320
      }
    };
  },
  computed: {
    photosInRows() {
      if (!this.photos || !this.photos.length) {
        return null;
      }
      return this.photos.reduce((rows, img) => {
        // if we have no rows created yet, create a row with this 1st image
        if (!rows.length) {
          rows.push([img]);
          return rows;
        } else {
          // loop through all the rows we have created so far
          for (const [i, row] of rows.entries()) {
            const currentRowWidth = this.getTotalWidth(row);
            const isLastRow = i === rows.length-1;
            // "If the currrent total width of the images in this row is
            // greater than/equal to the max width allowed for a single row."
            // If the image heights are 600px then the max possible row width is 2400px.
            // 2400 / 600 = 4, thus a 4:1 min aspect ratio for each row.
            if (currentRowWidth >= this.maxRowWidth) {
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
    }
  },
  methods: {
    loadImages() {
      this.$refs.row.forEach(row => {
        if (row.childNodes && row.childNodes.length) {
          row.childNodes.forEach(img => {
            const small = img.children[0];

            let imgSmall = new Image();
            imgSmall.src = small.src;
            imgSmall.onload = () => {
            small.classList.add("loaded");
            };

            let imgLarge = new Image();
            imgLarge.src = img.dataset.large;
            imgLarge.alt = small.alt;
            imgLarge.onload = () => {
              imgLarge.classList.add("loaded");
            };
            img.appendChild(imgLarge);
          });
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
    onResize() {
      const { small, medium, large } = this.breakpoints;
      const windowWidth = window.innerWidth;
      if (windowWidth > medium && windowWidth < large) {
        this.actualRowWidth = medium;
      } else if (windowWidth > small && windowWidth < medium) {
        this.actualRowWidth = small;
      } else {
        this.actualRowWidth = large;
      }
    }
  },
  mounted() {
    this.loadImages();
    let timeoutId;
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
