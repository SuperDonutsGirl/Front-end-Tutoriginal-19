

function bulletEvents(){
    let ulField = document.getElementById('dot');
    let card = document.getElementsByClassName("card-event");
    let len = card.length;
    let i = 0;

    while (i < len)
    {
        if (i == 0 )
        ulField.innerHTML += `<li><button class="btnDot" onclick="getSelect(this)"><i id="active"class="dot-list fa-solid fa-circle"></i></button></li>`
        else
            ulField.innerHTML += `<li><button class="btnDot" onclick="getSelect(this)"><i class="dot-list fa-solid fa-circle"></i></button></li>`
        i++;
    }
}

function getSelect(elemt){
    let dot = document.getElementsByClassName("dot-list");
    let card = document.getElementsByClassName("card-event");
    let btnDot = document.getElementsByClassName("btnDot");
    let len = dot.length;

    /*Remove current dot and hide current card*/
    for (i = 0; i < len; i++){
        var idDot = dot[i].id;
        if (idDot == "active"){
            dot[i].removeAttribute('id');
            card[i].removeAttribute('id');
            card[i].style.display = "none";
            i = len;
        }
    }

    /*Add Id select*/
    elemt.id = "select";
    /*Find selected button and show selected card*/
    for (i = 0; i < len; i++){
        var idBtn = btnDot[i].id;
        if (idBtn == "select"){
            card[i].style.display = "flex";
            card[i].id = "show";
            dot[i].id = "active"
            i = len;
        }
    }

    /*Reset dot's Id "select"*/
    elemt.removeAttribute("id");
}




function getNext(){

    let card = document.getElementsByClassName("card-event");
    let dot = document.getElementsByClassName("dot-list");
    let len = card.length;

    let i = 0;
    while (i < len){
        var idStr = card[i].id;
        if (idStr == "show")
        {
            card[i].removeAttribute('id');
            card[i].style.display = "none";
            dot[i].removeAttribute('id');
            if (i + 1 < len)
            {
                card[i + 1].style.display = "flex";
                card[i + 1].id = "show";
                dot[i + 1].id = "active";
                i = len;
            }
            else{
                card[0].style.display = "flex";
                card[0].id = "show";
                dot[0].id = "active";
                i = len;
            }
        }
        i++;
    }
}

function getPast(){

    let card = document.getElementsByClassName("card-event");
    let dot = document.getElementsByClassName("dot-list");
    let len = card.length;

    let i = 0;
    while (i < len){
        var idStr = card[i].id;
        if (idStr == "show")
        {
            card[i].removeAttribute('id');
            card[i].style.display = "none"
            dot[i].removeAttribute('id');
            if (i - 1 >= 0)
            {
                card[i - 1].style.display = "flex";
                card[i - 1].id = "show";
                dot[i - 1].id = "active";
                i = len;
            }
            else{
                card[len - 1].style.display = "flex";
                card[len - 1].id = "show";
                dot[len - 1].id = "active";
                i = len;
            }
        }
        i++;
    }
}

