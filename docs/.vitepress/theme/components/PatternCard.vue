<template>
    <div class="pattern-card" :class="category.toLowerCase()">
      <div class="pattern-card-icon">
        <slot name="icon">
          <div class="default-icon">{{ icon }}</div>
        </slot>
      </div>
      <div class="pattern-card-content">
        <h3 class="pattern-card-title">{{ title }}</h3>
        <p class="pattern-card-description">{{ description }}</p>
        <a :href="link" class="pattern-card-link">Saiba mais</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PatternCard',
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      category: {
        type: String,
        default: 'creational',
        validator: (value) => ['creational', 'structural', 'behavioral'].includes(value.toLowerCase())
      },
      icon: {
        type: String,
        default: '🔧'
      }
    }
  }
  </script>
  
  <style>
  .pattern-card {
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin-bottom: 1.5rem;
    background-color: var(--vp-c-bg-soft);
    border-left: 4px solid transparent;
  }
  
  .pattern-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  
  .pattern-card.creational {
    border-left-color: var(--dp-c-blue);
  }
  
  .pattern-card.structural {
    border-left-color: var(--dp-c-orange);
  }
  
  .pattern-card.behavioral {
    border-left-color: var(--dp-c-green);
  }
  
  .pattern-card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    padding: 1rem;
    font-size: 2rem;
  }
  
  .pattern-card-content {
    padding: 1.5rem;
    flex: 1;
  }
  
  .pattern-card-title {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    color: var(--vp-c-text-1);
  }
  
  .pattern-card-description {
    margin-bottom: 1rem;
    color: var(--vp-c-text-2);
  }
  
  .pattern-card-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: var(--dp-c-blue);
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s;
  }
  
  .pattern-card.structural .pattern-card-link {
    background-color: var(--dp-c-orange);
  }
  
  .pattern-card.behavioral .pattern-card-link {
    background-color: var(--dp-c-green);
  }
  
  .pattern-card-link:hover {
    opacity: 0.9;
  }
  
  .default-icon {
    font-size: 2rem;
  }
  
  @media (max-width: 640px) {
    .pattern-card {
      flex-direction: column;
    }
    
    .pattern-card-icon {
      width: 100%;
      padding: 1rem 0;
    }
  }
  </style>
  
  