<template>
    <transition name="fade">
      <div v-if="show" class="back-to-top" @click="scrollToTop">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    name: 'BackToTop',
    data() {
      return {
        show: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        this.show = window.pageYOffset > 300
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }
  }
  </script>
  
  <style scoped>
  .back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--dp-c-blue);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: background-color 0.3s, transform 0.3s;
    z-index: 100;
  }
  
  .back-to-top:hover {
    background-color: var(--dp-c-blue-light);
    transform: translateY(-5px);
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>