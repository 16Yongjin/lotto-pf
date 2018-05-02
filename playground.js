const _ = require('partial-js')
 _.go(
  _.range(1, 46),
  _.shuffle,
  _.take(6),
  _.sortBy(_.idtt),
  _.log,
)