module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "./test",
  testMatch: [
    "**/*.spec.[jt]s?(x)",
    "**/*.test.[jt]s?(x)"
  ],
}