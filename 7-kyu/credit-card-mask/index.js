// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
  if (cc.length <= 4) return cc;

  const last_4_digits = cc.slice(cc.length - 4);
  const masked = last_4_digits.padStart(cc.length, "#");
  return masked;
}

maskify("4556364607935616"); // "############5616";
maskify("1"); // '1'
maskify("11111"); // "#1111"
