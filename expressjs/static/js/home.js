$("#btn").click(function(){
    console.log("toto");
    $.ajax({
        "url":"/users",
        "method":"GET"
    }).done(function(data){
        let contenu = "<ul>"
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            contenu += "<li>"+ element + "</li>";
        }
        contenu += "</ul>";
        $("#utilisateurs").html(contenu);
    })
});