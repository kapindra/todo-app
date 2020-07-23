<template>
  <div>
    Hey jude There are 
    {{ totalLinks }}
    links
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
 
export default {
  name: 'Stats',
  computed: {
    ...mapGetters ([
      'totalLinks',
    ]),
  },
};
</script>

<style>

</style>
