<template>
  <div>用户登录 {{ username }}</div>
  <input type="text" ref="username" />
  <input type="text" />
  <br />
  <app-input
    :model-value="username"
    @update:model-value="username = $event"
  ></app-input>
</template>
<script lang="ts">
import AppInput from '@/app/components/app-input.vue';
export default {
  data() {
    return {
      username: '',
    };
  },
  components: {
    AppInput,
  },
  methods: {},
  created() {
    console.log('user login created');
  },
  mounted() {
    console.log('user login mounted');
    const username: any = this.$refs.username;
    username.focus();
  },
  updated() {
    console.log('user login updated');
  },
  unmounted() {
    console.log('user login unmounted');
  },
  beforeCreate() {
    console.log('user login beforeCreate');
  },
  beforeMount() {
    console.log('user login beforeMount');
  },
  beforeUpdate() {
    console.log('user login beforeUpdate');
  },
  beforeUnmount() {
    console.log('user login beforeUnmount');
  },
};
</script>
