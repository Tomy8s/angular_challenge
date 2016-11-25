exports.config = {
  seleniumAddress: 'http://localhost:444/wd/hub',
  specs: ['e2e/*.js'],
  baseUrl: 'http://localhost:8080'
}
