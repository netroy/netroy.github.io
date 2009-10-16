/*
function ta(a){a=parseInt(((new Date).getTime()-Date.parse(a))/1E3);if(a<0)return false;if(a<=60)return"A minute ago";if(a<3600)return parseInt(a/60)+" minutes ago";if(a<=5400)return"An hour ago";if(a<84600)return Math.round(a/3600)+" hours ago";return a<129600?"A day ago":Math.round(a/86400)+" days ago"};
function l(a){if(typeof a!="string")return"";a=a.replace(/(https?:\/\/[^\s]+)/i,"<a href='$1' class='ext' target='_blank' rel='nofollow'>$1</a>");a=a.replace(/(^|[\s,\.])@([A-Za-z0-9_]+)/g,"$1@<a href=\"http://www.twitter.com/$2\" target='_blank'>$2</a>");return a=a.replace(/(^|[\s,\.])#([A-Za-z0-9_]+)/g,"$1#<a href=\"http://search.twitter.com/search?had_popular=true&q=$2\" target='_blank'>$2</a>")};

var apiurl = "http://search.twitter.com/search.json?q=+netroy+OR+from:netroy+OR+%40netroy&callback=lTw&rpp=20&_crnd="+Math.random();window.netroy = window.netroy||{};
function lTw(d){netroy.tweets=d.results;netroy.index=0;updateTweet();}

function updateTweet(){
  var tweet = netroy.tweets[netroy.index++ % 10];
  var h=[];
  h.push("<span class='text georgia'><b>&#147;</b> "+l(tweet.text)+" <b>&#148;</b></span>");
  h.push("<a href='http://inagist.com/"+tweet.from_user+"/"+tweet.id+"' target='_blank'>");
  h.push("<span class='time verdana'>"+ta(tweet.created_at)+"</span></a>");
  if(tweet.from_user!="NetRoY"){
    h.push("<span class='user verdana'> by ");
    h.push("<a href='http://twitter.com/"+tweet.from_user+"' target='_blank'>");
    h.push(tweet.from_user+"</a></span>");
  }
  document.getElementById("tweets").innerHTML = h.join('');
  setTimeout(updateTweet,10000);
}

(function(){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.async=true;a.src=apiurl;var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();
*/