<template>
  <div>
    {{ t("welcome") + " to samh travels" }}
  </div>
</template>
<script setup>
const { t, locale } = useI18n();
useHead(() => ({
  title: locale.value === "ar" ? "مرحبًا" : "Welcome",
}));
</script>
