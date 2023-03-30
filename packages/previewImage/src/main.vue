<!--图片展示控件,具备旋转,缩放和拖动功能.-->
<template>
  <div ref="maskBox" class="image-box" @mousedown="onmousedownHandle" @click.stop>
    <img
      class="image"
      :src="imageUrl"
      :style="imageStyle"
    >
  </div>
</template>
<script>
export default {
  name: 'ImageToolView',
  props: {
    imageUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // 图片当前宽度
      imgW: 0,
      // 图片当前高度
      imgH: 0,
      // 图片当前top值
      top: 0,
      // 当前left值
      left: 0,
      // 当前缩放配置
      scale: 'scale(1)',
      // 当前缩放偏移量
      scaleOffset: 0,
      // 图片展示角度
      deg: 0,
      // 滚轮滚动事件
      mousewheelevt: null
    };
  },
  computed: {
    imageStyle() {
      return {
        width: this.imgW + 'px',
        height: this.imgH + 'px',
        top: this.top + 'px',
        left: this.left + 'px',
        transform: this.scale
      };
    }
  },
  watch: {
    imageUrl() {
      this.handleReset();
    }
  },
  mounted() {
    this.initImage();
    this.mousewheelevt = /Firefox/i.test(navigator.userAgent) ? 'DOMMouseScroll' : 'mousewheel';
    this.$refs.maskBox.addEventListener(this.mousewheelevt, this.wheelHandle, { passive: true });
  },
  beforeDestroy() {
    this.$refs.maskBox.removeEventListener(this.mousewheelevt, this.wheelHandle, { passive: true });
  },
  methods: {
    /**
     * 获取图片的尺寸
     * @param {string} url
     */
    getImgSize(url) {
      return new Promise((resolve, reject) => {
        const imgObj = new Image();
        imgObj.src = url;
        imgObj.onload = () => {
          resolve({
            width: imgObj.width,
            height: imgObj.height
          });
        };
      });
    },
    /**
     * 初始化图片
     */
    async initImage() {
      if (!this.imageUrl) {
        return;
      }
      const { width, height } = await this.getImgSize(this.imageUrl);
      // 设置原始图片的大小
      const realWidth = width;
      const realHeight = height;

      // 获取高宽比例
      const whRatio = realWidth / realHeight;
      const hwRatio = realHeight / realWidth;

      // 获取盒子的大小
      const boxW = this.$refs.maskBox.clientWidth;
      const boxH = this.$refs.maskBox.clientHeight;

      if (realWidth >= realHeight) {
        this.imgH = hwRatio * boxW;
        const nih = this.imgH;
        if (nih > boxH) {
          this.imgH = boxH;
          this.imgW = whRatio * boxH;
        } else {
          this.imgW = boxW;
        }
        this.top = (boxH - this.imgH) / 2;
        this.left = (boxW - this.imgW) / 2;
      } else {
        this.imgW = (boxH / realHeight) * realWidth;
        this.imgH = boxH;
        this.left = (boxW - this.imgW) / 2;
      }
    },
    /**
     * 旋转
     */
    handleRotate() {
      this.deg -= 90;
      if (this.deg <= -360) {
        this.deg = 0;
      }
      this.scaleOffset = 0;
      this.scale = `scale(1) rotateZ(${this.deg}deg)`;
    },

    /**
     * 图片的缩放
     *    zoom >0 放大
     *    zoom <0 缩小
     */
    imgScaleHandle(zoom) {
      this.scaleOffset += zoom;
      if (this.scaleOffset < -0.5) {
        this.scaleOffset = -0.5;
      }
      this.scale = `scale(${1 + this.scaleOffset}) rotateZ(${this.deg}deg)`;
    },

    /**
     * 重置
     */
    handleReset() {
      this.top = 0;
      this.left = 0;
      this.imgW = 0;
      this.imgH = 0;
      this.deg = 0;
      this.scaleOffset = 0;
      this.scale = 'scale(1)';
      this.initImage();
    },

    /**
     * 鼠标滚动 实现放大缩小
     */
    wheelHandle(e) {
      const ev = e || window.event; // 兼容性处理 => 火狐浏览器判断滚轮的方向是属性 detail，谷歌和ie浏览器判断滚轮滚动的方向是属性 wheelDelta
      // dir = -dir; // dir > 0 => 表示的滚轮是向上滚动，否则是向下滚动 => 范围 (-120 ~ 120)
      const dir = ev.detail ? ev.detail * -120 : ev.wheelDelta;
      // 滚动的数值 / 2000 => 表示滚动的比例，用此比例作为图片缩放的比例
      this.imgScaleHandle(dir / 2000);
    },

    /**
     * 处理图片拖动
     */
    onmousedownHandle(e) {
      const that = this;
      this.$refs.maskBox.onmousemove = function(el) {
        const ev = el || window.event; // 阻止默认事件
        ev.preventDefault();
        that.left += ev.movementX;
        that.top += ev.movementY;
      };
      this.$refs.maskBox.onmouseup = function() {
        // 鼠标抬起时将操作区域的鼠标按下和抬起事件置为null 并初始化
        that.$refs.maskBox.onmousemove = null;
        that.$refs.maskBox.onmouseup = null;
      };
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        return false;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.image-box {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .image{
    position: absolute;
    cursor: pointer;
  }
}
</style>