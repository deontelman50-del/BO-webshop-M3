html code.

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>webshop</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
</head>

<body>
    <header>
        <!-- <h1>Kawasaki motorcycles</h1> -->
        <img class="header-img"src="img/kawasaki-logo.webp" alt="Kawasaki logo">
    </header>
    <section class="cta">
        <img class="all-motors-img"src="img/real-every-img.png" alt="Kawasaki motorcycles">
        <h3>Discover the power of Kawasaki motorcycles</h3>
        <button class="btn">shop now</button>
    </section>
    <footer>
        footer
    </footer>
</body>

</html>

css code.

:root {
    --primary-color: limegreen;
    --secondary-color: white;
    --background-color: white;
    --text-color: black;
}

* {
    font-family: "Pacifico", cursive;
    padding: 0;
    margin: 0;
}

body {
    background-color: var(--background-color);
    font-size: 2.5rem
}

header {
    background-color: var(--primary-color) ;
    width: 100%;
    height: 50rem;
    border: solid 0.5rem white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.header-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

section.cta {
    background-color: var(--primary-color);
    border: solid 0.5rem white;
    width: 100%;
    height: 60rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.cta-text {
    position: absolute;
}

.btn {
    background-color: white;
    color: black;
    padding: 1rem 3rem;
    text-decoration: none;
    border-radius: 1rem;
    font-size: 2rem;
    width: 12rem;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

footer {
    background-color: var(--primary-color);
    border: solid 0.5rem white;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
