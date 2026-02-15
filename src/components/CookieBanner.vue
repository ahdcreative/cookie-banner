<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps({
  buttonText: {
    type: String,
    default: 'Got it!',
  },
  message: {
    type: String,
    default: 'This website uses cookies to ensure you get the best experience on our website.',
  },
  theme: {
    type: String,
    default: 'base', // base, dark, lime
  },
  storageName: {
    type: String,
    default: 'cookie:accepted',
  },
});

const isOpen = ref(false);

const accept = () => {
  isOpen.value = false;
  localStorage.setItem(props.storageName, 'true');
};

onMounted(() => {
  if (!localStorage.getItem(props.storageName)) {
    isOpen.value = true;
  }
});
</script>

<template>
  <transition name="slide-up">
    <div v-if="isOpen" class="cookie-banner" :class="`theme-${theme}`">
        <div class="cookie-banner__content">
            <slot name="message">
                <p>{{ message }}</p>
            </slot>
        </div>
        <div class="cookie-banner__footer">
            <button class="cookie-banner__button" @click="accept">
                {{ buttonText }}
            </button>
        </div>
    </div>
  </transition>
</template>

<style scoped>
.cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    z-index: 9999;
    flex-direction: column;
}

@media (min-width: 768px) {
    .cookie-banner {
        flex-direction: row;
        padding: 1rem 2rem;
    }
}

.cookie-banner__content {
    margin-bottom: 1rem;
    text-align: center;
}

@media (min-width: 768px) {
    .cookie-banner__content {
        margin-bottom: 0;
        text-align: left;
        margin-right: 1rem;
    }
}

.cookie-banner__button {
    background: #000;
    color: #fff;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: opacity 0.2s;
}

.cookie-banner__button:hover {
    opacity: 0.8;
}

/* Themes */
.theme-dark {
    background: #1f2937;
    color: #fff;
}
.theme-dark .cookie-banner__button {
    background: #fff;
    color: #1f2937;
}

.theme-lime {
    background: #f7fee7;
    color: #365314;
    border-top: 2px solid #84cc16;
}
.theme-lime .cookie-banner__button {
    background: #84cc16;
    color: #fff;
}

.theme-dark-lime {
    background: #1f2937;
    color: #fff;
    border-top: 1px solid #374151;
}
.theme-dark-lime .cookie-banner__button {
    background: #84cc16;
    color: #fff;
}

/* Transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
