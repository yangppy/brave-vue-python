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
                            src="https://tvax4.sinaimg.cn/large/0084aYsLly1gngk9eg5luj305k05kmxe.jpg"
                            alt="">
                        <h4 class="mx-auto text-white pt-2">臭鱼</h4>
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
                            src="https://tva4.sinaimg.cn/large/0084aYsLly1gngk9z2zfcj305k05k0sv.jpg"
                            alt="">
                        <h4 class="mx-auto text-white pt-2">臭宁</h4>
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
        <div class="container">
            <blockquote class="blockquote text-center my-5 py-2">
                <h5 class="card-title lover-card-title">我们风雨同舟已经一起走过</h5>
                <h5 id="site_runtime">
                    第 <span class="countdownD">{{ D }}</span> 天 <span class="countdownH">{{ H }}</span> 小时 <span class="countdownM">{{ M }}</span> 分钟 <span class="countdownS">{{ S }}</span> 秒
                </h5>
            </blockquote>
            <div class="row indexPlate">
                <div class="col-md-4">
                    <router-link :to="'/blessing'" class="card ">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <div class="avatar avatar-md">
                                        <img src="https://tva4.sinaimg.cn/large/0084aYsLly1gngle9wjj4j308p08pweq.jpg" alt="..."
                                            class="avatar-img rounded-circle">
                                    </div>
                                </div>
                                <div class="col">
                                    <p class="h5">祝福板</p>
                                    <p class="small text-muted mb-1">💌写下对我们的祝福</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4">
                    <router-link to="/diary" class="card">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <div class="avatar avatar-md">
                                        <img src="https://tvax2.sinaimg.cn/large/0084aYsLly1gngle9t7otj308p08pjri.jpg" alt="..."
                                            class="avatar-img rounded-circle">
                                    </div>
                                </div>
                                <div class="col">
                                    <p class="h5">点点滴滴</p>
                                    <p class="small text-muted mb-1">💖记录你我生活</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4">
                    <router-link to="/memory" class="card ">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <div class="avatar avatar-md">
                                        <img src="https://tva1.sinaimg.cn/large/0084aYsLly1gngle9o55hj308p08pdfz.jpg" alt="..."
                                            class="avatar-img rounded-circle">
                                    </div>
                                </div>
                                <div class="col">
                                    <p class="h5">Love List</p>
                                    <p class="small text-muted mb-1">📜甜蜜瞬间有你陪伴</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4">
                    <router-link to="/memory" class="card ">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <div class="avatar avatar-md">
                                        <img src="https://tva1.sinaimg.cn/large/0084aYsLly1gngle9o55hj308p08pdfz.jpg" alt="..."
                                            class="avatar-img rounded-circle">
                                    </div>
                                </div>
                                <div class="col">
                                    <p class="h5">Love List</p>
                                    <p class="small text-muted mb-1">📜甜蜜瞬间有你陪伴</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4">
                    <router-link to="/memory" class="card ">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <div class="avatar avatar-md">
                                        <img src="https://tva1.sinaimg.cn/large/0084aYsLly1gngle9o55hj308p08pdfz.jpg" alt="..."
                                            class="avatar-img rounded-circle">
                                    </div>
                                </div>
                                <div class="col">
                                    <p class="h5">Love List</p>
                                    <p class="small text-muted mb-1">📜甜蜜瞬间有你陪伴</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-4">
                    <router-link to="/memory" class="card ">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <div class="avatar avatar-md">
                                        <img src="https://tva1.sinaimg.cn/large/0084aYsLly1gngle9o55hj308p08pdfz.jpg" alt="..."
                                            class="avatar-img rounded-circle">
                                    </div>
                                </div>
                                <div class="col">
                                    <p class="h5">Love List</p>
                                    <p class="small text-muted mb-1">📜甜蜜瞬间有你陪伴</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
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
  // $(document).pjax('a', '#Pjax', {
  //     fragment: '#Pjax',
  //     timeout: 6000
  // });
  // $(document).on('pjax:send', function () {
  //     NProgress.start();
  // });
  // $(document).on('pjax:complete', function () {
  //     NProgress.done();
  // });
  data () {
    return {
      timer: '',
      D: '',
      H: '',
      M: '',
      S: ''
    }
  },
  created () {
    this.timer = setInterval(this.getTime, 1000)
  },
  methods: {
    getTime () {
      var start = new Date('2024-04-03 11:00:00')
      var now = new Date()
      const T = now - start
      var i = 24 * 60 * 60 * 1000
      this.D = Math.floor(T / i)
      this.H = Math.floor((T % i) / (60 * 60 * 1000))
      this.M = Math.floor((T % (60 * 60 * 1000)) / (60 * 1000))
      this.S = Math.floor((T % (60 * 1000)) / 1000)
    }
  },
  mounted () {
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer) // 在Vue实例销毁前，清除定时器
    }
  }
}
</script>
