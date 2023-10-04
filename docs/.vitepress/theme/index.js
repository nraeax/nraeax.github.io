import './tailwind.postcss'

import DefaultTheme from 'vitepress/theme'
import HomeFeaturesAfter from './HomeFeaturesAfter.vue'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: HomeFeaturesAfter
}