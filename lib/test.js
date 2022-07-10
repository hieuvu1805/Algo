module.exports = function (testCases, testFunc) {
  const success = testCases.every(({ input, expected }) => {
    const result = testFunc(...input);
    if (result?.toString() !== expected?.toString()) {
      console.error(`Failed`);
      console.log(`Test with input = ${input?.toString()}`);
      console.error(`expected = ${expected?.toString()}`);
      console.error(`actual = ${result?.toString()}`);
      return false;
    }
    return true;
  });
  if (success) {
    console.log(`Success: ${testFunc.name}`);
  }
};
