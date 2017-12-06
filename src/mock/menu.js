const { config } = require('./common')

const { apiPrefix } = config

// id   ->
// bpid -> bread pid
// mpid ->

let database = [
  {
    id: '1',
    icon: 'laptop',
    name: 'Dashboard',
    route: '/dashboard',
  },
  {
    id: '2',
    bpid: '1',
    name: 'Recharts',
    icon: 'code-o',
  },
  {
    id: '21',
    bpid: '2',
    mpid: '2',
    name: 'LineChart',
    icon: 'line-chart',
    route: '/chart/lineChart',
  },
];

module.exports = {
  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
};
