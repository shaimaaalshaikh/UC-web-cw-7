const movie1= {
name : "coco",
img :"https://th.bing.com/th/id/OIP.5TGkGn5-L83N6er3Nr7XCQHaLH?pid=ImgDet&rs=1",
}
const movie2={
name:"spiderman",
img:"https://th.bing.com/th/id/R.0a2d26cbca03b25410fe3350ee614263?rik=kmoDJ1AXud3toA&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2016%2f11%2fSpider-Man-Computer-Wallpaper.jpg&ehk=MHg7aFzaI%2bnDPCuNHfVbsx5IVO%2fiVgEmXMLQPXelV4Y%3d&risl=&pid=ImgRaw&r=0",
}
const movie3={
name:"harrypotter",
img:"https://th.bing.com/th/id/R.d18f3abaeae7876693207c2927d5e7f2?rik=copofMakypQQxQ&riu=http%3a%2f%2fimages.fanpop.com%2fimages%2fimage_uploads%2fHarry-Potter-harry-potter-122660_1280_1024.jpg&ehk=A%2f2goeGgeiGN%2fmRj3brrDzd%2bB9vPXWHxXnx26GqOVdA%3d&risl=&pid=ImgRaw&r=0",
}

const movies = []
movies.push(movie1)
movies.push(movie2)
movies.push(movie3)


let movieContainer = document.getElementById("container");
movies.forEach(function(movie){
    movieContainer.innerHTML += `
    <div class="movie">
    <img src="${movie.img}" alt="movie picture" />
    <h2>${movie.name}</h2>
    </div>
   `;

}


)