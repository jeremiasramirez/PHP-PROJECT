 
let linkLogin = document.getElementById("menu__nav__list--js");
 
(function animationButtonLogin(linkLogin){
 linkLogin.addEventListener("click",(e)=>{
 	linkLogin.classList.add("scale");
 },false);
})(linkLogin)





let buttonLoginForm = document.getElementById("btn__send--js");
let buttonRegisterForm = document.getElementById("register");



class validateLoginForm{

	constructor(container,item){
		this.container = container;
		this.item = item;
	}

	validate(){
		
	}

	noValidate(){
	 
	}
}

let emailInput = document.getElementById("input__email--js");
let passInput = document.getElementById("input__password--js");

function clickLogin(emailInput ,passInput, btnSend){
 let band = false;
 let band2 = false;
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
				 
				btnSend.classList.add("btn__error");
			 }
			 else{
				band = true;
				btnSend.disabled=""
				btnSend.classList.remove("btn__error");
				  
			 }
		
 
	},false);

	passInput.addEventListener("keyup",(e)=>{
		 
 
		 if(passInput.value.length < 7){
			 btnSend.disabled="true"
		 
			btnSend.classList.add("btn__error");
		 }
		 else{
			btnSend.disabled="";
			btnSend.classList.remove("btn__error");
			band2 = true;
		 }
		 let containerV = document.getElementById("container__validate--js");
		 let itemV = document.getElementById("container__item__js");
		 let Validate = new validateLoginForm(containerV ,itemV);
	if(band==true && band2==true){
	 
			Validate.validate();
	}
	else if(band==true && band2==false || band2==true && band==false){
		btnSend.disabled="true"
		 
			btnSend.classList.add("btn__error");
		Validate.noValidate();
	}

},false);

	 
 




}

clickLogin(emailInput,passInput,buttonLoginForm);

















