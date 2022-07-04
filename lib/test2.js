module.exports = function (testCases, testFunc) {
  testCases.every(({ i1, i2, expected }) => {
    console.log(`Test with input = ${i1?.toString()} & ${i2?.toString()}`);
    const result = testFunc(i1, i2);
    if (result?.toString() !== expected?.toString()) {
      console.error(`Failed`);
      console.error(`expected = ${expected?.toString()}`);
      console.error(`actual = ${result?.toString()}`);
      return false;
    }
    console.log(`Success: ${result?.toString()}`);
    return true;
  });
};
