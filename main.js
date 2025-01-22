let btnPlus = document.querySelectorAll('button');
let showshowQuestion = document.querySelectorAll("div #showQuestion");
let images = document.querySelectorAll('#img');


btnPlus.forEach(function(e){
    e.addEventListener("click",function(){
        if(this === btnPlus[0]){
            if(this.innerHTML === "<img id=\"img\" src=\"assets/images/icon-plus.svg\" alt=\"\">"){
                this.innerHTML = "<img id=\"img\" src=\"assets/images/icon-minus.svg\" alt=\"\">"
                showshowQuestion[0].className = "ActiveShowQuestion";
            }
            else{
                this.innerHTML = "<img id=\"img\" src=\"assets/images/icon-plus.svg\" alt=\"\">";
                showshowQuestion[0].className = "HideShowQuestion";
            }
        }
        if(this === btnPlus[1]){
            if(this.innerHTML === "<img id=\"img\" src=\"assets/images/icon-plus.svg\" alt=\"\">"){
                this.innerHTML = "<img id=\"img\" src=\"assets/images/icon-minus.svg\" alt=\"\">"
                showshowQuestion[1].className = "ActiveShowQuestion";
            }
            else{
                this.innerHTML = "<img id=\"img\" src=\"assets/images/icon-plus.svg\" alt=\"\">";
                showshowQuestion[1].className = "HideShowQuestion";
            }
        }
        if(this === btnPlus[2]){
            if(this.innerHTML === "<img id=\"img\" src=\"assets/images/icon-plus.svg\" alt=\"\">"){
                this.innerHTML = "<img id=\"img\" src=\"assets/images/icon-minus.svg\" alt=\"\">"
                showshowQuestion[2].className = "ActiveShowQuestion";
            }
            else{
                this.innerHTML = "<img id=\"img\" src=\"assets/images/icon-plus.svg\" alt=\"\">";
                showshowQuestion[2].className = "HideShowQuestion";
            }
        }
        if(this === btnPlus[3]){
            if(this.innerHTML === "<img id=\"img\" src=\"assets/images/icon-plus.svg\" alt=\"\">"){
                this.innerHTML = "<img id=\"img\" src=\"assets/images/icon-minus.svg\" alt=\"\">"
                showshowQuestion[3].className = "ActiveShowQuestion";
            }
            else{
                this.innerHTML = "<img id=\"img\" src=\"assets/images/icon-plus.svg\" alt=\"\">";
                showshowQuestion[3].className = "HideShowQuestion";
            }
        }
    })
})





