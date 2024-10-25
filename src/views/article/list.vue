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
                        <h4 class="mx-auto text-white pt-2">boyname</h4>
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
                        <h4 class="mx-auto text-white pt-2">girlname</h4>
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
            <div class="list-top">
                <h5 class="list-text">💕世间最动情之事，莫过于两人相依💑，走过四季三餐的温暖。<br>📜相信在以后会有更多美好的事情发生😊</h5>

                <template v-for="i in 3">
                    <article :key="i" style="padding: 20px;border-bottom: 1px solid rgba(0,123,255,.2);text-align: center;"
                        class="post" itemscope itemtype="http://schema.org/BlogPosting">
                        <h4 class="post-title" itemprop="name headline"><router-link class=" list-wbc" itemprop="url"
                            style="cursor:pointer;" :to="{ name: 'Diary', params: { id: i }}">因为刚好遇见你</router-link></h4>
                        <time datetime="" itemprop="datePublished"> 深情地写于 2018-05-18</time>
                    </article>
                </template>

                <!-- <article class="post">
                        <h2 class="post-title"></h2>
                </article> -->

                <!-- pageNav('&laquo; 前一页', '后一页 &raquo;') -->
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
