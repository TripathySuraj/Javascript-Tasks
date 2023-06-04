function showDate() {
    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[d.getMonth()];
    document.getElementById("showDate").innerHTML = d.getDate() + "/" + month + "/" + d.getFullYear();
}


function showTime() {
    const d = new Date();
    document.getElementById("showTime").innerHTML = d;

}
