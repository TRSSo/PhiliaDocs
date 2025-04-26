import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "菲莉娅 Philia",
  description: "通用聊天应用接口标准",
  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
