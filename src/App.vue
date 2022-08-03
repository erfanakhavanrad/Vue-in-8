<template>
  <div>
    <MyHeader/>
    <MyContent/>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyContent from "./components/MyContent.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyContent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
