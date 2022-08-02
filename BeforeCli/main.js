Vue.component("caristomponent", {
  props: ["passingobject"],
  template: `
  <ul>
  <li v-for="car in passingobject">{{car.name}} </li>
  </ul>
  `,
});
const app = new Vue({
  el: "#app",
  data: {
    name: "Ali ahmadi",
    carsobject: [
      { name: "Kia" },
      { name: "MVM" },
      { name: "Porche" },
      { name: "Mercedes" },
      { name: "BMW" },
      { name: "Hyundai" },
      { name: "Benz" },
    ],
    newCar: "",
  },
  methods: {
    insertCar() {
      this.carsobject.push({ name: this.newCar });
      this.newCar = "";
    },
  },
  computed: {
    carName() {
      if (this.newCar.length >= 3) {
        return "This car is valid: ";
      } else {
        return "This car is NOT valid: ";
      }
    },
  },
  filters: {
    capitalize(value) {
      return value.toUpperCase();
    },
    myCar(value) {
      return "My car is: " + value;
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("Created");
  },
  beforemount() {
    console.log("Beforemount");
  },
  mounted() {
    console.log("Mounted");
  },
  beforeupdate() {
    console.log("Beforeupdate");
  },
  updated() {
    console.log("Updated");
  },
  beforedestroy() {
    console.log("Beforedestroy");
  },
  destroyed() {
    console.log("Destroyed");
  },
});
