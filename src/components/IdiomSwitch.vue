<template>
  <select id="locale" v-model="$i18n.locale" style="color:black; background-color: white;">
    <option v-for="locale in locales" :key="locale.key" :value="locale.key">
      {{ locale.label }}
    </option>
  </select>
</template>
  
<script>
export default {
  data: () => ({
    locales: [
      { key: "es", label: "Español" },
      { key: "en", label: "English" }
    ]
  }),
  watch: {
    "$i18n.locale": {
      handler(locale) {
        localStorage.setItem("locale", locale);
      }
    }
  }
};
</script>
