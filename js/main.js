
// I know this is a super dumb and ineffecient way of showing/hiding the sections but at least it's working
function showSection(sectionName) {
    var homeContent, albumContent, artistContent, asideContent;
    homeContent = document.getElementsByClassName("home_page");
    albumContent = document.getElementsByClassName("album_page");
    artistContent = document.getElementsByClassName("artist_page");
    for (var i = 0; i < homeContent.length;i++) {
        homeContent[i].style.display = "none";
    }
    for (var i = 0; i < albumContent.length;i++) {
        albumContent[i].style.display = "none";
    }
    for (var i = 0; i < artistContent.length;i++) {
        artistContent[i].style.display = "none";
    }
    
    if (sectionName == 'home') {
        for (var i = 0; i < homeContent.length;i++) {
            homeContent[i].style.display = "inline";
        }
    }
    else if (sectionName == 'albums') {
        for (var i = 0; i < albumContent.length;i++) {
            albumContent[i].style.display = "inline";
        }
    }
    else {
        for (var i = 0; i < artistContent.length;i++) {
            artistContent[i].style.display = "inline";
        }
    }
}