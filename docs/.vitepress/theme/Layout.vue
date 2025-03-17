<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BackToTop from './components/BackToTop.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <BackToTop />
    </template>
  </Layout>
</template>