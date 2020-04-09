function time_clock(x){
	k = new Date();
	
	etos = k.getFullYear();
	minas = k.getMonth();
	mera = k.getDay();

	m = k.getDate(); 

	hour = k.getHours();
	minute = k.getMinutes();
	second = k.getSeconds();

	mines = new Array('Ιανουαρίου','Φεβρουάριου','Μαρτίου','Απριλίου','Μαίου','Ιουνίου','Ιουλίου','Αυγούστου','Σεπτεμβρίου','Οκτωβρίου','Νοεμβρίου','Δεκεμβρίου');
	meres = new Array('Κυριακή','Δευτέρα','Τρίτη','Τετάρτη','Πέμπτη','Παρασκευή','Σάββατο');

	
	if (hour < 10){
		hour = "0" + hour;
	}
	if (minute < 10){
		minute = "0" + minute;
	}
	if (second < 10){
		second = "0" + second;
	}

	imerominia = '' + meres[mera] + ' ' + m + ' ' + mines[minas] + ' ' + etos + ' ' + hour + ':' + minute + ':' + second;

	document.getElementById(x).innerHTML = imerominia;
	setTimeout('time_clock("'+ x +'");','1000');

	return true;
}