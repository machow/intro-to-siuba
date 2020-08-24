if (process.isServer) {
  global.navigator = {}
  global.navigator.platform = "Mac"
  global.document = document
  global.Element = function() {}
}


