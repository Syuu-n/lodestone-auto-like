const { argv } = require('yargs')
const createTestCafe = require('testcafe')
const path = require('path')

const onePass = argv.onePass
console.info(`Your OnePassword: ${onePass}`)

process.env.ONE_PASSWORD = onePass

let testcafe = null
createTestCafe('localhost', 1337, 1338)
  .then(tc => {
    testcafe = tc
    const runner = tc.createRunner()

    return runner
      .src(path.resolve(__dirname, 'test.js'))
      .browsers('chrome')
      .run()
  })
  .then(failedCount => {
    console.info("Auto like process success!")
    testcafe.close()
  })
  .catch(error => {
    console.error('Error', error)
    testcafe.close()
  })