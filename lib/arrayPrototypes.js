Array.prototype.pushUnique = function (...items) {
  items.forEach((item) => {
    if (this.indexOf(item) === -1) this.push(item);
  });

  return this;
};

Array.prototype.swap = function (x, y) {
  const temp = this[y];
  this[y] = this[x];
  this[x] = temp;
  return this;
};
