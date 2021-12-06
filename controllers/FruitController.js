const fruits = require("../data/fruits.js");

const index = () => {
  for (const fruit of fruits) console.log(fruit);
};

const store = (name) => {
  fruits.push(name);
  console.log(`Method store - Menambahkan Buah ${name}`);
  index();
};

const update = (position, name) => {
  fruits.splice(position, 1, name);
  console.log(
    `Method update - Update data index ke-${position} menjadi ${name}`
  );
  index();
};

const destroy = (position) => {
  fruits.splice(position, 1);
  console.log(`Method destroy - Menghapus data index ke-${position}`);
  index();
};

module.exports = { index, store, update, destroy };
