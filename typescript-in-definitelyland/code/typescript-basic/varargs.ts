import {log} from "util";

function helloVarargs(...args: string[]) {
  return `Hello, ${args.join(' & ')}`;
}

log(helloVarargs('TS', 'JS'));
