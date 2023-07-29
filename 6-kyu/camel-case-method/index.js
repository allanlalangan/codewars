String.prototype.camelCase = function () {
  const split = this.split(" ");
  const camelCase = split
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  return camelCase;
};

"test case".camelCase(); // TestCase
"camel Case method".camelCase(); //CamelCaseMethod
