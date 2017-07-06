$(document).ready(function(){
      $('.carousel').carousel();


	var tips = [ 
				"After the ceremony, try not to get separated. If one of you goes off to thank someone for coming, the other should join. People attending weddings are excited as well, and if you don't stick together, you could get separated for lengthy periods of time. The wedding day is about the two of you, so try to do everything that you are able to do together.", 
				"Make a list of about 5 things that are super important to you. Could be about the food, flowers, pics you want, music you want, the meal you eat the morning of, etc. Make sure you get those things. Let everything else go. If you try to make everything perfect, then you'll be disappointed when, inevitably, a few of those things don't work out.",
				"Take the time to have fun. This is going to be the only time you're there with all of those specific people all at he same time. Enjoy it.",
				"Tailor your music to appeal to ALL guests. Grandma is probably not too interested in listening to Skrillex for example.",
				"Unsure about your caterer? Ask to visit a wedding they are catering for. You'll get to see how they operate. Dress well if doing this. Odds are you might be able to sample the food on the day too (whcih can be quite different from the food that you get at a tasting session.)",
				"Make sure the dam cake is tasty! So much cake goes in the bin because clients opted for something that looks fab but then tastes like cardboard (because client asked cake maker to reduce cost by cheapening the ingredients). Bonus tip: do ensure you have a decent cake stand.",
				"The most important thing to remember is that at the end of the day you will be married to the love of your life. Don't let the little disasters or mishaps get in the way of joy and happiness of your wedding day." 
				];
    var tipsId = 0;

    window.setInterval(function () {
        $('#tips').html(tips[tipsId]);
        tipsId = tipsId + 1;
        if(tipsId >= tips.length) { tipsId = 0; }
    }, 20000);
});