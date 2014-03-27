var original_value = $('#pagelet_timeline_likes_nav_top span.stats').html()
var likes = parseFloat(original_value)
new_likes = likes * 2

var trailing = isNaN(original_value.slice(-1))

if(trailing) {
    var trailing_char = original_value.slice(-1)
    $('#pagelet_timeline_likes_nav_top span.stats').html("" +new_likes +trailing_char)
} else {
  $('#pagelet_timeline_likes_nav_top span.stats').html(new_likes)
}
var full_content = $('#fbTimelineHeadline .fsm.fwn.fcg').html()
var original_full_value = full_content.match(/[\d(\,|\.)]+(?=\s[likes|personen vinden dit leuk])/g)[0]

var normalized_value = original_full_value.replace(/\,/gi, "")

var number = parseInt(normalized_value)

var seperator = ","
if(original_full_value.indexOf(',') === -1) {
  seperator = "."
}

new_like_count = accounting.formatNumber((number * 2), 0, seperator)

var replace_content = full_content.replace(original_full_value.toString(), new_like_count)
$('#fbTimelineHeadline .fsm.fwn.fcg').html(replace_content)
