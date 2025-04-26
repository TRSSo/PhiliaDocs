import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "使用指南",
      icon: "book",
      prefix: "guide/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "开发指南",
      icon: "laptop-code",
      prefix: "dev/",
      children: "structure",
      collapsible: true,
    },
    "portfolio",
  ],
});
