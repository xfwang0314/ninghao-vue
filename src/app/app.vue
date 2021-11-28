<template>
  <h3>{{ name }}</h3>
  <AppButton @tap="onTapAppButton" @init="onInitAppButton">无量寿经</AppButton>
  <AppButton></AppButton>
  <app-button></app-button>
  <app-button />
  <br />
  <app-demo-button />
  <br />
  <user-profile></user-profile>
</template>
<script lang="ts">
import AppButton from '@/app/components/app-button.vue';
import AppDemoButton from '@/app/components/app-demo-button.vue';
import UserProfile from '@/app/components/user-profile.vue';
export default {
  components: {
    AppButton,
    AppDemoButton,
    UserProfile,
  },
  data() {
    return {
      name: '王晓飞',
    };
  },
  methods: {
    onTapAppButton(data: string) {
      console.log('on tap app button', data);
    },
    onInitAppButton() {
      console.log('回调了onInitAppButton方法...');
    },
  },
};
</script>
<style>
@import './styles/app.css';
</style>
