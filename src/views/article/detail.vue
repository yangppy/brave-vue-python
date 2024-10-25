<template>
<div>
    <div class="container-fluid position-relative">
        <nav class="navbar navbar-expand-lg navbar-dark  text-white bg-transparent">
            <div class="container">
                <router-link class="navbar-brand" to="/">💖那年初夏💖</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                    </ul>
                    <span class="navbar-text">
                        💕愿你三冬暖，愿你天不寒🍂
                    </span>
                </div>
            </div>
        </nav>
        <section class="lover-background"
            style="background-image: url(https://tva4.sinaimg.cn/large/0084aYsLly1ghfw6j7d5tj31jk0v9442.jpg)"></section>
        <section class="container lover-container d-flex flex-column align-content-center justify-content-center">
            <div class="row align-items-center pb-5 lover">
                <div class="col">
                    <div class="d-flex flex-column">
                        <img class="mx-auto avatar-img rounded-circle"
                            src="https://tvax4.sinaimg.cn/large/0084aYsLly1gngk9eg5luj305k05kmxe.jpg" alt="">
                        <h4 class="mx-auto text-white pt-2">boy</h4>
                    </div>
                </div>
                <div class="col">
                    <div class="d-flex justify-content-center">
                        <div class="heart"></div>
                    </div>
                </div>
                <div class="col">
                    <div class="d-flex flex-column">
                        <img class="mx-auto avatar-img rounded-circle"
                            src="https://tva4.sinaimg.cn/large/0084aYsLly1gngk9z2zfcj305k05k0sv.jpg" alt="">
                        <h4 class="mx-auto text-white pt-2">girl</h4>
                    </div>
                </div>
            </div>
        </section>
        <section class="main-hero-waves-area waves-area">
            <svg class="waves-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave"
                        d="M -160 44 c 30 0 58 -18 88 -18 s 58 18 88 18 s 58 -18 88 -18 s 58 18 88 18 v 44 h -352 Z">
                    </path>
                </defs>
                <g class="parallax">
                    <use xlink:href="#gentle-wave" x="48" y="0"></use>
                    <use xlink:href="#gentle-wave" x="48" y="3"></use>
                    <use xlink:href="#gentle-wave" x="48" y="5"></use>
                    <use xlink:href="#gentle-wave" x="48" y="7"></use>
                </g>
            </svg>
        </section>
    </div>
    <div id="Pjax">

        <div class="list-content mx-auto mt-5">
            <div id="article" class="list-top">
                <h5 class="list-text">💕因为刚好遇见你💕
                </h5>
                <article>
                    <article>
                        <h3>初夏</h3>
                        <p>暮春倏忽，初夏时节，喧嚣的北京，路边的草木郁郁葱葱地舒展开来，树枝遮了骄阳当空，只洒下淡淡光影斑点。<br>这一切好像都是安排好的。<br>五月，与春别离，与夏邂逅，与你相遇。</p>
                        <h3>夜晚</h3>
                        <p>那条小路真的很黑，也许导航地图是故意的。<br>“你觉得世界上最幸福的数字是几？”<br>“6啊。”<br>“不对。”<br>“那是啥？”<br>“是5。”<br>“为什么啊？”<br>“把你手张开”<br>…………<br>“幸福吗？”<br>…………<br>“幸福。”<br>一句喜欢一句爱没有说<br>也许这才是爱情，言语无法形容<br>不是一回忆
                            不是一个过程 也不是一个结果<br>感谢<br>丘比特之箭，恰巧射中了你我<br>感谢<br>刚好遇见你</p>
                    </article>
                </article>
            </div>
        </div>

    </div>
    <div class="p-5 text-center ">
        <h6>©💖那年初夏💖</h6>
        <p class="h6"> Powered by <a href="http://typecho.org" target="_blank">Typecho</a> ※ Theme is <a
                href="https://blog.zwying.com" target="_blank">Brave</a></p>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      id: ''
    }
  },
  created () {
    this.id = this.$route.params.id
    console.log(this.$route.params.id)
  }
}
</script>
