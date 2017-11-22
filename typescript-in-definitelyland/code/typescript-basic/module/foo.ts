// default を bar という名前に hello 関数をそのままの名前で import
import bar, {hello} from './bar';
// モジュール全体を bar2 に束縛
import * as bar2 from './bar';
// ECMAScript 2015 形式のモジュールでも CommonJS 形式で import できる
import bar3 = require('./bar');

import log from "../../utils";

log('hello()', hello());
log('bar()', bar());
log('bar2.hello()', bar2.hello());
log('bar2.default()', bar2.default());
log('bar3.hello()', bar3.hello());
log('bar3.default()', bar3.default());

// export = xxx 形式の場合、モジュール全体を buzz に束縛
import * as buzz from './buzz';
import buzz2 = require('./buzz');

log('buzz()', buzz());
log('buzz2()', buzz2());