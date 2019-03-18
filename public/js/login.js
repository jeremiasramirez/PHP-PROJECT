let linkLogin = document.getElementById("menu__nav__list--js");
 
(function animationButtonLogin(linkLogin){
 linkLogin.addEventListener("click",(e)=>{
 	linkLogin.classList.add("scale");
 },false);
})(linkLogin)

let buttonSendForm = document.getElementById("btn__send--js");

class validateLogin{

	constructor(email,password){
		this.email = email;
		this.password = password;
	}
	validate(){

	}
	noValidate(){
		
	}


}

















