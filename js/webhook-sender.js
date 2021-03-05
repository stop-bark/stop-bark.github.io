$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        if (link==null || link=="", content==null || content=="")
        {
            alert("Link or content forms were not given any argument");
            return false;
        }
        const data = {
            content: content,
            username: username,
            avatar_url: avatar
        }
        $.post(link, data, function(data, status){
            alert(`${data} and status is ${status}`)
        }) .catch(err=>alert(err));
    });
});
