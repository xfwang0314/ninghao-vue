<template>
  <!-- <h3>{{ this.$store.state.name }}</h3> -->
  <div v-if="loadding">
    <!-- <h3>currentUser：{{ userStore.currentUser }}</h3> -->
    <h3>currentUser：{{ getterCurrentUser }}</h3>
    <h3>state : {{ name }}</h3>
    <h3>mapState : {{ appName }}</h3>
    <h3>mapGetters : {{ getName }}</h3>
    <h3 @click="onClickName">mapMutations : {{ getName }}</h3>
  </div>
  <div v-else>
    加载中
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['name']),
    ...mapState(['loadding']),
    ...mapState(['userStore']),
    ...mapState({
      appName: 'name',
    }),
    ...mapGetters({
      getterCurrentUser: 'userStore/getterCurrentUser',
    }),
    ...mapGetters(['getName']),
  },
  created() {
    setTimeout(() => {
      //this.$store.dispatch('getName');
      this.getNameAsync();
      this.getCurrentUser();
    }, 3000);
  },
  methods: {
    ...mapMutations(['setName']),
    ...mapActions({
      getNameAsync: 'getNameAsync',
      getCurrentUser: 'userStore/getCurrentUser',
    }),
    onClickName() {
      this.setName('您好');
      // if (this.name === '王晓飞') {
      //   this.$store.commit('setName', '您好');
      // } else {
      //   this.$store.commit('setName', '王晓飞');
      //}
    },
  },
};
</script>
