var planData = {};
$(document).ready(function(){
debugger;	
	callFaqData(); 
});



function callFaqData(){
	var fragment = '';
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        templates = xhttp.responseText;
	        loadInitialData();
	    }
	};
	xhttp.open("GET", "public_html/fragments/quotesFragment.html", true);
	xhttp.send();
}

function loadInitialData(){
	loadPlansData();
}

function loadPlansData(){
/*	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var response = xhttp.responseText;
	        planData = JSON.parse(response);*/
	        renderPlans(quotes);
/*	    }
	};
	xhttp.open("GET", "../php/PackageController.php", true);
	xhttp.send();*/
}

function renderPlans(quotesData){
	$('#quotesHolder').empty();
	var fragment = $(templates).filter('#quotescontent').html();
	for(var key in quotesData){
    quotesData[key].key = key;
		$('#quotesHolder').append(Mustache.render(fragment, quotesData[key]));
	}
	$('#quotesHolder').addClass('owl-loaded owl-drag owl-carousel-init');
	var $owl = $('.owl-carousel').owlCarousel({
	    items: 1,
	    loop:true
	});

	$owl.trigger('refresh.owl.carousel');
	
}

var quotes=[
{"QUO_ID":"1","QUO_TITLE":"","QUO_DESC":"Silence is the inner health; mind is the inner disease, inner disturbance.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"1"},
{"QUO_ID":"2","QUO_TITLE":"","QUO_DESC":"Truth is pure awareness.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"2"},
{"QUO_ID":"3","QUO_TITLE":"","QUO_DESC":"Walk, with awareness. Eat, with awareness. Breathe, with awareness.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"3"},
{"QUO_ID":"4","QUO_TITLE":"","QUO_DESC":"The ego is a deep desire to dominate. The ego is a deep desire that says, \"I am special, higher, bigger, greater than you.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"4"},
{"QUO_ID":"5","QUO_TITLE":"","QUO_DESC":"Philosophy means knowing something about the unknown without knowing it. It is just preconceptions, hypotheses, man-constructed ideologies.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"5"},
{"QUO_ID":"6","QUO_TITLE":"","QUO_DESC":"Life should be a continuous celebration, a festival of lights the whole year round. Only then you can grow up, you can blossom. Transform small things into celebration.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"6"},
{"QUO_ID":"7","QUO_TITLE":"","QUO_DESC":"Your aloneness is your essential being.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"7"},
{"QUO_ID":"8","QUO_TITLE":"","QUO_DESC":"I am not against anything -- but nothing should become an addiction. Otherwise you are in a very very confused state.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"","QUO_POS":"8"},
{"QUO_ID":"9","QUO_TITLE":"","QUO_DESC":"Love is the door, it is irrelevant with whom you have fallen in love. Love redeems, neither Jesus, nor Krishna. Love redeems. Fall in love. Love is the only redeeming force. Love is the savior.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"9"},
{"QUO_ID":"10","QUO_TITLE":"","QUO_DESC":"All duality is a mind creation, all duality is created by the clinging and attached mind. When there is no attachment there is no duality.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"10"},
{"QUO_ID":"11","QUO_TITLE":"","QUO_DESC":"I say unto you: The body is your greatest friend. Take care of your body.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"11"},
{"QUO_ID":"12","QUO_TITLE":"","QUO_DESC":"For the spiritual person, this moment is more than enough. He is utterly grateful for whatever is allowed to him. His contentment cannot be disturbed by any desire for more.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"12"},
{"QUO_ID":"13","QUO_TITLE":"","QUO_DESC":"In a real, honest human society, creativity will be honored, respected, because the creative soul is participating in the work of God.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"13"},
{"QUO_ID":"14","QUO_TITLE":"","QUO_DESC":"किसी के साथ किसी भी प्रतियोगिता की कोई जरूरत नहीं है. जेसे तुम हो , आप वही हो . और आप पूरी तरह से ठीक हो .. आप अपने आपको स्वीकार करो.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"14"},
{"QUO_ID":"15","QUO_TITLE":"","QUO_DESC":"Passion arises out of negative nothingness and compassion arises out of positive nothingness.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"15"},
{"QUO_ID":"16","QUO_TITLE":"","QUO_DESC":"Only a person who has enjoyed his life becomes capable of enjoying his death. And if you are capable of enjoying your death, you have defeated death. Then there is no more birth for you and no more death for you -- you have learnt the lesson.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"16"},
{"QUO_ID":"17","QUO_TITLE":"","QUO_DESC":"All our dreams are our ego projections.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"17"},
{"QUO_ID":"18","QUO_TITLE":"","QUO_DESC":"If the ego is fulfilled through giving, nothing is being given. Ego cannot share. The ego can never be generous; that is not its nature.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"18"},
{"QUO_ID":"19","QUO_TITLE":"","QUO_DESC":"The moment you put the ego aside, the curtain disappears. God is not hidden, only your eyes are closed. Open your eyes!","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"19"},
{"QUO_ID":"20","QUO_TITLE":"","QUO_DESC":"You have to move through fire, and only in that fire will your ego drop. Looking at the whole ugliness of it, it drops automatically.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"NO","QUO_POS":"20"},
{"QUO_ID":"21","QUO_TITLE":"","QUO_DESC":"Feeling is more real than thinking, feeling is more natural than thinking.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"21"},
{"QUO_ID":"22","QUO_TITLE":"","QUO_DESC":"You are perfect as you are. With all your imperfections you are perfect. If you are imperfect, you are perfectly imperfect – but perfection is there.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"22"},
{"QUO_ID":"23","QUO_TITLE":"","QUO_DESC":"मानो मत,जानो","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"23"},
{"QUO_ID":"24","QUO_TITLE":"","QUO_DESC":"Be less of a judge and you will be surprised that when you become a witness and you don’t judge yourself, you stop judging others too.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"24"},
{"QUO_ID":"25","QUO_TITLE":"","QUO_DESC":"Creativity is the greatest rebellion in existence.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"25"},
{"QUO_ID":"26","QUO_TITLE":"","QUO_DESC":"The less people know,the more stubbornly they know it.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"26"},
{"QUO_ID":"27","QUO_TITLE":"","QUO_DESC":"Your whole idea about yourself is borrowed, borrowed from those who have no idea  of who they are themselves.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"27"},
{"QUO_ID":"28","QUO_TITLE":"","QUO_DESC":"A little foolishness, enough to enjoy life & a little wisdom to avoid the error, that will do.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"28"},
{"QUO_ID":"29","QUO_TITLE":"","QUO_DESC":" Reality needs all the challenges of life, all the dangers of life, all the insecurities of life. Only then integrity arises, authenticity arises, responsibility arises.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"29"},
{"QUO_ID":"30","QUO_TITLE":"","QUO_DESC":"Awareness is a fire. It does two things: burns the rubbish and purifies the gold. It is alchemy.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"30"},
{"QUO_ID":"31","QUO_TITLE":"","QUO_DESC":" Man is existence's greatest experiment. In this vast, infinite universe, only on this small earth has existence been able to produce humanity which has the potential to become totally conscious. Existence expects much from you.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"31"},
{"QUO_ID":"32","QUO_TITLE":"","QUO_DESC":"Freedom is the Ultimate Value in human SOUL.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"32"},
{"QUO_ID":"35","QUO_TITLE":"","QUO_DESC":"God is both the creator and creation. This infinite universe outside and this infinite consciousness inside.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"35"},
{"QUO_ID":"36","QUO_TITLE":"","QUO_DESC":"Mind is your Prison. No-mind is your freedom. Mind is your ignorance, no-mind is your enlightenment. Move from mind to no-mind, this is the whole path,this is the whole RELIGION.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"36"},
{"QUO_ID":"37","QUO_TITLE":"","QUO_DESC":"Enlightenment is a simple realization that everything is as it should be.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"37"},
{"QUO_ID":"38","QUO_TITLE":"","QUO_DESC":"Meaning has to be created in life; meaning is not given already. You are given freedom, you are given creativity, you are given life. All that is needed to create meaning; is given...","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"38"},
{"QUO_ID":"39","QUO_TITLE":"","QUO_DESC":"You are The Goal.\r\nYou are The Way.\r\nYou are The light.\r\nYou are the Whole. ","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"39"},
{"QUO_ID":"40","QUO_TITLE":"","QUO_DESC":"Decision is good when it comes out of life; it is bad when it comes only out of the head.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"40"},
{"QUO_ID":"41","QUO_TITLE":"","QUO_DESC":"Life in itself is not meaningful. It is meaningful only if you can sing a song of the eternal, if you can release some fragrance of the divine, of the godly, if you can become a lotus flower - deathless, timeless.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"41"},
{"QUO_ID":"42","QUO_TITLE":"","QUO_DESC":" Love is the greatest alchemy.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"42"},
{"QUO_ID":"43","QUO_TITLE":"Hindi","QUO_DESC":"भागो मत, जागो |","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"43"},
{"QUO_ID":"44","QUO_TITLE":"","QUO_DESC":"Forget the dancer, become the Dance; that is the meditation.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"44"},
{"QUO_ID":"45","QUO_TITLE":"","QUO_DESC":"Be, Don't try to become.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"45"},
{"QUO_ID":"46","QUO_TITLE":"","QUO_DESC":"Love is the Goal, Life is The Journey.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"46"},
{"QUO_ID":"47","QUO_TITLE":"","QUO_DESC":"Real Communication happens in Silence.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"47"},
{"QUO_ID":"48","QUO_TITLE":"","QUO_DESC":"Mind is a beautiful servant , a dangerous master.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"48"},
{"QUO_ID":"49","QUO_TITLE":"English","QUO_DESC":"Courage is a Love Affair with The Unknown.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"49"},
{"QUO_ID":"50","QUO_TITLE":"","QUO_DESC":"My love is unconditional. Your action is irrelevant.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"50"},
{"QUO_ID":"51","QUO_TITLE":"","QUO_DESC":"Responsibility is always the very first step to freedom.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"51"},
{"QUO_ID":"52","QUO_TITLE":"","QUO_DESC":"The greatest freedom is to be free of one's own mind","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"52"},
{"QUO_ID":"53","QUO_TITLE":"","QUO_DESC":"Silence is The Ultimate Music.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"53"},
{"QUO_ID":"54","QUO_TITLE":"","QUO_DESC":"Life is a Celebration. Don't analyse it, celebrate it !","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"54"},
{"QUO_ID":"55","QUO_TITLE":"","QUO_DESC":"If you are not in love, you are lonely.If you are in love, really in love, you become alone.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"55"},
{"QUO_ID":"56","QUO_TITLE":"","QUO_DESC":"Aloneness is not loneliness. Aloneness means the feeling that you are complete. Nobody is needed, you are enough.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"56"},
{"QUO_ID":"57","QUO_TITLE":"","QUO_DESC":"Love allows freedom; not only allows, but strengthens freedom. And anything that destroys freedom is not love.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"57"},
{"QUO_ID":"58","QUO_TITLE":"","QUO_DESC":"Loneliness is a state when you are ill with yourself, bored with yourself, tired of yourself, and you want to go somewhere and to forget yourself into somebody else.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"58"},
{"QUO_ID":"59","QUO_TITLE":"","QUO_DESC":"Inner voice is not a voice, it is silence. It says nothing. It shows something, It gestures towards something.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"59"},
{"QUO_ID":"60","QUO_TITLE":"","QUO_DESC":"Life is beautiful only when there is love. Love is a higher value than life,a greater value than life.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"60"},
{"QUO_ID":"61","QUO_TITLE":"","QUO_DESC":"I am not a socialist. I am absolutely individualistic.","QUO_AUTHOR":"OSHO","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"61"},
{"QUO_ID":"62","QUO_TITLE":"","QUO_DESC":"ध्यान का अर्थ है - शब्दों के बिना जीना, भाषा रहित होकर जीना","QUO_AUTHOR":"ओशो","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"62"},
{"QUO_ID":"63","QUO_TITLE":"","QUO_DESC":"ध्यान प्रेम की पराकाष्ठा है। किसी एक व्यक्ति के प्रति प्रेम नहीं, वरन समग्र अस्तित्त्व के प्रति जीवंत संबंध है, जो तुम्हें घेरे हुए है","QUO_AUTHOR":"ओशो","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"63"},
{"QUO_ID":"64","QUO_TITLE":"","QUO_DESC":"मन को एक उपकरण होना चाहिए, मालिक नहीं। जब मन मालिक होता है, यह एक गैर ध्यान पूर्ण अवस्था होती है","QUO_AUTHOR":"ओशो","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"64"},
{"QUO_ID":"65","QUO_TITLE":"","QUO_DESC":"ध्यान कोई विधि नहीं बल्कि एक प्रक्रिया है; ध्यान कोई विधि नहीं , बल्कि एक समझ है","QUO_AUTHOR":"ओशो","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"65"},
{"QUO_ID":"66","QUO_TITLE":"","QUO_DESC":"आध्यात्मिक सीख शब्दों से नहीं आ सकती, बल्कि अंतरालों से, उस मौन से जो तुम्हें सदा घेरे हुए है, आती है। वे भीड़ में, हाट में, बाजार में भी हैं। मौन को खोजो, अंदर और बाहर अंतरालों को खोजो|","QUO_AUTHOR":"ओशो","QUO_STATUS":"ACTIVE","QUO_FEATURED":"YES","QUO_POS":"66"}
]