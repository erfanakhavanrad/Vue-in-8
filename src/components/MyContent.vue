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
          :class="correctFun(i)"
        >
          {{ answersList }}
        </b-list-group-item>
      </b-list-group>

      <b-button
        variant="primary"
        href="#"
        @click="submitAnswer"
        :disabled="cIndex === null || answered"
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
    increment: Function,
  },
  data() {
    return {
      cIndex: null,
      shuffledAnswes: [],
      correctAnswer: null,
      answered: false,
    };
  },
  watch: {
    cQuestion: {
      // Runs watch method in initial start
      immediate: true,
      handler() {
        this.cIndex = null;
        this.shuffleAnswers();
        this.answered = null;
        this.correctAnswer = null;
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
    submitAnswer() {
      let is_correct = false;
      if (this.cIndex == this.correctAnswer) {
        is_correct = true;
      }
      this.answered = true;
      this.increment(is_correct);
    },
    correctFun(index) {
      let answerClass = "";
      if (!this.answered && this.cIndex === index) {
        answerClass = "selected";
      } else if (this.answered && index === this.correctAnswer) {
        answerClass = "correct";
      } else if (
        this.answered &&
        index === this.cIndex &&
        index !== this.correctAnswer
      ) {
        answerClass = "incorrect";
      }
      return answerClass;
    },
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
