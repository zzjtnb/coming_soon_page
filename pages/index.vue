<script setup lang="ts">
const {$dayjs} = useNuxtApp();
const diffTime = ref($dayjs("2024-01-06").diff($dayjs(), "seconds"));
let timer: any = null;
const durationFormatter = computed(() => {
  let res = [
    {time: null, lable: "days"},
    {time: null, lable: "hours"},
    {time: null, lable: "minutes"},
    {time: null, lable: "seconds"},
  ];
  const time = diffTime.value;
  let t = time;
  const ss = t % 60;
  res[3].time = ss >= 10 ? `${ss}` : `0${ss}`;
  t = (t - ss) / 60;
  const mm = t % 60;
  res[2].time = mm >= 10 ? `${mm}` : `0${mm}`;
  t = (t - mm) / 60;
  const hh = t % 24;
  res[1].time = hh >= 10 ? `${hh}` : `0${hh}`;
  t = (t - hh) / 24;
  const dd = t;
  res[0].time = dd >= 10 ? `${dd}` : `0${dd}`;
  return res;
});

const getTime = () => {
  // 避免重复执行 setTimeout
  timer && clearTimeout(timer);
  timer = setTimeout(() => {
    if (diffTime.value >= 0) {
      --diffTime.value;
      getTime(); // 递归调用
    } else {
      console.log("倒计时结束");
    }
  }, 1000);
};
onMounted(() => {
  getTime();
});
onBeforeUnmount(() => {
  clearInterval(timer);
  timer = null;
});
</script>

