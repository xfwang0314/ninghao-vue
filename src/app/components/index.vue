<template>
  <div @click="onClickText">
    你好！Index。
  </div>
</template>
<script>
export default {
  methods: {
    onClickText() {
      //this.$router.push('/about');
      //this.$router.replace('/about');
      this.$router.push({ name: 'about' });
    },
  },
};
</script>
