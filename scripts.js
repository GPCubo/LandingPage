// Effects of page
const title =document.getElementById("title");
      list = document.getElementById("ul-list")
      burger = document.getElementById("burger");
      articlemain = document.getElementById("articlemain");
      divgrid = document.getElementById("divgrid");
      divgrid2 = document.getElementById("divgrid2");

title.classList.add("object__show")

burger.addEventListener("click",()=>{
    list.classList.toggle("div__nav-show")
});

window.addEventListener("click",(e)=>{
    const array_list = Array.from(list.classList)
    const question = array_list.findIndex(value => value == "div__nav-show")
    if(question == 1 && e.target.id != "burger"){
        list.classList.remove("div__nav-show");
    }
})

const action = (r,num,mod) =>{
    if(r.top < num){
        mod.classList.add("object__show")
        
    }
    else {
         mod.classList.remove("object__show")
    };
}

window.addEventListener("scroll",()=>{
    const relative = title.getBoundingClientRect()
          r_article = articlemain.getBoundingClientRect()
          r_divgrid = divgrid.getBoundingClientRect()
          r_divgrid2 = divgrid2.getBoundingClientRect()

    action(r_article, 620,articlemain)
    action(r_divgrid,850,divgrid)
    action(r_divgrid2,1500,divgrid2)

    if(relative.top > -150){
        title.classList.add("object__show")
        
    }
    else {
         title.classList.remove("object__show")
    };
})

// CHECKING FORM

const inputs = document.querySelectorAll(".input")
const form = document.getElementById("form")

const fields = {
    name:false,
    email:false,
    message:false
}

const checkForm = (e) =>{
    switch(e.target.name){
        case "name":
            validateField(expresions.name,e.target,"name");
            break;
        case "email":
            validateField(expresions.email,e.target,"email");
            break;
        case "message":
            validateField(expresions.message,e.target,"message");
            break;
    }
}

const validateField = (expresion,input,field) =>{
    if(expresion.test(input.value)){
        document.getElementById(`checked__${field}-svg`).classList.remove(`checked__${field}-active`);
        document.getElementById(`checked__${field}`).classList.remove(`checked__${field}-active`);

        document.getElementById(`error__${field}`).classList.add(`error__${field}-active`);
        document.getElementById(`error__${field}-svg`).classList.add(`error__${field}-active`);
        fields[field] = true
    }else {
        document.getElementById(`checked__${field}-svg`).classList.add(`checked__${field}-active`);
        document.getElementById(`checked__${field}`).classList.add(`checked__${field}-active`);

        document.getElementById(`error__${field}`).classList.remove(`error__${field}-active`);
        document.getElementById(`error__${field}-svg`).classList.remove(`error__${field}-active`);
        fields[field] = false
    }
}

inputs.forEach((input)=>{
    input.addEventListener("change",checkForm);
    input.addEventListener("keyup",checkForm);
})

const expresions = {
	name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    message: /^[a-zA-ZÀ-ÿ\s \.\,]{10,100}$/, // Letras y espacios, pueden llevar acentos, puntos y comas.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formValues = Object.values(fields)
    console.log(formValues)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1){
        console.log("sending")
        // setTimeout(()=>{
        //     form.submit();
        // },1000)
    }
})