/**
 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
 */
    
var disqus_config = function () {
    this.page.url = '#{data.post.schema.paths.slug}';
    this.page.identifier = '#{data.post.schema.paths._id}';
    this.page.title = '#{data.post.title}';
};

(function() {
    var d = document, s = d.createElement('script');
    
    s.src = '//fogettiblog.disqus.com/embed.js';
    
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();