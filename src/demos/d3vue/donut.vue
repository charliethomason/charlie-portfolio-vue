<template>
  <div class="status-chart">
    <h2 class="charlie-dev-type charlie-dev-type--light-text-m">{{heading}}</h2>
    <div class="status-row">
      <div ref="donutWrapper" class="donut-chart-wrapper">
        <div ref="donutChart" class="donut-chart"></div>
        <div class="donut-total" @click="totalClick" v-if="total.count">
          <div class="charlie-dev-type charlie-dev-type--light-heading-xl donut-total-label">{{total.count}}</div>
          <span class="charlie-dev-type charlie-dev-type--light-text-m">{{total.label}}</span>
        </div>
        <div class="donut-total" @click="totalClick" v-else>
          <div class="charlie-dev-type charlie-dev-type--light-heading-xl donut-total-label">N/A</div>
        </div>
        <div ref="donutChartPopup" class="donut-tooltip charlie-dev-type charlie-dev-type--regular-text-xs"></div>
      </div>
      <div class="group-list">
        <template v-for="group in groups">
          <h3 class="charlie-dev-type charlie-dev-type--light-text-m" v-if="group.count > 0">{{group.label}}</h3>
          <ul v-if="group.members && group.members.length">
            <li v-for="type in group.members"
                :class="{'list-item-highlight': listHover, 'hovered': type.value === currentHighlight}"
                :style="getBorderColor(type.color)"
                @mouseover="highlightItem(type)"
                @mouseout="unhighlightItem">
              <span class="status-color" :style="{backgroundColor: type.color}"></span>
              <span class="charlie-dev-type charlie-dev-type--light-text-s">{{type.label}}</span>
              <span class="charlie-dev-type charlie-dev-type--bold-text-s member-total clickable" @click="numberClick(type)" v-if="!type.disableLink">{{type.count}}</span>
              <span class="charlie-dev-type charlie-dev-type--bold-text-s member-total" v-else>{{type.count}}</span>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import * as d3 from 'd3';

  export default {
    name: 'ucs-donut-chart',
    props: {
      heading: String,
      total: Object,
      groups: Array,
      listHover: Boolean
    },
    data() {
      return {
        currentHighlight: null
      };
    },
    methods: {
      d3Init() {
        const width = this.$refs.donutChart.clientWidth;
        const height = this.$refs.donutChart.clientHeight;
        const radius = Math.min(width, height) / 2;

        const arc = d3
          .arc()
          .outerRadius(radius - 10)
          .innerRadius(radius - 60);

        const pie = d3
          .pie()
          .sort((a, b) => b.count - a.count)
          .value(d => d.count);

        if (this.$refs.donutChart.querySelector('svg') !== null) {
          this.$refs.donutChart.querySelector('svg').remove();
        }

        const svg = d3
          .select(this.$refs.donutChart)
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const statusData = this.groups.reduce((arr, obj) => arr.concat(obj.members), []);
        statusData.forEach(() => {
          const g = svg
            .selectAll('.arc')
            .data(pie(statusData))
            .enter()
            .append('g')
            .attr('class', 'arc');

          g
            .append('path')
            .attr('d', arc)
            .style('fill', d => d.data.color)
            .on('mousemove', d => this.donutHighlight(d.data, d3.mouse(this.$refs.donutWrapper)))
            .on('mouseout', () => this.unhighlightItem());
        });
      },
      donutHighlight(data, donut) {
        this.currentHighlight = data.value;
        this.mouseMove(data, donut);
      },
      highlightItem(item) {
        if (this.listHover) {
          const selected = d3.selectAll('.arc')
            .filter(arc => arc.data.value === item.value)
            .node();
          const position = selected.getBoundingClientRect();
          const boxPos = this.$refs.donutWrapper.getBoundingClientRect();
          const left = position.left - boxPos.left;
          const top = position.top - boxPos.top;
          const arcWidth = position.width;
          const arcHeight = position.height;
          this.mouseMove(item, [(left + arcWidth / 2),(top + arcHeight / 2)]);
        }
      },
      unhighlightItem() {
        if (this.listHover) {
          this.currentHighlight = null;
          this.mouseOut();
        }
      },
      mouseMove(item, mousePosition) {
        const tooltip = d3.select(this.$refs.donutChartPopup);
        const tooltipWidth = this.$refs.donutChartPopup.clientWidth;
        const percent = number => d3.format('.0%')(number / this.total.count);

        tooltip
          .html(`<span class="charlie-dev-type charlie-dev-type--bold-text-xs">${percent(item.count)}</span> ${item.label}`)
          .style('opacity', 1)
          .style(
            'left',
            `${mousePosition[0] - tooltipWidth / 2}px`
          )
          .style('top', `${mousePosition[1] + 10}px`);
      },
      mouseOut() {
        const tooltip = d3.select(this.$refs.donutChartPopup);

        tooltip.style('opacity', 0);
      },
      getBorderColor(color) {
        if (!this.listHover) {
          return;
        }

        return { borderColor: color };
      },
      totalClick(event) {
        this.$emit('total-click', event);
      },
      numberClick(value) {
        const valueArray = Array.isArray(value)
          ? value.filter(type => !type.disableLink)
          : [value];
        this.$emit('number-click', valueArray);
      }
    },
    mounted() {
      this.$nextTick(function() {
        if (this.groups.length) {
          this.d3Init();
        }
      });
    },
    watch: {
      groups() {
        this.d3Init();
      }
    }
  };
