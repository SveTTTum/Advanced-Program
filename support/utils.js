const getRandomNumberInRange = (lower = 0, upper = 10) => {
    if (isNaN(lower) || isNaN(upper)) {
      console.error("lower and upper must be valid numbers");
      return
    }
    lower = Math.ceil(lower);
    upper = Math.floor(upper);
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
  }