<script setup>

</script>

<template>

    <nav class="navbar">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#venue" role="button" data-bs-toggle="dropdown" aria-expanded="false">The Venue</a>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="#venue">About Glemham Hall</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#map">Getting here</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#taxis">Book a taxi</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#accommodation">Local Accommodation</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#parking">Parking</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle"  href="#daytime-guests" role="button" data-bs-toggle="dropdown" aria-expanded="false">Daytime Information</a>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="#daytime-menu-choice">Menu Choices</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#evening-guests" role="button" data-bs-toggle="dropdown" aria-expanded="false">Evening Information</a>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="#evening-menu-choice">Food & Drinks</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#gifts">Gifts</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#upload-your-photos">Upload Photos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
            </li>

            </ul>
        </div>
    </nav>
</template>

<style scoped>

    nav {
        border-top: solid 1px var(--vt-c-grey-half);
        border-bottom: solid 1px var(--vt-c-grey-half);
        margin-bottom: 3vh;
    }
    ul {
        padding:0;
        text-align: center;
    }

    li {
        display: inline-block;
        list-style-type: none;
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 3.5rem;
    }

    li a {
        padding:10px 20px;
        margin: auto auto;
        line-height:3.5rem;
        font-weight: 800;
    }

    ul li ul {
        display: none;
    }

    ul li.dropdown:hover .dropdown-menu {
        display: block;
        position: absolute;
        background-color: var(--vt-c-pink);
    }

    ul li.dropdown:hover .dropdown-menu li {
        display: block;
        float: left;
        clear: both;
    }



</style>