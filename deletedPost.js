function deletePost(id) {
    let postId = id.split('-');
    
    powiadomienie(postId[1], id);
}
function powiadomienie(postId, id) {
      
      var url = "http://7628-185-203-252-14.eu.ngrok.io/Post/Delete?PostId=" + postId;
        fetch(url, {
        method: 'DELETE',
        })
        .then(res => Delete(res.status, id))
}
function Delete(result, id) {
    if (result == 204 || result == 200 ){
        var button = document.getElementById(id);
        let parentDivid = button.parentElement.parentElement.parentElement.id;
        document.getElementById(parentDivid).remove();
        swal("Post został usunięty!","", "success");
        window.location.reload();
    }else{
        swal("Post nie został usunięty!","", "error");
        window.location.reload();
    }
}