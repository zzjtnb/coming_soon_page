import dayjs from "dayjs";
declare module "#app" {
  interface NuxtApp {
    $dayjs: dayjs.Dayjs;
    // readonly $dayjs: any;
  }
}
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $dayjs(date?: dayjs.ConfigType): dayjs.Dayjs;
    // readonly $dayjs: any;
  }
}
