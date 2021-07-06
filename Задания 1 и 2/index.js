///////////Задание№ 1 + 2//////////////////
let r = /\B'|'\B/g;
let s = "'ble' 'bla' aren't"
s = s.replace(r, "\"");
console.log(s);


