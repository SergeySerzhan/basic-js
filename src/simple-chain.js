import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chain: "",
  values: [],

  getLength() {
    return this.values.length;
  },

  addLink(value = "") {
    if (this.values.length === 0) this.chain = `( ${value} )`;
    else this.chain += `~~( ${value} )`;
    this.values.push(` ${value} `);
    // console.log(this.chain);
    return this;
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position > this.values.length ||
      position <= 0
    ) {
      this.chain = "";
      this.values = [];
      throw Error("You can't remove incorrect link!");
    }

    if (position === 1) {
      this.chain = this.chain.slice(4 + this.values[0].length);
      this.values.splice(0, 1);
      // console.log(this.chain);
      return this;
    } else {
      let deleteLength = 0;
      for (let i = 0; i < position - 1; i++) {
        deleteLength += this.values[i].length;
      }
      this.chain = this.chain.split("");
      this.chain.splice(
        3 + 4 * (position - 2) + deleteLength,
        4 + this.values[position - 1].length
      );
      this.chain = this.chain.join("");
      this.values.splice(position - 1, 1);
      // console.log(this.chain);
      return this;
    }
  },

  reverseChain() {
    if (this.values.length <= 1) return this;
    this.chain = this.chain.split("~~").reverse().join("~~");
    // console.log(this.chain);
    return this;
  },

  finishChain() {
    this.values = [];
    let result = this.chain;
    this.chain = "";
    return result;
  },
};
