module.exports = function (testCases, testFunc) {
  testCases.every(({ input, expected }) => {
    console.log(`Test with input = ${input?.toString()}`);
    const result = testFunc(input);
    if (result !== expected) {
      console.error(`Failed`);
      console.error(`expected = ${expected?.toString()}`);
      console.error(`actual = ${result?.toString()}`);
      return false;
    }
    console.log(`Success: ${result?.toString()}`);
    return true;
  });
};
