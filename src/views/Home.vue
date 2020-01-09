<template>
  <div class="home">
    <button @click="sumbit">登录</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {},
  methods: {
    sumbit() {
      let params = {
        username: "18229060103",
        password: "123456"
      };
      this.$http
        .fetchPost("/rest/saas_user/login.htm", params)
        .then(res => {
          window.console.log(res);
          this.$cookies.set("userToken", res.userToken, "2h");
          return Promise.resolve();
        })
        .then(() => {
          this.$store.dispatch("getUserInfo");
        });
    }
  }
};
</script>

<style lang="less">
button {
  width: 20rem;
}
</style>
