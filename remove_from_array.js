const removeFromArray = function (array, ...args) {
  console.log(array);
  console.log(args);

  const output = array.filter(function (obj) {
    return args.indexOf(obj) === -1;
  });
  console.log(output);
};
removeFromArray([1, 2, 3, 4], 3, 2, "taco");
