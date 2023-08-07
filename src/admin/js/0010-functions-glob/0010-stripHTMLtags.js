/**
* STRIP HTMLS TAGS
* DESC: Before displaying data on frontend make sure to remove script tags < and >.
* @param str -> string
* @since 1.0.0
*/
function stripHTMLtags(str) {
    var map = {
        '<': '',
        '>': ''
    };
    return str.replace(/[<>]/g, function(m) { return map[m]; });
}
