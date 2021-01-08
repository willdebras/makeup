let infomap = {
  11: "mild alcohol poisoning",
  12: "winking owl red blend",
  13: "shrek forever after",
  14: "los angeles river",
  21: "miami spraytan",
  22: "fleetwood mac dreams",
  23: "clean river",
  24: "extinct bumblebee"
 
}

let hex = {
  11: "#fee182",
  12: "#f17572",
  13: "#97c269",
  14: "#a18b81",
  21: "#ffd699",
  22: "#7f88d0",
  23: "#53c7fd",
  24: "#fed44c"
  
}

let desc = {
  11: "is the color of the year for 2021, a truly perfect shade to drink mimosas with your friends and resume sending gifs from passé nbc television shows like Friends on tinder",
  12: "is a beautiful shade to wear when you're lying in bed drinking Aldi branded winking owl wines alone at home wishing someone would pay attention to you",
  13: "is a reminder of your youth, a spirited fuck-you to adult-life, an encouragement to be who you are inside, a big fucking ogre",
  14: "is a earthy, edgy shade for nights out in your urban locale and the subsequent two mile walk home because your non-profit salary doesn't have room for $19 ubers",
  21: "is a perfect color to wear on your beach trip to floridian cities ravaged by the covid-19 pandemic when you are on vacation after getting your vaccine in april. wear with or without a mask and this look will certainly draw wandering eyes.",
  22: "is a shade to honor our heroes of tik tok, bravely facing the social world. wear this color on top of a longboard (or pennyboard if you're 20), drinking ocean spray cut with a few splashes of vodka",
  23: "is a friendly spring blue reminiscent of fresh water by a cabin your parents used to drag you to as a child that you never appreciated, unaware that the world had potential for so much worse",
  24: "is the color of americana's favourite soon-to-bee-extinct species, the bumblebee. a great color for enjoying spring days while they still exist, before climate cataclysm takes us all"
 
}



$('.swatch').click(function() {
  
  
  var idtext = infomap[this.id];
  
  var desctext = desc[this.id];
  
  var hextext = hex[this.id];
 
  
    $('.hidden').removeClass('hidden');
  $("#titletext").addClass('textitem');
  $("#bodytext").addClass('textitem');
  
    $("#info").addClass('hidden');
    $("#webtitle").removeClass('shimmer');
  
  $('.square').css("background-color", hextext);
  
  $("#titletext").text(idtext);
  $("#bodytext").text(idtext + " " + desctext);
  $("#hexcode").text(hextext);
  
});