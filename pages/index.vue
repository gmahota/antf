<template>
  <div>
    <hero />
    <theme-features />
  </div>
</template>

<script>
export default {
  layout: "home",
  components: {
    Hero: () => import("@/components/sections/Hero"),
    ThemeFeatures: () => import("@/components/sections/ThemeFeatures")
  }
};
</script>