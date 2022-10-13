<template>
  <div>
    <HeaderNavigation></HeaderNavigation>
    <FooterNavigation></FooterNavigation>
  </div>
</template>

<script>

import HeaderNavigation from './components/HeaderNavigation'
import FooterNavigation from './components/FooterNavigation'


export default {
  name: 'App',
  components: {
    HeaderNavigation,
    FooterNavigation
  },
  data: () => ({
    //
  }),
};

</script>
