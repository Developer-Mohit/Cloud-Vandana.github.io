$(function() {

    $("#includedContent").load("readme.html");
    $("#includedNav").load("nav.html");
    $("#includedFooter").load("footer.html");

});
var myArray = [];
jQuery.get('database.txt', function(data) {
    database = JSON.parse(data);
});

var index = 0;

function resetIndex() {
    var i = 0;
    Array.prototype.slice.call(document.getElementById('tbl').rows).

    forEach(function(row) {
        row.childNodes[0].innerHTML = i++
    });

}

$(document).on('click', '.deleteBtn', function() {
    console.log($(this).parent().parent().remove())
    resetIndex()
});
$(document).on('click', '#addFirst', function() {
     if (index < database.length) {
     var markup = "<tr><th>1</th><td>" + database[index].firstname + "</td><td>" + database[index].lastname + "</td><td>" + database[index].city + "</td><td>" + database[index++].country + "</td><td><button type='button' class='deleteBtn btn btn-outline-danger'>Delete</button></td></tr>";
      $("thead").after(markup);        
      resetIndex()
      } else {
        html = "<div class='alert alert-danger' role='alert'>No more data Found in database Please update your <a href='database.txt'>dabase.txt</a> file. OR Please Refresh the Page</div>"
        $("#msg").html(html)
        $('#msg').toggle(3000);  ;
         
    
    }
});
$(document).on('click', '#addLast', function() {
    if (index < database.length) {
        var sn = document.getElementById("tbl").rows.length
        var markup = "<tr><th>1</th><td>" + database[index].firstname + "</td><td>" + database[index].lastname + "</td><td>" + database[index].city + "</td><td>" + database[index++].country + "</td><td><button type='button' class='deleteBtn btn btn-outline-danger'>Delete</button></td></tr>";
        $("#tbl").append(markup);
        resetIndex()
         
    } else {
        let html = "<div class='alert alert-danger' role='alert'>No more data Found in database Please update your <a href='database.txt'>dabase.txt</a> file.</div>"
         html = "<div class='alert alert-danger' role='alert'>No more data Found in database Please update your <a href='database.txt'>dabase.txt</a> file. OR Please Refresh the Page</div>"
        $("#msg").html(html)
        $('#msg').toggle(3000);         
    }
});

$(document).on('click', '#assingment1', function() {
$('.active').removeClass('active');
$("#includedContent").load("assingment1.html");
}
);

//------------Assigment-2 -----------------------

$(document).on('click', '#assingment2', function() {
$("#includedContent").load("assignment2.html");
}
);
$(document).on('click', '#assingment2Btn', function() {
 Sentence=$("#Sentence").val();
 letter=$("#letter").val();
 $("#output").html("");
 let result = Sentence.indexOf(letter);

if(result!=-1){

;
 $("#output").html("<div class='text-success'>Success</div><div class='p-5 alert alert-success' role='alert'>"+Sentence.substring(result+1)+"</div>")

}else{
  $("#output").html("<div class='text-danger'>Not Found</div><div class='p-5 alert alert-danger' role='alert'>The letter does not exist in the sentence</div>");     
}



}
);



/*---------------Assigment-2 End---------------*/