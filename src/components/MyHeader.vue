<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Question and answer</b-navbar-brand>

      <b-nav-item href="#" disabled>Question {{ correctCount}} / {{totalCount}}</b-nav-item>
      <!-- <b-nav-item href="#" disabled>Question {{ index + 1 }}/10</b-nav-item> -->
    </b-navbar>
  </div>
</template>
<script>
export default {
  props: {
    // index: Number,
    totalCount: Number,
    correctCount: Number,
  },
};
</script>
