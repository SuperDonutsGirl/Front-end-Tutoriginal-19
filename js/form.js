function  formulaire(){
    let bloc = document.getElementsByClassName('bloc-enroll');
    let dList = document.getElementById('dot')
    let dot = document.getElementsByClassName("dot-list");
    let len = bloc.length;

    for (i = 0; i < len; i++){
        var idStr = bloc[i].id;
        if (idStr == "show"){
            if (i == 0){
                dList.style.display = "flex"
                dot[i].id = "active";
            }
            if (i > 0){
                dot[i - 1].removeAttribute('id');
            }
            bloc[i].removeAttribute('id');
            bloc[i].style.display = "none";
            if (i + 1 < len){
                bloc[i + 1].style.display = "block";
                bloc[i + 1].id = "show";
                if (i > 0){
                    dot[i].id = "active";
                }
                i = len;
            }
        }
        if (i == len - 1){
            let success = document.getElementsByClassName("success");
            success[0].style.display = "block";
            dList.style.display = "none"
        }
    }
}

function resumForm(){
    let box = document.getElementsByClassName("checkbox-list");
    let span = document.getElementsByClassName("element");
    let answer1 = document.getElementById("list-res");

    formulaire();

    for (i = 0; i < box.length; i++){
        if (box[i].checked == true){
            answer1.innerHTML += `<li class="checked">${span[i].innerHTML}</li>`;
        }
    }
    let question2 = document.getElementById("hear-about-res");
    let answer2 = document.getElementById("hear-about").value;
    let question3 = document.getElementById("language-res");
    let answer3 = document.getElementById("language").value;
    let question4 = document.getElementById("why-res");
    let answer4 = document.getElementById("why").value;
    let question5 = document.getElementById("meme-res");
    let answer5 = document.getElementById("meme").value;

    question2.innerHTML += answer2;
    question3.innerHTML += answer3;
    question4.innerHTML += answer4;
    question5.innerHTML += answer5;

}

function modify(elmt){
    let bloc = document.getElementsByClassName('bloc-enroll');
    let len_bloc = bloc.length;
    let li = document.getElementsByClassName("checked");
    let len_li = li.length;
    let dot = document.getElementsByClassName("dot-list");
    let len_dot = dot.length;
    let btn = document.getElementsByClassName("modify");

    /*Reset first data*/
    if (len_li > 0){
        for (i = 0; i < len_li; i++){
            li[0].remove();
        }
    }

    /*Hide current bloc*/
    for (i = 0; i < len_bloc; i++){
        var idBloc = bloc[i].id;
        if (idBloc == "show"){
            bloc[i].removeAttribute('id');
            bloc[i].style.display = "none";
            i = len_bloc;
        }
    }

    /*Remove current dot*/
    dot[len_dot - 1].removeAttribute('id');

    /*Show block to edit*/
    elmt.id = "select";
    for (i = 0; i < btn.length; i++){
        /*Find selected button*/
        var idStr = btn[i].id;
        if (idStr == "select"){
            bloc[i + 1].style.display = "block";
            bloc[i + 1].id = "show";
            /*Update dot*/
            dot[i].id = "active";
            i = btn.length;
        }
    }
    /*Reset button's Id "select"*/
    elmt.removeAttribute("id");
}


function submit(){
    let bloc = document.getElementsByClassName('bloc-enroll');
 
    window.location.href="./dashboard.html";
    bloc[0].style.display = "block";
    bloc[0].id = "show";
    for (i = 1; i < bloc.length; i++){
        bloc[i].removeAttribute('id');
        bloc[i].style.display = "none";
    }
}

function changeSection(elmt_selected){
    let bloc = document.getElementsByClassName('bloc-enroll');
    let len_bloc = bloc.length;
    let btn_dot = document.getElementsByClassName("dot-link");
    let btn_len_dot = btn_dot.length;
    let dot = document.getElementsByClassName("dot-list");
    let len_dot = dot.length;

    /*Hide current bloc*/
    for (i = 0; i < len_bloc; i++){
        var idBloc = bloc[i].id;
        if (idBloc == "show"){
            bloc[i].removeAttribute('id');
            bloc[i].style.display = "none";
            /*Remove current dot*/
            dot[i - 1].removeAttribute('id');
            i = len_bloc;
        }
    }

    /*Add Id select for this dot*/
    elmt_selected.id = "select";
    for (i = 0; i < btn_len_dot; i++){
        /*Find selected button*/
        var dotId = btn_dot[i].id;
        if (dotId == "select"){
            bloc[i + 1].style.display = "block";
            bloc[i + 1].id = "show";
            /*Update dot*/
            dot[i].id = "active";
            i = btn_len_dot;
        }
    }

    /*Reset dot's Id "select"*/
    elmt_selected.removeAttribute("id");
}
