const Mock = require('mockjs')
// 使用mockjs模拟数据
const data = Mock.mock({
  'data|10': [
    {
      'name': '@name',
      'title': '@title(1)',
      'time': '@time',
      'age|1-100': 100,
      'color': '@color',
      'fullName': '@cname',
      'url': '@url',
      'domain': '@domain',
      'image': '@image(220,#f00)'
    }
  ],
  'date|30': [
    {
      'name': '@name'
    }
  ]
})

export default {
  data
}
