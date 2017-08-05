const QueryStringer = function (obj, isPost = false) {
  var qs = ''
  var fr = true
  for (var key in obj) {
    if (obj[key]) {
      if (fr) {
        fr = false
        if (!isPost) {
          qs += '?'
        }
        qs += key + '=' + obj[key]
      }
      else {
        qs += '&' + key + '=' + obj[key]
      }
    }
  }
  return qs
}

export default QueryStringer
