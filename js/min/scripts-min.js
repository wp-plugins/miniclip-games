!function($){$(document).ready(function(){$(".mc-game-play").on("click",function(t){t.preventDefault();var e=$(this),n="#"+e.data("target");return $(n).show(),!1}),$(".mc-game-popup").each(function(){var t=$('<a href="" class="mc-close-button">x</a>');t.on("click",function(t){return t.preventDefault(),$(this).parent().hide(),!1}),$(this).append(t)}),$(".mc-game-popup").on("click",function(t){return t.preventDefault(),t.stopPropagation(),$(this).hide(),!1})})}(jQuery);