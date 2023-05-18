<script setup>
    import Map from './GlemhamMap.vue'
    import TaxiMap from './TaxiMap.vue'
    import AccomMap from './AccomMap.vue'
    import ContactForm from './ContactForm.vue'
</script>

<template>

    <p>Danielle and Paul are getting married on the <a rel="noopener" target="_blank" href="/assets/wedding.ics">9th August 2023</a>! We'd love to have you enjoy our special day with us. We hope this website will serve as a handy information reference for everything guests need to know, be it the daytime ceremony, venue information or evening's entertainment.</p>

    <p>Please come back after the wedding and upload your photos of the day, we can't wait to see all of them!</p>

    <h2 id="venue">The Venue</h2>

    <p>Found on the outskirts of the pretty village of Little Glemham, just outside Woodbridge, stands Glemham Hall surrounded in 300 acres of beautiful Suffolk parkland. A long, sweeping drive leads you directly to the 16th century country house.</p>

    <img src="@/assets/img/glemham.jpg" class="full-image" alt="Glemham Hall Exterior"/>

    <p>Built circa 1560 by the de Glemham Family, Glemham Hall is now owned by Thomas Hope-Cobbold who inherited it from his father in 2020. With a proud history of changing architecture and landscape, the 3000 acre estate hosts a working farm, as well as a busy and varied events calendar, featuring folk festivals, garden theatre, cycling events, antique fairs along with house & garden tours.</p>

    <h3 id="map">Directions</h3>

    <p>Easy to find and located just off the A12, Glemham Hall is a 2.5 hour drive from central London. Nearby, the pretty towns of Aldeburgh, Framlingham and Woodbridge have a great selection of special places to stay.</p>

    <Map />

    <h3 id="taxis">Carriages</h3>
    <p>As we're in a fairly rural location, please make sure to pre-book a taxi from one of the reputable firms below, should you require it. Carriages at midnight, please. </p>

    <TaxiMap />

    <h3 id="accommodation">Accommodation</h3>
    <p>Please find a map below of various options for local accommodation:</p>

    <AccomMap />

    <h3 id="parking">Parking</h3>
    <p>There is plenty of parking at the venue but please note that all vehicles left overnight must be collected by 10am the following morning.</p>

    <img src="@/assets/img/minis.jpeg"  class="full-image" alt="Minis at Glemham Hall" />

    <h3 id="gifts">Gifts</h3>

    <div id="poem">
        <p>We've lived together quite a while with all our pots and pans, <br>and as we don't need homely gifts we've got another plan!</p>

        <p>We know it's not traditional and not the way it's done, <br>but rather than a wedding list we'd like a bit of sun.</p>

        <p>So if you'd like to give a gift and send us on our way,<br/>
        a donation towards our honeymoon would really make our day.</p>

        <p>But the choice is really up to you and we would just like to say, <br/>
        that the best gift we could receive is you, here on our special day</p>
    </div>

    <h3 id="children">Children</h3>
    <p>Due to numbers, we are unable to invite everyone's children, we really hope you take this opportunity to take a well-deserved evening off, child-free, to celebrate with us</p>


    <h2 id="daytime-guests">Daytime Guests</h2>
    <h3 id="daytime-menu-choice">Daytime Menu Options</h3>

    <p>Please confirm your choices, along with any specific dietary requirements, on the RSVP card with your invitation. If you need to let us know anything else, feel free to use the contact form at the end of the page!</p>

    <table>
        <tr>
            <td rowspan="2" class="table-title"><h4>Starter</h4></td>
            <td><p>Salmon fishcake, spiced tartare sauce, pea salad, tarragon vinaigrette</p></td>
        </tr>
        <tr>
            <td><p>Honey roasted pear salad, goat's cheese mousse, candied walnut granola (v)</p></td>
        </tr>
        <tr>
            <td rowspan="2" class="table-title"><h4>Main</h4></td>
            <td><p>Braised lamb shoulder, celeriac dauphinoise, carrot, salsa verde, red wine jus</p></td>
        </tr>
        <tr>
            <td><p>Caramelised shallot tartlet, celeriac dauphinoise, roasted broccoli, red wine jus (v)</p></td>
        </tr>
        <tr>
            <td rowspan="2" class="table-title"><h4>Dessert</h4></td>
            <td><p>Rosewater, pistachio and raspberry eton mess</p></td>
        </tr>
        <tr>
            <td><p>White chocolate & passionfruit cheesecake, coconut & macadamia granola</p></td>
        </tr>
        <tr>
            <td rowspan="2" class="table-title"><h4>Kids</h4></td>
            <td><p>Fish fingers and chips</p></td>
        </tr>
        <tr>
            <td><p>Chicken nuggets and chips</p></td>
        </tr>

    </table>

    <h2 id="evening-guests">Evening Guests</h2>
    <h3 id="evening-menu-choice">Evening Food</h3>
    <p>There'll be a choice of food (plus some surprise snacks!) in the evening. If you've got any specific dietary requirements please let us know either on the RSVP card enclosed in your invitation or by using the contact form below!</p>

    <table>
        <tr>
            <td rowspan="2" class="table-title"><h4>Evening</h4></td>
            <td><p>Mini fish and chips</p></td>
        </tr>
        <tr>
            <td><p>Halloumi and chips (v)</p></td>
        </tr>

    </table>

    <h3 id="upload-your-photos">Photos</h3>

    <p>Check back after the wedding to upload your photos here! We'll also send out gallery links where you can view all the lovely pictures captured on our special day!</p>

    <h3 id="contact">Contact Us</h3>

    <ContactForm/>

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

    table {
        width: 100%;
    }

    table, th, td {
        border: 1px solid var(--vt-c-grey-half);
    }

    td {
        padding: 20px;
    }

    td p {
        margin:0;
        padding: 0;
        font-style: italic;
    }

    .table-title {
        width:30%;
    }

    #poem {
        text-align: center;
        font-style: italic;
    }
</style>