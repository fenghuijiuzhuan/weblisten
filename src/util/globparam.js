define([], function () {
  var glob_hash = 'index';

  function isNowPage(param) {
    if(param == glob_hash){
      return false
    }else{
    glob_hash = param
      return true
    }
  }
  return isNowPage
})