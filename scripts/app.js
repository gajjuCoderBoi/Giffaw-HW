document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('go').addEventListener('click', (e)=>{
        e.preventDefault();
        const input = document.getElementsByName('q')[0].value;
        fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=DR0aybS6P5puVUGJRGIgEweMQVKHuIqd`)
            .then(res=>res.json())
            .then(res=>{
                let gallery =  document.getElementsByClassName('gif-gallery')[0];
                while (gallery.hasChildNodes()){
                    gallery.lastElementChild.remove();
                }
                res.data.forEach(gif=>{
                    let div = document.createElement('div');
                    let h1 = document.createElement('h1');
                    let img = document.createElement('img');
                    img.setAttribute('src', gif.images.preview_gif.url)
                    h1.innerText = gif.title;
                    div.appendChild(img);
                   gallery.appendChild(div);
                })
            })
    })


});
