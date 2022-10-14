<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/game">Game</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
header {
  padding: 1rem;
  background-color: var(--color-background-soft);
  nav {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 1rem;
    a {
      color: var(--color-text);
      &:visited {
        color: var(--color-heading);
      }
    }
  }
}
</style>
