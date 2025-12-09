const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("message").value.trim();

    if (name === "" || phone === "" || msg === "") {
        alert("Please fill all required fields!");
        return;
    }

    if (phone.length < 10) {
        alert("Enter valid mobile number!");
        return;
    }

    alert("Thank you! We will contact you soon.");

});
