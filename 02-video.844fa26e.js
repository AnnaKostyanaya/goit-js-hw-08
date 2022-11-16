!function(){var e=document.querySelector("#vimeo-player"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)}));o.on("play",(function(e){}))}();
//# sourceMappingURL=02-video.844fa26e.js.map
