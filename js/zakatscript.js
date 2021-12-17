function showIframe(){
    var a=document.getElementById('framediv');
    var b=document.getElementById('frame');

    a.style.display="block";
    b.style.display="block";
//     a.append('<div id="framediv">');
//     b.append('  <iframe id="frame" class="container "  name="frm" >');
 }
function hideIframe(){
    var a=document.getElementById('framediv');
    var b=document.getElementById('frame');
    // var c=document.getElementById('na3t');

    // c.pause();
    // b.remove();
    // a.remove();
// console.log(b.value)

    a.style.display="none";
    b.style.display="none";
   

}



// $(document).ready(function(){
// $("#closeVideo").click(function(){
// $('#framediv').hide();
//  $('#frame').hide();
// //  var bb=$('#na3t').attr("href").value="";
//  console.log(bb);


//     });
// });