<template>
  <div class="index">
    <!--header-->
    <header><h1>Coming Soon Page</h1></header>
    <!--//header-->
    <!-- content -->
    <div class="main-content-agile">
      <div class="w3l-agile">
        <h2 class="">We are on the way</h2>
        <p class="">Stay tuned for something amazing</p>
      </div>
      <!--timer-->
      <div class="examples">
        <div class="simply-countdown-losange">
          <div class="simply-section" v-for="item in durationFormatter" :key="item.lable">
            <span class="simply-amount"> {{ item.time }} </span>
            <span class="simply-word">{{ item.lable }}</span>
          </div>
        </div>
      </div>
      <!--//timer-->
      <!-- newsletter -->
      <div class="sub-main-w3">
        <form action="https://zzjtnb.com" method="post">
          <p>Notify me when it's ready</p>
          <div class="form-style-agile">
            <input placeholder="Your Email Address......" name="Name" type="email" />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <!-- //newsletter -->
      <div class="news">
        <TypeWriter :texts="['这个世界上没有什么东西是永远属于你的,但有一个东西例外,那就是本领,谁也抢不走.', '一个浪迹天涯的游子回到故乡的时候,发现的第一件事总是自己的恋人变成别人的老婆.']" />
      </div>
    </div>
    <!-- //content -->
    <!-- footer -->
    <footer class="footer">
      <p>
        Copyright &copy; 2019.zzjtnb All rights reserved.
        <a target="_blank" href="https://zzjtnb.com">Website HomePage</a>
      </p>
    </footer>
    <!-- //footer -->
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css?family=Asap+Condensed:400,400i,500,500i,600,600i,700,700i");
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i");
@import url("https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.zzjtnb {
  height: 100vh;
  background: url("/img/bg.jpg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  font-family: "Roboto Condensed", sans-serif;
  overflow: hidden;
  color: #fff;
}

/*-- header --*/
h1 {
  font-size: 4vw;
  letter-spacing: 4px;
  text-align: center;
  margin: 1.5vw 2vw 4vw;
  text-shadow: 1px 1px 2px #000;
  font-weight: 600;
  font-family: "Asap Condensed", sans-serif;
}

.w3l-agile {
  text-align: center;
}

h2 {
  font-size: 3vw;
  letter-spacing: 1px;
  font-weight: 400;
}

.w3l-agile p {
  color: #e4e4e4;
  letter-spacing: 0.2vw;
  font-weight: 100;
  font-size: 1vw;
  margin: 1em 0 2em;
}

h2 span {
  color: #ffc107;
}

/*-- //header --*/

/*-- content --*/

.sub-main-w3 form {
  max-width: 64rem;
  margin: 4vw auto;
}

.sub-main-w3 p {
  font-size: 1.5rem;
  margin-bottom: 1vw;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.form-style-agile {
  flex-basis: 100%;
  -webkit-flex-basis: 100%;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  border: 6px solid rgba(8, 8, 8, 0.27);
}

.form-style-agile input[type="email"] {
  outline: none;
  font-size: 1rem;
  border: none;
  color: #000;
  letter-spacing: 1px;
  padding: 1rem;
  background: #fff;
  flex-basis: 75%;
  box-sizing: border-box;
  font-family: "Voltaire", sans-serif;
}

.sub-main-w3 input[type="submit"] {
  background: #55d45a;
  border: none;
  padding: 15px 0;
  outline: none;
  flex-basis: 25%;
  font-size: 15px;
  cursor: pointer;
  letter-spacing: 1px;
  font-family: "Voltaire", sans-serif;
  transition: 0.5s all;
}

.sub-main-w3 input[type="submit"]:hover {
  transition: 0.5s all;
}

/*-- placeholder-color --*/

::-webkit-input-placeholder {
  color: #000;
}

:-moz-placeholder {
  /* Firefox 18- */
  color: #000;
}

::-moz-placeholder {
  /* Firefox 19+ */
  color: #000;
}

:-ms-input-placeholder {
  color: #000;
}

/*-- //placeholder-color --*/

/*-- timer --*/

.examples {
  display: flex;
  align-items: center;
  justify-content: center;
}

.simply-countdown-losange {
  max-width: 800px;
  margin: 0 5vw;
  box-sizing: border-box;
  display: -webkit-flex;
  display: -webkit-box;
  display: -moz-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-basis: 100%;
}
@media (min-width: 1920px) {
  .simply-countdown-losange {
    max-width: 54vw;
  }
}
.simply-section {
  flex-basis: 24%;
  box-sizing: border-box;
  text-align: center;
  border: 2px solid rgba(255, 255, 255, 0.52);
  padding: 2vw;
  border-radius: 4px;
}

span.simply-amount {
  font-size: 60px;
}

span.simply-word {
  font-size: 18px;
  letter-spacing: 2px;
  margin-left: 5px;
  color: #55d45a;
  display: block;
  text-transform: capitalize;
  margin-top: 15%;
}

/*-- //timer --*/

/*-- //content --*/

/*-- footer --*/

.footer {
  margin: 2vw 0.3vw 2vw;
}

.footer p {
  font-size: 1rem;
  letter-spacing: 2px;
  text-align: center;
  line-height: 1.8;
}

.footer p a {
  color: #55d45a;
  transition: 0.5s all;
}

.footer p a:hover {
  color: #fff;
  transition: 0.5s all;
}

/*-- //footer --*/

/*-- responsive --*/

@media (max-width: 1920px) {
  h1 {
    font-size: 4vw;
  }
}

@media (max-width: 1080px) {
  h1 {
    font-size: 5vw;
  }

  .sub-main-w3 p {
    font-size: 18px;
  }
}

@media (max-width: 800px) {
  h1 {
    font-size: 3em;
    margin: 3vw 2vw 5vw;
  }

  span.simply-amount {
    font-size: 56px;
  }

  .sub-main-w3 form {
    margin: 6vw 5vw;
  }

  h2 {
    font-size: 2em;
  }
}

@media (max-width: 600px) {
  span.simply-amount {
    font-size: 50px;
  }

  span.simply-word {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2.5em;
    letter-spacing: 2px;
    margin: 6vh 2vw 7vw;
  }

  h2 {
    font-size: 1.8em;
  }

  .w3l-agile p {
    /* font-size: 0.8vw; */
    font-size: 0.8rem;
  }

  span.simply-amount {
    font-size: 40px;
  }

  span.simply-word {
    font-size: 15px;
    letter-spacing: 1px;
  }
}

@media (max-width: 384px) {
  span.simply-amount {
    font-size: 35px;
  }

  span.simply-word {
    font-size: 14px;
  }

  .footer p {
    letter-spacing: 2px;
  }
}

@media (max-width: 320px) {
  h1 {
    font-size: 2.2em;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 1.5em;
  }

  .w3l-agile p {
    font-size: 0.6vw;
  }

  .simply-section {
    flex-basis: 48%;
  }

  .simply-section:nth-child(3),
  .simply-section:nth-child(4) {
    margin-top: 1em;
  }

  .form-style-agile input[type="email"] {
    font-size: 13px;
    flex-basis: 70%;
  }

  .sub-main-w3 input[type="submit"] {
    padding: 13px 0;
    flex-basis: 30%;
    font-size: 14px;
  }

  .sub-main-w3 p {
    font-size: 17px;
  }

  .sub-main-w3 form {
    margin: 11vw 4vw;
  }
}

.news {
  font-family: "Ma Shan Zheng", cursive;
  color: springgreen;
  line-height: 2rem;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
}
@media (max-width: 1080px) {
  .news {
    text-align: center;
  }
}

/*-- //responsive --*/
</style>
