module.exports = process.env.QUICKSORT_COV
  ? require('./lib-cov/*')
  : require('./lib/*')
