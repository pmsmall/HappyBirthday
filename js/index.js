/*
 * @Author: your name
 * @Date: 2021-03-25 09:07:37
 * @LastEditTime: 2021-03-25 09:12:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tiny-heart-master\birthday-mobile\js\index.js
 */
$("#login-button").click(function (event) {
  var userName = document.getElementById("userName").value;
  var pwd = document.getElementById("pwd").value;
  //修改密码请改此处
  console.log(userName)
  console.log(pwd)
  if (userName == "万老师" && pwd == "1208") {
    event.preventDefault();
    $("form").fadeOut(500);
    $(".wrapper").addClass("form-success");
    setTimeout(function () {
      location.href = "Memories.html";
    }, 2000);
  } else {
    alert("Wrong Password");
  }
});