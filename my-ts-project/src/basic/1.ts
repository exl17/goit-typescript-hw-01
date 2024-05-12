let age: number = 50;
let username: string = "Max";
let toggle: boolean = true;
let empty: null = null;


type CallbackArg = (a: number) => number;
const callback: CallbackArg = (a) => {
  return 100 + a;
};

console.log(callback(40));