</script>

<style>
  .status-chart {
    background-color:#fff;
    border-radius:5px;
    box-shadow: 0 2px 8px 0 rgba(17, 76, 204, 0.08);
    height:100%;
  }
  .status-chart h2 {
    border-bottom: solid 1px #eeeeee;
    line-height:16px;
    margin:0 0 10px;
    padding:12px 20px;
    text-align:left;
  }
  .status-row {
    display:flex;
  }
  .donut-chart-wrapper {
    flex:0 0 50%;
    position:relative;
    text-align:center;
  }
  .donut-chart {
    display:inline-block;
    height:250px;
    width:250px;
  }
  .donut-total {
    color: #111b26;
    cursor:pointer;
    text-align:center;
    left:50%;
    margin-left:-60px;
    position:absolute;
    top: 90px;
    width:120px;
  }
  .donut-total-label {
    color:#165ffb;
    line-height:42px;
  }
  .donut-tooltip {
    background: #eef2fa;
    border: 0px;
    border-radius: 3px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.26);
    line-height:12px;
    opacity: 0;
    position: absolute;
    padding: 10px;
    pointer-events: none;
    text-align: center;
    width:100px;
    z-index:1;
  }
  .donut-tooltip:before {
    border-left:5px solid transparent;
    border-right:5px solid transparent;
    border-bottom:10px solid #eef2fa;
    content:'';
    position:absolute;
    bottom:100%;
    left:50%;
    margin-left:-5px;
    z-index:1;
  }
  .group-list {
    flex:0 0 50%;
    padding:20px 50px 30px 0;
  }
  .group-list h3 {
    color: #5b728d;
    margin:0;
  }
  .group-list h3 .charlie-dev-type {
    line-height: 1.1;
  }
  .group-total {
    color: #165ffb;
    cursor:pointer;
  }
  .group-list ul {
    border-top:solid 1px #eeeeee;
    margin:0 0 15px;
    padding:0;
  }
  .group-list li {
    border-bottom:solid 1px #eeeeee;
    list-style:none;
    padding:7px;
    line-height: 14px;
  }
  .group-list li .charlie-dev-type {
    line-height: 14px;
  }
  .group-list li.list-item-highlight {
    border-bottom: none;
    cursor:pointer;
    position: relative;
  }
  .group-list li.list-item-highlight:after {
    background-color: #eee;
    content: '';
    display: block;
    height: 1px;
    left:0;
    position:absolute;
    top:100%;
    width: 100%;
  }
  .group-list li.list-item-highlight:hover,
  .group-list li.list-item-highlight.hovered {
    border: 1px solid #eee;
  }
  .group-list li.list-item-highlight:hover::after,
  .group-list li.list-item-highlight.hovered:after {
    display: none;
  }
  .status-color {
    border-radius:50px;
    display:inline-block;
    height:12px;
    width:12px;
    margin-right:8px;
  }
  .member-total {
    color: #000;
    float:right;
  }
  .member-total.clickable {
    color: #165ffb;
    cursor:pointer;
  }
</style>