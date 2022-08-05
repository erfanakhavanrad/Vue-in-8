<template>
  <div>
    <MyHeader :index="this.index" />
    <b-container class="bv-example-row">
      <b-row>
        <b-col SM="6" offset="3">
          <MyContent
            v-if="questionList.length"
            :cQuestion="questionList[index]"
            :next="onNext"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyContent from "./components/MyContent.vue";

export default {
  name: "App",
  data() {
    return {
      questionList: [],
      index: 0,
    };
  },
  methods: {
    onNext() {
      console.log("next");
      if (this.index < 9) {
        this.index++;
      }
    },
  },
  components: {
    MyHeader,
    MyContent,
  },
  mounted: function () {
    fetch("https://opentdb.com/api.php?amount=10&category=11&type=multiple", {
      method: "GET",
    })
      .then((response) => {
        // console.log(response.json());
        return response.json();
      })
      .then((result) => {
        this.questionList = result.results;
      });
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
