function validate() {
	var name = document.getElementById('name');
	if(name == '') {
		alert("Please enter valid name!!");
		return false;
	}
	else {
		return true;
	}
}