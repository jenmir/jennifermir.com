//<script type="text/javascript">


console.log("entered feedtest.js");

function displayCL (feedResponse) {

  var i = feedResponse.entries.length;
  var j=0;
  for (j=0; j<i; j++)
  {
   var itemString = feedResponse.entries[j].contentSnippet;
   var publishedDate = feedResponse.entries[j].publishedDate;
   var itemLink = feedResponse.entries[j].link;
    // Clean up strings manually as needed

   //parse it
   //var itemsArray = itemString.split("/");

   //unordered list
   var html = '<h2>' + feedResponse.entries[j].title + '</h2>';
    html += '<ul>';
   //html += '<li>' + itemsArray[0] + '</li>';
    html += '<li>Date: ' + publishedDate + '</li>';
    html += '<li>' + itemLink + '</li>';
    html += '<li>' + itemString + '</li>';
    html += '</ul>';

    $('body').append(html);
	$('body').delay(5000).fadeIn();
	$(window).scroll(function () {  
            console.log("scrolling");           
    });

   }
  //  $(document).scrollIntoView(true);
  // $('body').animate({ scrollTop: $(object).offset().top - 30 }, 1000, 'linear');
   
   // console.log("DisplayCL " + html); 
} 

function parseRSS(url, callback) {
  console.log("parse RSS");
  $.ajax({
    url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      callback(data.responseData.feed);
    }
  });
}

$(document).ready(function() {              
  console.log("document ready");
  parseRSS("http://sfbay.craigslist.org/search/muc?query=sax&srchType=A&format=rss",displayCL);
});

//</script>
