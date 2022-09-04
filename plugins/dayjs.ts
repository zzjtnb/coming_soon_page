import dayjs from "dayjs";
import "dayjs/locale/zh-cn.js"; // import locale
import duration from "dayjs/plugin/duration.js";
import timezone from "dayjs/plugin/timezone.js"; // dependent on utc plugin

dayjs.locale("zh-cn"); // use locale
dayjs.extend(duration); // use plugin
dayjs.extend(timezone); // use plugin
dayjs.tz.setDefault("Asia/Shanghai");
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("dayjs", dayjs);
});
