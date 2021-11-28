<template>
  <!-- <keep-alive> -->
  <component :is="currentCompoent"></component>
  <!-- </keep-alive> -->
  <small @click="onClickHintText">{{ hintText }}</small>
</template>
<script lang="ts">
import UserLogin from '@/app/components/user-login.vue';
import UserRegister from '@/app/components/user-register.vue';
export default {
  components: {
    UserLogin,
    UserRegister,
  },
  data() {
    return {
      currentCompoent: 'UserLogin',
      hintText: '还没有账户，点击注册。',
    };
  },
  methods: {
    onClickHintText() {
      switch (this.currentCompoent) {
        case 'UserLogin':
          this.currentCompoent = 'UserRegister';
          this.hintText = '注册成功，点击登录!';
          break;
        case 'UserRegister':
          this.currentCompoent = 'UserLogin';
          this.hintText = '已有账户，点击登录!';
      }
    },
  },
};
</script>
