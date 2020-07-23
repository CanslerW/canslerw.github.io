$(document).ready(function(){
	$('body').addClass('YaY');

	$('.settings a').click(function(e){
		e.preventDefault();
		$('#generator').toggleClass('openSettings');
		$(this).toggleClass('active');
		$('#submit').val('Сгенерировать');
		$('.recycle a').removeClass();
	});

	$('.strength a').click(function(e){
		e.preventDefault();
		$('#generator').toggleClass('openStrength');

		$(this).toggleClass('active off');
	});

	$('.recycle a').click(function(e){
		e.preventDefault();
		$(this).addClass('active');
		$('#submit').val('Обработать');
		$('#generator').removeClass('openSettings');
		$('.settings a').removeClass();
	});

	//  + & - password count check
	$('.counter span').click(function(){

		var count     = $('.counter input'),
			charCount = count.val(),
			charPlus  = +(charCount) + 1,
			charMinus = +(charCount) - 1;

		if ( !(charCount >= 30) ) {
			if ($(this).hasClass('plus')) {
				count.val( charPlus );
			};
		};

		if ( !(charCount <= 5) ) {
			if ($(this).hasClass('minus')) {
				count.val( charMinus );
			};
		};
	});

	// keep the password between 5 to 30 when typing in value
	var inputValue = 0;
	$('#char_count').focus(function(){ 
		var currentValue = $(this).val();
		$(this).val('');

		return inputValue = currentValue;
	});

	$('#char_count').blur(function(){ 
		if (($(this).val() == '')) {
			$(this).val(inputValue)
		};

		if (($(this).val() >= 30 )) {
			$(this).val('30')
		};

		if (($(this).val() <= 5 )) {
			$(this).val('5')
		};

	});

// PASSWORD GENERATE FUNCTIONS
function randomPassword ( carLength ) {

	var lowerCarSet = 'abcdefghijklmnopqrstuvwxyz',
	    upperCarSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	    sepcialCarSet = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ",
	    numberCarSet = "1234567890" ,
	    newPassword = '',
	    carSet = '';
	
	if($('#lowercase').is(":checked")){
		carSet += lowerCarSet
	};

	if($('#uppercase').is(":checked")){
		carSet += upperCarSet
	};

	if($('#numbers').is(":checked")){
		carSet += numberCarSet
	};

	if($('#special').is(":checked")){
		carSet += sepcialCarSet
	};

	for ( var i = 0; i <= carLength - 1; i++ ){
		var carSetLenght = carSet.length;
		var randomChar = Math.floor(Math.random() * carSetLenght); 
		newPassword += carSet.charAt(randomChar);
	}

	return newPassword;
}

	function checkStrength(password){
    
	//initial strength
    var strength = 0
	
    //if the password length is less than 6, return message.
    if (password.length < 6) { 
		$('#test').removeClass()
		$('#test').addClass('krap')
	}
    
    //length is ok, lets continue.
	
	//if length is 8 characters or more, increase strength value
	if (password.length > 10) strength += 1
	
	//if password contains both lower and uppercase characters, increase strength value
	if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1
	
	//if it has numbers and characters, increase strength value
	if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  strength += 1 
	
	//if it has one special character, increase strength value
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1
	
	//if it has two special characters, increase strength value
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
	
	//now we have calculated strength value, we can return messages
	
	//if value is less than 2
	if (strength < 1 ) {
		$('#test').removeClass()
		$('#test').addClass('krap')
		
	} else if (strength == 1 ) {
		$('#test').removeClass()
		$('#test').addClass('bad')

	} else if (strength == 2 ) {
		$('#test').removeClass()
		$('#test').addClass('inbetween')

	} else if (strength == 4 ) {
		$('#test').removeClass()
		$('#test').addClass('good')
		
	} else {
		$('#test').removeClass()
		$('#test').addClass('perfect')

	}
}

//RECYCLE PASSWORD FUNCTION


function recyclePassword(oldPassword){
	//arrays for letter swap
	    var aSub = ["a", "A", "@"];
	    var eSub = ["e", "E", "3"];
	    var gSub = ["g", "G", "9"];
	    var hSub = ["h", "H", "4"];
	    var iSub = ["i", "I", "!"];
	    var lSub = ["l", "L", "1"];
	    var oSub = ["o", "O", "0"];
	    var zSub = ["z", "Z", "2"];

	    //get the initial password
	    var secureThis = oldPassword;
	    var array = secureThis.split(",");
        var password = [ ];

        var count = 0;

        while ( count < secureThis.length ){

        var tI = secureThis[count];

        	if ( (tI == "a") || (tI == "A") || (tI == "@")) {
        		var aSubCount = aSub.length,
        		    aSubNumber = Math.floor(Math.random()*aSubCount),
        		    aSubNew = aSub[aSubNumber]
        		    password.push(aSubNew);

        	} else if ( (tI == "e") || (tI == "E") || (tI == "3") ){
        		var eSubCount = eSub.length,
        		    eSubNumber = Math.floor(Math.random()*eSubCount),
        			eSubNew = eSub[eSubNumber]
        		password.push(eSubNew);

        	} else if ( (tI == "g") || (tI == "G") || (tI == "9") ){
        		var gSubCount = gSub.length,
        		    gSubNumber = Math.floor(Math.random()*gSubCount),
        		    gSubNew = gSub[gSubNumber]
        		password.push(gSubNew);

        	} else if ( (tI == "h") || (tI == "H") || (tI == "4") ){
        		var hSubCount = hSub.length,
        		    hSubNumber = Math.floor(Math.random()*hSubCount),
        		    hSubNew = hSub[hSubNumber]
        		password.push(hSubNew);

        	} else if ( (tI == "i") || (tI == "I")  || (tI == "!")){
        		var iSubCount = iSub.length,
        		    iSubNumber = Math.floor(Math.random()*iSubCount),
        		    iSubNew = iSub[iSubNumber]
        		password.push(iSubNew);

        	} else if ( (tI == "l") || (tI == "L") || (tI == "1") ){
        		var lSubCount = lSub.length,
        		    lSubNumber = Math.floor(Math.random()*lSubCount),
        		    lSubNew = lSub[lSubNumber]
        		password.push(lSubNew);

        	} else if ( (tI == "o") || (tI == "O") || (tI == "0") ){
        		var oSubCount = oSub.length,
        		    oSubNumber = Math.floor(Math.random()*oSubCount),
        		    oSubNew = oSub[oSubNumber]
        		password.push(oSubNew);

        	} else if ( (tI == "z") || (tI == "Z") || (tI == "2") ){
        		var zSubCount = zSub.length,
        		    zSubNumber = Math.floor(Math.random()*zSubCount),
        		    zSubNew = zSub[zSubNumber]
        		password.push(zSubNew);

        	} else {
        		var randomTest = Math.floor(Math.random()*3);
        		if (randomTest == 1){
        			password.push(tI.toUpperCase());
        		} else { 
        			password.push(tI.toLowerCase());
        		}
  		
        	};

        	count++;
        };

        newPassword = password.join('');

        return newPassword;
}


// PASSWORD SUBMIT FUNCTION
$('#submit').click(function(e){
	e.preventDefault();

	var passlenght = $('#char_count').val(),
		currentPass = $('#reult').val(),
		strengthCheck = $('.strength a').hasClass('off');

	if ($('.recycle a').hasClass('active')) {
		//run recycle password
		var allNew = recyclePassword( currentPass );
		$('#reult').val(allNew);
	} else {
		//runn new password
		var allNew = randomPassword( passlenght );
		$('#reult').val(allNew);
	};

	checkStrength(allNew);

	if ( !strengthCheck) {
		$('#generator').addClass('openStrength');
		$('.strength a').addClass('active');
	};

});

//KEY STROKE STRENTH TEST
$('#reult').keyup(function(){
	var currentPass = $('#reult').val(),
		strengthCheck = $('.strength a').hasClass('off');

	if ( !strengthCheck) {
		$('#generator').addClass('openStrength');
		$('.strength a').addClass('active');
	};
	checkStrength($('#reult').val());
})
	
});