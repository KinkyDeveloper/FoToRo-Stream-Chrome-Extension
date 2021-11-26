var contents = document.getElementsByClassName('postcontent');

if(contents.length > 0) {
    var anchor = contents[0].firstElementChild;
    anchor.href = "#";

    if(window.location.href.match(/^https:\/\/www.chastitybabes.com\/archives\/\d+#?$/))
    {
        var id = document.getElementsByClassName('post_info')[0].innerText.match(/Update CB (\d+)/)[1];

        var video = document.createElement("video");
        video.src = 'http://localhost:3000/video?search=cb'+id;
        video.autoplay = true;
        video.controls = true;
        video.style = "width: 100%";

        if(anchor.nextSibling) {
            anchor.parentNode.insertBefore(video, anchor.nextSibling);
        } else {
            anchor.parentNode.appendChild(video);
        }
    }
}