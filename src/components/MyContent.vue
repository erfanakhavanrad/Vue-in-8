<template>
  <div>
    <b-jumbotron>
      <template>Question: {{ cQuestion.question }}</template>

      <hr class="my-4" />

      <b-list-group>
        <b-list-group-item
          v-for="(answersList, i) in shuffledAnswes"
          :key="i"
          @click="changeIndex(i)"
          :class="[cIndex === i ? 'selected' : '']"
        >
          {{ answersList }}
        </b-list-group-item>
      </b-list-group>

      <b-button variant="primary" href="#" @click="submitAnswer"
        >Submit</b-button
      >
      <b-button variant="success" href="#" @click="next">Next</b-button>
    </b-jumbotron>
  </div>
</template>
<script>
import _ from "lodash";
export default {
  props: {
    cQuestion: Object,
    next: Function,
  },
  data() {
    return {
      cIndex: null,
      shuffledAnswes: [],
      correctAnswer: null,
    };
  },
  watch: {
    cQuestion: {
      immediate: true,
      handler() {
        this.cIndex = null;
        this.shuffleAnswers();
      },
    },
  },
  methods: {
    changeIndex(i) {
      this.cIndex = i;
      console.log(i);
    },
    shuffleAnswers() {
      let answers = [
        ...this.cQuestion.incorrect_answers,
        this.cQuestion.correct_answer,
      ];
      this.shuffledAnswes = _.shuffle(answers);
      // this.correctAnswer = this.cQuestion.correct_answer;
      this.correctAnswer = this.shuffledAnswes.indexOf(
        this.cQuestion.correct_answer
      );
    },
    submitAnswer() {},
  },
  computed: {
    answersMethod() {
      let answers = [...this.cQuestion.incorrect_answers];
      answers.push(this.cQuestion.correct_answer);
      return answers;
    },
  },
};
</script>

<style scoped>
.list-group-item:hover {
  background-color: #eee;
  cursor: pointer;
}
.btn {
  margin: 10px 2px;
}

.selected {
  background-color: lightblue;
}

.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: red;
}
</style>
