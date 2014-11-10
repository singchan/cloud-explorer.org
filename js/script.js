/*                       *\
   Google analytics widget
\*                       */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-19608894-22', 'auto');
ga('send', 'pageview');

// notify google when page change
function onPageChangeGA(newUrl){
    var currentPage = newUrl.substr(newUrl.indexOf('#!page-') + 7);
    ga('send', 'pageview', {
      'page': '/' + currentPage,
      'title': currentPage
    });
}
$(window).bind( 'hashchange', function (e){
    onPageChangeGA(e.originalEvent.newURL);
});
