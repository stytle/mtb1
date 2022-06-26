function mask(o, f) {
    setTimeout(function () {
        var v = f(o.value);
        if (v != o.value) {
            o.value = v;
        }
    }, 1);
}

function mdate(v) {
	//var v = obj.value;
	//var months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	
	//console.log("rr:" + v);
    var r = v.replace(/\D/g,"");
    //r = r.replace(/^0/,"");
	//console.log("rr2:" + r);
    if (r.length > 4) {
        // 6..10 digits. Format as 4+4
        r = r.replace(/^(\d\d)(\d{2})(\d{0,4}).*/,"$1/$2/$3");
    }
    else if (r.length > 2) {
        // 3..5 digits. Add (0XX..)
        r = r.replace(/^(\d\d)(\d{0,2})/,"$1/$2");
    }
    else if (r.length > 0){
        // 0..2 digits. Just add (XX
        //r = r.replace(/^(\d\d)(\d{0,2})/,"$1");
		if (r > 12) {
			r = "";
		}
    }
    return r;
}

function mphone(v) {
    var r = v.replace(/\D/g,"");
    r = r.replace(/^0/,"");
    if (r.length > 10) {
        // 11+ digits. Format as 5+4.
        //r = r.replace(/^(\d\d\d)(\d{5})(\d{4}).*/,"($1) $2-$3");
		r = r.replace(/^(\d\d\d)(\d{3})(\d{0,4}).*/,"$1-$2-$3");
		return r;
    }
    else if (r.length > 5) {
        // 6..10 digits. Format as 4+4
        r = r.replace(/^(\d\d\d)(\d{3})(\d{0,4}).*/,"$1-$2-$3");
    }
    else if (r.length > 2) {
        // 3..5 digits. Add (0XX..)
        r = r.replace(/^(\d\d\d)(\d{0,3})/,"$1-$2");
    }
    else {
        // 0..2 digits. Just add (0XX
        r = r.replace(/^(\d*)/, "$1");
    }
    return r;
}
function mssn(v) {
    var r = v.replace(/\D/g,"");
    
    if (r.length > 9) {
        r = r.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/,"$1-$2-$3");
		return r;
    }
    else if (r.length > 4) {
        r = r.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/,"$1-$2-$3");
    }
    else if (r.length > 2) {
        r = r.replace(/^(\d\d\d)(\d{0,3})/,"$1-$2");
    }
    else {
        r = r.replace(/^(\d*)/, "$1");
    }
    return r;
}