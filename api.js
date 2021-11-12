 const url = 'http://7628-185-203-252-14.eu.ngrok.io/Post/GetAll';

 fetch(url)
   .then(response => response.json())
   .then(repos => {
     addHtml(repos); 
     
   })
 .catch(err => console.log(err))


const addHtml = (dane) => {
   const container =  document.getElementById('apiContent');

    dane.map((element,i) => {
      document.getElementById('apiContent').innerHTML += 
      "<div" + " id='" + element.id + "'" +" class='col pb-1' data-aos='zoom-in'>" +
        "<div class='card kafelek bg-UE border-white'>" +
          "<img class='card-img-top img-fluid'" + "src=" + element.imageUrl + "" + ">" +
            "<div class='card-body contrast'>" +
            "<p class='card-text contrast'>" + element.description + "</p>" + 
            "<button type='button'" + " id='b-" + element.id + "' " + "class='btn btn-outline-primary' onclick='deletePost(this.id)'>Usuń</button>" +            
            "</div>" +
        "</div>" +
      "</div>";
    })
}

