import DefaultTheme from "vitepress/theme"
import Layout from "./Layout.vue"
import PatternCard from "./components/PatternCard.vue"
import BackToTop from "./components/BackToTop.vue"
import "./style.css"

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("PatternCard", PatternCard)
    app.component("BackToTop", BackToTop)
  },
}

