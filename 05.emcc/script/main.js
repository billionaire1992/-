//DOM 요소에 접근하기 : 가장 자주 사용하는~! [HTML을 해석한 객체]
//0) document : HTML 전체의 문서 객체 정보를 가리킴
//1).getElementById(menu): id값이 일치하는 DOM요소를 선택하는 메소드 
//2).getElementsByClassName(): class 값이 일치하는 
//3)그 밖의 메소드


// menuBtn.onclick = function(){
//     alert("클릭했습니다");
// }


//CSSOM : CSS object Model
//.querySelector("css선택자") --> .querySelector("#menu")
//.querySelectorAll("css선택자")


//아이디값이 menu인 DOM 객체를 menuBtn 이라는 변수에 할당
var menuBtn = document.querySelector("#menu");
var sideMenu = document.querySelector("#side");

menuBtn.addEventListener("click",function(){
    sideMenu.style.right="0";

});

//side를찾아서 클릭하면, diplay를 none으로 조작
sideMenu.addEventListener("click",function(){
    this.style.right ="-300px";
})