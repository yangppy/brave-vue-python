<template>
    <div @click="addHeart" class="heart-effect-container">
      <!-- 这里是你组件的内容 -->
      <slot></slot>
    </div>
</template>

<script>
export default {
  data () {
    return {
      a_idx: 0,
      hearts: ['臭鱼', '❤', '臭宁', '❤', '臭鱼', '❤', '臭宁', '❤', '臭鱼', '❤', '臭宁', '❤']
    }
  },
  methods: {
    addHeart (event) {
      const heart = document.createElement('span')
      heart.className = 'test'
      heart.textContent = this.hearts[this.a_idx] 
      this.a_idx = (this.a_idx + 1) % this.hearts.length
      const x = event.clientX
      const y = event.clientY
      // 设置随机颜色
      const randomColor = `rgb(${~~(255 * Math.random())}, ${~~(255 * Math.random())}, ${~~(255 * Math.random())})`
      heart.style.top = `${y-20}px`
      heart.style.left = `${x}px`
      heart.style.color = randomColor
      document.body.appendChild(heart)
      // 动画效果
      setTimeout(() => {
        heart.style.transform = 'translateY(-50px)'
        heart.style.opacity = 0
      }, 30)
      // 动画完成后移除元素
      setTimeout(() => {
        heart.remove()
      }, 300)
    }
  }
}
</script>

<style>
  .heart-effect-container {
    margin: 0;
    position: relative;
  }

  .heart {
    position: absolute;
    font-weight: bold;
    pointer-events: none;
    opacity: 1;
    transition: transform 1s ease, opacity 1s ease;
    /* 使用伪元素显示文本 */

  }
  
  .test {
    position: absolute;
    font-weight: bold;
    pointer-events: none;
    opacity: 1;
    transition: transform 0.5s ease, opacity 0.5s ease 0.5s;
  }
</style>
