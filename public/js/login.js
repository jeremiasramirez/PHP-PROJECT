 
let linkLogin = document.getElementById("menu__nav__list--js");
 
(function animationButtonLogin(linkLogin){
 linkLogin.addEventListener("click",(e)=>{
 	linkLogin.classList.add("scale");
 },false);
})(linkLogin)

let buttonLoginForm = document.getElementById("btn__send--js");
let buttonRegisterForm = document.getElementById("register");



class validateLoginForm{

	constructor(email,password){
		this.email = email;
		this.password = password;
	}

	validate(){

	}

	noValidate(){
		
	}

}

let emailInput = document.getElementById("input__email--js");
let passInput = document.getElementById("input__password--js");




function clickLogin(emailInput ,passInput, btnSend){
 
		emailInput.addEventListener("keyup",(e)=>{
			let valWord = [emailInput.value];

			let reference = ['-','}','{','+'
							,'*','!','@','#',
							'$','%','^','&',
							'(',')','/','<','>',
							 '=', '?', '~', '`',
							 ':', ';'];
			 if(emailInput.value.substring(0,1) === "_"){
				 btnSend.disabled="true"
				console.log("aqui");
				btnSend.classList.add("btn__error");
			 }
			 else{
				btnSend.disabled=""
				btnSend.classList.remove("btn__error");
				  
			 }
		
 
	},false);

	passInput.addEventListener("keyup",(e)=>{
		 
 
		 if(passInput.value.length < 7){
			 btnSend.disabled="true"
			console.log("aqui");
			btnSend.classList.add("btn__error");
		 }
		 else{
			btnSend.disabled="";
			btnSend.classList.remove("btn__error");
		 
		 }
	

},false);

	 
 




}

clickLogin(emailInput,passInput,buttonLoginForm);

















