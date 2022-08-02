new Vue({
  el: "#app",
  data: {
    name: "Ali ahmadi",
    count: 1,
    email: "",
    html: '<a href="https:www.farsroid.com">click me</a>',
    cars: ["Kia", "MVM", "Porche", "Mercedes", "BMW", "Hyundai"],
    carsObject: [
      { name: "Kia" },
      { name: "MVM" },
      { name: "Porche" },
      { name: "Mercedes" },
      { name: "BMW" },
      { name: "Hyundai" },
    ],
    newCar: "",
  },
  methods: {
    insertCar() {
      this.carsObject.push({ name: this.newCar });
      this.newCar = "";
    },
  },
});
