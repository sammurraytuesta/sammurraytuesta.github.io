const form = document.querySelector('.contact-items');

form.addEventListener('submit', e => {
    // alert('h');
    e.preventDefault();

    
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (name == '') {

        alert("Enter a Valid Name!");
        form.name.style.borderColor = "red";
        return false;
    }
    if  (email == '') {
        alert("Enter a Valid Phone Address!");
        form.email.style.borderColor = "red";
        return false;
    }
    if (message == '') {
        alert("Please Leave a Message!");
        form.message.style.borderColor  = "red";
        return false;
    }

    form.submit();

});