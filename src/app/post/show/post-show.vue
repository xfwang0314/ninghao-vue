<template>
  <!-- <div>PostShow {{ $route.params.postId }}</div> -->
  <div>PostShow {{ postId }}</div>
  <router-view />
</template>
<script>
export default {
  props: {
    postId: String,
  },
  created() {
    console.log(this.$route.params.postId);
  },
};
</script>
