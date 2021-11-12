var divPost = document.getElementById('alert');
  function post(){
    event.preventDefault();
  var url = "http://7628-185-203-252-14.eu.ngrok.io/Post/CreatePost";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); 
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhr.setRequestHeader("Content-Type", "application/json");
  
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        isCreated(xhr.status);
     }};
  
  xhr.send(JSON.stringify(
    {
      "url": document.getElementById('urlinput').value, 
      "title": document.getElementById('title').value,
      "author": document.getElementById('author').value,
      "addDate": document.getElementById('date').value,
      "description": document.getElementById('description').value,
      "imageUrl": document.getElementById('urlimage').value,
      "content": document.getElementById('content').value
    }));  
}

function isCreated(statusCode){
    if (statusCode == 200){
      divPost.classList.remove("d-none");
      divPost.classList.add("alert-success");
      divPost.textContent = "Wysłano";
      window.setTimeout('znikanie()', 5000);
    }else{
      divPost.classList.remove("d-none");
      divPost.classList.add("alert-danger");
      divPost.textContent = "Wprowadź dane";
      window.setTimeout('znikanie()', 5000);
    }
    
}
function znikanie() {
  divPost.classList.add("d-none");
}