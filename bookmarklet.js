javascript:void (function() {
  var script = document.createElement('script')
  var body = document.querySelector('body')
  var title = document.title
  document.title = 'Sending to Feedbin: ' + title
  script.type = 'text/javascript'
  script.async = true
  script.src = 'https://feedbin.com/bookmarklet/replace_me'.replace('replace_me', Date.now())
  script.setAttribute('data-feedbin-token', 'c1ee0f03e4b66c2a84cb902785430a17')
  script.setAttribute('data-original-title', title)
  script.onerror = function() {
    window.location = 'https://feedbin.com/pages?url=' + encodeURIComponent(window.location.href) + '&title=' + encodeURIComponent(title) + '&page_token=c1ee0f03e4b66c2a84cb902785430a17'
    document.title = title
  }
  body.appendChild(script)
  alert('Page saved to Feedbin')
})()