const {
  index,
  store,
  update,
  destroy,
} = require("./controllers/FruitController.js");

const main = () => {
  console.log("Method index - Menampilkan Buah");
  index();
  console.log("\n");
  store("Pisang");
  console.log("\n");
  update(0, "Mangga");
  console.log("\n");
  destroy(1);
};

main();
