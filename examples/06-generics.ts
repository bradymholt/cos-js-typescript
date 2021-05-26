// Generics

function first<T>(input: T[]): T {
  return input[0];
}

const firstNumberItem = first([0, 1, 2]);
console.log(firstNumberItem);
const firstStringItem = first(["first", "second", "third"]);
console.log(firstStringItem);

//#region
// const firstItemAsString: string = first([0,1,2]);
//#endregion