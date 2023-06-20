const doc = document;
const form = doc.getElementById('form1');
console.log(form);
function getFormvalue() {
	const fname = form.fname.value;
	const lname = form.lname.value;
	alert(`${fname} ${lname}`);
}
