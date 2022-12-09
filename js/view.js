

function bulletEvents(){
    let ulField = document.getElementById('dot');
    let card = document.getElementsByClassName("card-event");
    let len = card.length;
    let i = 0;

    while (i < len)
    {
        if (i == 0 )
            ulField.innerHTML += `<li class="dot-list"id="active"><i class="fa-solid fa-circle"></i></li>`;
        else
            ulField.innerHTML += `<li class="dot-list"><i class="fa-solid fa-circle"></i></li>`;
        i++;
    }
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

