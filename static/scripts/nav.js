function scrollToNavItem() {
    var path = window.location.href.split('/').pop().replace(/\.html/, '');
    document.querySelectorAll('nav a').forEach(function(link) {
      var href = link.attributes.href.value.replace(/\.html/, '');
      if (path === href) {
        link.scrollIntoView({block: 'center'});
        return;
      }
    })
  }

  scrollToNavItem();

  /** 
   * The doc is deployed in a non root directory,
   * an error will occur when returning home.
   * @description
   *  location.href/doc/ 
   *  location.href/
  */
  function goHome() {
    var pathnames = window.location.pathname.split('/')
    if (pathnames.length > 2) {
      var path = window.location.origin + '/' + pathnames[1] + '/'
      window.location.href = path
    } else {
      window.location.href = window.location.origin
    }
  }