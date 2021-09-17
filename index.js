window.onload = function() {
    // sempre conferir se div está com id, e não class
    var elementoBody = document.getElementById("container-body");

    elementoBody.innerHTML = `<div class="container-films">
                                <img src="https://upload.wikimedia.org/wikipedia/en/9/94/The_Purge_film_poster.jpg" alt="The purge">
                                <div class="middle">
                                    <a class="assistir" href="https://www.youtube.com/watch?v=K0LLaybEuzA">ASSISTIR</a>
                                </div>
                            </div>
                            <div class="container-films">
                                <img src="https://upload.wikimedia.org/wikipedia/pt/9/94/Superhero_P%C3%B4ster.jpg">
                                <div class="middle">
                                    <a class="assistir" href="https://www.youtube.com/watch?v=eXw-EhegADo">ASSISTIR</a>
                                </div>
                            </div>`
}