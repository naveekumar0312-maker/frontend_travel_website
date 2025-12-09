const btn = document.querySelector(".callback-box button");
const input = document.querySelector(".callback-box input");

btn.addEventListener("click", () => {
    let mobile = input.value.trim();

    if(mobile.length < 10){
        btn.classList.add("shake");
        setTimeout(() => btn.classList.remove("shake"), 300);
        return;
    }

    alert("Our tour expert will call you: " + mobile);
});
