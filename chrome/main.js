var original_value = $('#pagelet_timeline_likes_nav_top span.stats').html()
if(original_value) {
  var likes = parseFloat(original_value)
  var new_likes = likes * 2
  var trailing = isNaN(original_value.slice(-1))
  if(!aprilFools()) {
    if(trailing) {
        if(original_value) {
          var trailing_char = original_value.slice(-1)
        } else {
          var trailing_char = ''
        }
        $('#pagelet_timeline_likes_nav_top span.stats').html("" +new_likes +trailing_char)
    } else {
      $('#pagelet_timeline_likes_nav_top span.stats').html(new_likes)
    }
  }
}

var full_content = $('#fbTimelineHeadline .fsm.fwn.fcg').html()
if(full_content) {
  var original_full_value = full_content.match(/[\d(\,|\.)]+(?=\s[likes|personen vinden dit leuk])/g)[0]

  var normalized_value = original_full_value.replace(/\,/gi, "")

  var number = parseInt(normalized_value)

  var locale = "en"
  if(original_full_value.indexOf(',') === -1) {
    locale = "nl"
  }


  var new_like_count = (number * 2).toLocaleString(locale)
  var replace_content = full_content.replace(original_full_value.toString(), new_like_count)

  if(aprilFools()) {
    var expired_content = full_content + "<br /><p><a href='http://www.wirelab.nl/aprilfools?utm_source=likedoubler&utm_medium=extension'>Your free like doubler trial has expired</a><p>"
    $('#fbTimelineHeadline .fsm.fwn.fcg').html(expired_content);
  } else {
    $('#fbTimelineHeadline .fsm.fwn.fcg').html(replace_content)
  }
}

function aprilFools() {
  var date = new Date()
  if ((date.getMonth() === 3 && date.getDate() > 1) || (date.getMonth() > 3)) {
    return true
  } else {
    return false
  }
}
