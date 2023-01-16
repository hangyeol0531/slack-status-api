module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "src",
  testMatch: [
    "**/*.spec.[jt]s?(x)",
    "**/*.test.[jt]s?(x)"
  ],
}