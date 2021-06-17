
function login_dialog(){ 
       // for show
    var dialog_box = document.getElementById('login-dialog');
    var login_dialog = document.getElementById('login-dialog-child');
    var for_message = document.getElementById('for-message');
    dialog_box.style.display="flex";
    for_message.style.display="block";
    login_dialog.style.display="block";
    for_message.innerHTML = "First LOGIN, and then add item to cart.." ;
}
function login_dialog_WoM(){ 
    // for show
    var dialog_box = document.getElementById('login-dialog');
    var login_dialog = document.getElementById('login-dialog-child');
    dialog_box.style.display="flex";
    login_dialog.style.display="block";
}
function login_dialog_cancel(){
    // for cancel
    var dialog_box = document.getElementById('login-dialog');
    var for_message = document.getElementById('for-message');
    var login_dialog = document.getElementById('login-dialog-child');
    var signup_dialog = document.getElementById('signup-dialog-child');
    var account_dialog = document.getElementById('account-dialog-child');
    dialog_box.style.display="none";
    for_message.style.display="none";
    login_dialog.style.display="none";
    signup_dialog.style.display="none";
    account_dialog.style.display="none";
}
function signup_dialog(){ 
    // for show
    var dialog_box = document.getElementById('login-dialog');
    var signup_dialog = document.getElementById('signup-dialog-child');
    dialog_box.style.display="flex";
    signup_dialog.style.display="block";
}
function account_dialog(){ 
    // for show
    var dialog_box = document.getElementById('login-dialog');
    var account_dialog = document.getElementById('account-dialog-child');
    dialog_box.style.display="flex";
    account_dialog.style.display="block";
}
function login_with_dialog(){
    var account_dialog = document.getElementById('account-dialog-child');
    account_dialog.style.display="none";
    var signup_dialog = document.getElementById('signup-dialog-child');
    signup_dialog.style.display="none";
    var login_dialog = document.getElementById('login-dialog-child');
    login_dialog.style.display="block";
}
function signup_with_dialog(){
    var account_dialog = document.getElementById('account-dialog-child');
    account_dialog.style.display="none";
    var login_dialog = document.getElementById('login-dialog-child');
    login_dialog.style.display="none";
    var signup_dialog = document.getElementById('signup-dialog-child');
    signup_dialog.style.display="block";
}
function chng_txt(){
    console.log("Running...");
    var for_message = document.getElementById('for-message');
    for_message.innerHTML="First LOGIN, and then you go to your wishlist.."
}
