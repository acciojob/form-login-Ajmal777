const doc = document;
const form = doc.getElementById(form1);
function getFormvalue() {
	form.addEventListener('submit', (data)=>{
		const fname = data.fname.value;
		const lname = data.lname.value;
		alert(fname, lname);
	});
}
