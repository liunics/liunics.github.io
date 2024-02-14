document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // 阻止表单的默认提交行为
  var person = document.getElementById('person').value;
  var tag = document.getElementById('tag').value;
  var abbr = document.getElementById('abbr').value;
  if (person != "" && tag != "" && abbr != "") {
    if (person == "男神" && tag == "以上都是" && abbr == "CIRP")
      alert('情人节快乐，你也看出来了，我不是一个浪漫的人，但是也许偶尔会给你带来surprise，like this。');
    else
      alert("答错了！！！\n温馨提示:如果实在答不对，向对方承认自己是憨憨可以要到正确答案哦。");
  }
});