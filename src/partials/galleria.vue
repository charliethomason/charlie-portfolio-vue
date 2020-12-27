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
  computed: {
    photosInRows() {
      if (!this.photos || !this.photos.length) {
        return null;
      }
      return this.photos.reduce((rows, img) => { 
        if (!rows.length) {
          rows.push([img]);
          return rows;
        } else {
          for (const [i, row] of rows.entries()) {
            const currWidths = this.getTotalWidth(row);
            const isLastRow = i === rows.length-1;
            if (currWidths >= 2400) {
              if (isLastRow) {
                rows.push([img]);
                break;
              } else {
                continue;
              }
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
      const imgHeight = 600;
      const rowWidth = 1000;
      const totalWidth = this.getTotalWidth(row);
      const rowHeight = rowWidth / (totalWidth / imgHeight);
      const imgWidth = img.width / (imgHeight / rowHeight);
      return {
        height: rowHeight + 'px',
        width: imgWidth + 'px'
      };
    }
  },
  mounted() {
    this.loadImages();
  }
}
</script>
