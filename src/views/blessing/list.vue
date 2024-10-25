<template>
  <div>
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
              <span class="navbar-text">💕愿你三冬暖，愿你天不寒🍂</span>
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
                     src="https://tvax4.sinaimg.cn/large/0084aYsLly1gngk9eg5luj305k05kmxe.jpg" alt="赵小应">
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
                     src="https://tva4.sinaimg.cn/large/0084aYsLly1gngk9z2zfcj305k05k0sv.jpg" alt="还没等到">
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
        <div id="respond-page-2" class="respond list-content mx-auto mt-5">
          <div class="list-top">
            <h5 class="text-center">累计已经收到<span class="bigfontNum"> 3 </span>条祝福</h5>
            <ol class="comment-list">
              <div class="comment-body comment-parent comment-odd">
                <div class="commentlist">
                  <div v-for="i in 3" :key="i" class="comment">
                    <div>
                      <div class="comment-avatar"><img alt=""
                                                       src="https://tvax4.sinaimg.cn/large/0084aYsLly1gngk9eg5luj305k05kmxe.jpg"
                                                       class="avatar avatar-96 photo" height="96" width="96"
                                                       style="display: inline;"></div>
                      <div class="comment-body">
                        <div class="comment_author">
                          <span class="name">Symon</span>
                          <em>2021-12-23 11:24</em>
                        </div>
                        <div class="comment-text">
                          <p>嘿嘿</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ol>
            <form method="post" action="https://love.zwying.com/index.php/start-page.html/comment" name="comment-form"
                  id="comment-form" role="form" class="comment-form">
              <div class="form-row">
                <div class="form-group col-md-4">
                  <input type="text" name="author" id="author" class="form-control" placeholder="姓名或昵称*"
                         value="" required/>
                </div>
                <div class="form-group col-md-4">
                  <input type="email" name="mail" id="mail" class="form-control" placeholder="邮箱*"
                         value="" required/>
                </div>
                <div class="form-group col-md-4">
                  <input type="url" name="url" id="url" class="form-control" placeholder="网站或博客" value=""/>
                </div>
              </div>
              <div class="form-group">
                        <textarea rows="3" cols="50" name="text" id="textarea" class="form-control"
                                  placeholder="写下对我们的祝福"
                                  required></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class="float-right btn btn-outline-danger">祝福发送</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="p-5 text-center ">
        <h6>©💖那年初夏💖</h6>
        <p class="h6"> Powered by <a href="http://typecho.org" target="_blank">Typecho</a> ※ Theme is <a
            href="https://blog.zwying.com" target="_blank">Brave</a></p>
      </div>

    </div>
  </div>
</template>
