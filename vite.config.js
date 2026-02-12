import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";

const options = {
  pretty: true, // форматированный HTML (для разработки)
  basedir: "./src", // базовая директория для include/extend
  doctype: "html",
};

const locals = {
  title: "Мой сайт",
  description: "Описание сайта",
  year: new Date().getFullYear(),
};

export default defineConfig({
  plugins: [pugPlugin(options, locals)],
});
