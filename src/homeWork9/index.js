export const isRectangular = (...args) => {
  if (args.length !== 3) {
    return "Неверный ввод";
  }

  const sortedArgs = args.sort((a, b) => a - b);

  const hypotenuse = sortedArgs.pop();

  return hypotenuse ** 2 === sortedArgs[0] ** 2 + sortedArgs[1] ** 2;
};

export const printCandSOfCircle = () => {
  const radius = +prompt("Enter radius:");

  if (radius) {
    console.log(
      (Math.PI * radius * 2).toFixed(2),
      (Math.PI * radius ** 2).toFixed(2)
    );
  } else {
    console.log("Неверный ввод");
  }
};
