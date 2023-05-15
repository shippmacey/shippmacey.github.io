<script setup>
    import Map from './GlemhamMap.vue'
    import TaxiMap from './TaxiMap.vue'
    import AccomMap from './AccomMap.vue'
</script>

<template>
    <p>Welcome to our wedding information website</p>

    <h2 id="venue">The Venue</h2>

    <p>Found on the outskirts of the pretty village of Little Glemham, just outside Woodbridge, stands Glemham Hall surrounded in 300 acres of beautiful Suffolk parkland. A long, sweeping drive leads you directly to the 16th century country house.</p>

    <img src="@/assets/img/glemham.jpg" class="full-image" alt="Glemham Hall Exterior"/>

    <p>Built circa 1560 by the de Glemham Family, Glemham Hall is now owned by Thomas Hope-Cobbold who inherited it from his father in 2020. With a proud history of changing architecture and landscape, the 3000 acre estate hosts a working farm, as well as a busy and varied events calendar, featuring folk festivals, garden theatre, cycling events, antique fairs along with house & garden tours.</p>

    <h3 id="venue">Getting here</h3>

    <p>Easy to find and located just off the A12, Glemham Hall is a 2.5 hour drive from central London. Nearby, the pretty towns of Aldeburgh, Framlingham and Woodbridge have a great selection of special places to stay.</p>

    <Map />

    <h3 id="venue">Book a taxi</h3>
    <p>As we're in a fairly rural location, please make sure to pre-book a taxi from one of the reputable firms below, should you require it. Carriages at midnight. </p>

    <TaxiMap />

    <h3 id="venue">Local Accommodation</h3>
    <p>Please find a map below of various options for local accommodation:</p>

    <AccomMap />

    <h3 id="venue">Parking</h3>
    <p>There is plenty of parking at the venue but please note that all vehicles left overnight must be collected by 10am the following morning.</p>

    <img src="@/assets/img/minis.jpeg"  class="full-image" alt="Minis at Glemham Hall" />

    <h3 id="gifts">Gifts</h3>
    <p>We've lived together quite a while with all our pots and pans, <br>and as we don't need homely gifts we've got another plan!</p>

    <p>We know it's not traditional and not the way it's done, <br>but rather than a wedding list we'd like a bit of sun.</p>

    <p>So if you'd like to give a gift and send us on our way,<br/>
    a donation towards our honeymoon would really make our day.</p>

    <p>But the choice is really up to you and we would just like to say, <br/>
    that the best gift we could receive is you, here on our special day</p>

    <h3 id="children">Children</h3>
    <p>Due to numbers, we are unable to invite everyone's children, we really hope you take this opportunity to take a well-deserved evening off, child-free, to celebrate with us</p>



    <h3>Daytime Menu Options</h3>

    <p>Please confirm your choices, along with any specific dietary requirements, on the rsvp card with your invitation</p>

    <h4>Starter</h4>
    <p>Salmon fishcake, spiced tartare sauce, pea salad, tarragon vinaigrette <br>or <br>Honey roasted pear salad, goat's cheese mousse, candied walnut granola (v)</p>

    <h4>Main</h4>
    <p>Braised lamb shoulder, celeriac dauphinoise, carrot, salsa verde, red wine jus <br/>or <br/>Caramelised shallot tartlet, celeriac dauphinoise, roasted broccoli, red wine jus (v)</p>

    <h4>Dessert</h4>
    <p>Rosewater, pistachio and raspberry eton mess <br/><span>or</span> <br/>White chocolate & passionfruit cheesecake, coconut & macadamia granola</p>

    <h4>Kids</h4>
    <p>Fish fingers and chips <br/>or <br/>Chicken nuggets and chips</p>

    <h3>Evening food</h3>
    <p>There will be a choice of mini fish and chips, or halloumi and chips as a vegetarian alternative. please indicate any dietary requirements on the enclosed rsvp card</p>

</template>

<style>

    h2, h3, h4 {
        color: var(--vt-c-grey);
        text-align: center;
        margin: 20px auto;
    }

    h2:hover, h3:hover {
        color: var(--vt-c-pink);
    }

    h2 {
        font-size: 4.5rem;
    }

    h3 {
        font-size: 3.8rem;
    }

    h4 {
        font-size: 3rem;
    }

    img.full-image {
        width:100%;
        margin:20px 0;
    }

    .map {
        margin: 70px auto
    }

</style>