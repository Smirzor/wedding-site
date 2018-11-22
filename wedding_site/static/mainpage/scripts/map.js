var OHWBmarker;
var prev_infowindow = false; //temporary variable for last infowindow
var hotel5min_1; //Roebuck Inn
var hotel5min_2; //The Hinton Guest House
var hotel15min_1; //Airport Inn
var hotel15min_2; //Holiday Inn Express
var hotel15min_3; //Cottons Hotel
var hotel15min_4; //Alderley Edge Hotel
var hotel15min_5; //Premier Inn Knutsford
var hotel15min_6; //Premier Inn Manchester Airport
var hotel15min_7; //Travelodge Knutsford

function initMap() { } // declre so initMap will be recognized as function in global layer

$(() => {
    var ohwb = {lat: 53.330357, lng: -2.325906}
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: 53.331069, lng: - 2.316724 }
    });  
    /* use following settings for non dragable version:
     * -------------------------------------------------------------
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        draggable: false,
        center: { lat: 53.354320, lng: - 2.324117}});
     * -------------------------------------------------------------
     */

    OHWBmarker = new google.maps.Marker({
        map: map,
        draggable: false,
        icon: '/static/mainpage/img/OHWBpin.png',
      /* standard google location dots
      http://maps.google.com/mapfiles/ms/icons/green-dot.png 
      http://maps.google.com/mapfiles/ms/icons/blue-dot.png 
      http://maps.google.com/mapfiles/ms/icons/red-dot.png 
      http://maps.google.com/mapfiles/ms/icons/yellow-dot.png
      */
        animation: google.maps.Animation.DROP,
        position: ohwb
    });
    //Roebuck Inn
    hotel5min_1 = new google.maps.Marker({
        map: map,
        draggable: false,
        icon: '/static/mainpage/img/hotelpin5min.png',
        animation: google.maps.Animation.DROP,
        position: { lat: 53.312845, lng: -2.317762}
    });
    //The Hinton Guest House
    hotel5min_2 = new google.maps.Marker({
        map: map,
        draggable: false,
        icon: '/static/mainpage/img/hotelpin5min.png',
        animation: google.maps.Animation.DROP,
        position: { lat: 53.313408, lng: -2.328806 }
    });
    //Airport Inn
    hotel15min_1 = new google.maps.Marker({
        map: map,
        draggable: false,
        icon: '/static/mainpage/img/hotelpin15min.png',
        animation: google.maps.Animation.DROP,
        position: { lat: 53.343203, lng: -2.276762 } 
    });
    //Holiday Inn Express
    hotel15min_2 = new google.maps.Marker({
        map: map,
        draggable: false,
        icon: '/static/mainpage/img/hotelpin15min.png',
        animation: google.maps.Animation.DROP,
        position: { lat: 53.362620, lng: -2.293966}
    });
    //Cottons Hotel
    hotel15min_3 = new google.maps.Marker({
        map: map,
        draggable: false,
        icon: '/static/mainpage/img/hotelpin15min.png',
        animation: google.maps.Animation.DROP,
        position: { lat: 53.319590, lng: -2.392870}										
    });
    //Alderley Edge Hotel
    hotel15min_4 = new google.maps.Marker({
        map: map,
        draggable: false,
        icon: '/static/mainpage/img/hotelpin15min.png',
        animation: google.maps.Animation.DROP,
        position: { lat: 53.298478, lng: -2.233924}
    });
    //Premier Inn Knutsford
    hotel15min_5 = new google.maps.Marker({
        map: map,
        draggable: false,
        icon: '/static/mainpage/img/hotelpin15min.png',
        animation: google.maps.Animation.DROP,
        position: { lat: 53.345231, lng: -2.404593}
    });
    //Premier Inn Manchester Airport
    hotel15min_6 = new google.maps.Marker({
        map: map,
        draggable: false,
        icon: '/static/mainpage/img/hotelpin15min.png',
        animation: google.maps.Animation.DROP,
        position: { lat: 53.364205, lng: -2.294120 }
    });
    //Travelodge Knutsford
    hotel15min_7 = new google.maps.Marker({
        map: map,
        draggable: false,
        icon: '/static/mainpage/img/hotelpin15min.png',
        animation: google.maps.Animation.DROP,
        position: { lat: 53.300608, lng: -2.402764 }
    });
    

    //info Text Hotel 1 5min
    var infC_5min_1 = '<p class="infowindow">The Roebuck Inn (B&B)</p>'+
                      '<p class="infowindow"><a href="https://roebuckinnmobberley.co.uk/" target="_blank">click to open B&B Page</a>';
    var infW_5min_1 = new google.maps.InfoWindow({
                            content: infC_5min_1,
                            maxWidth: 150
                        });
    //info Text Hotel 2 5min
    var infC_5min_2 = '<p class="infowindow">The Hinton Guest House (B&B)</p>'+
                      '<p class="infowindow"><a href="https://thehintonguesthouse.co.uk/" target="_blank">click to open B&B Page</a>';
    var infW_5min_2 = new google.maps.InfoWindow({
                            content: infC_5min_2,
                            maxWidth: 150
                        });
    //info Text Hotel 1 15min
    var infC_15min_1 = '<p class="infowindow">Airport Inn (Hotel)</p>'+
                       '<p class="infowindow"><a href="https://www.britanniahotels.com/hotels/the-airport-inn-manchester" target="_blank">click to open Hotel Page/</a>';
    var infW_15min_1 = new google.maps.InfoWindow({
                            content: infC_15min_1,
                            maxWidth: 150
                        });
    //info Text Hotel 2 15min
    var infC_15min_2 = '<p class="infowindow">Holiday Inn Express</p>'+
                       '<p class="infowindow"><a href="https://www.ihg.com/holidayinnexpress/hotels/gb/en/manchester/mchma/hoteldetail" target="_blank">click to open Hotel Page</a>';
    var infW_15min_2 = new google.maps.InfoWindow({
                            content: infC_15min_2,
                            maxWidth: 150
                        });
    //info Text Hotel 3 15min
    var infC_15min_3 = '<p class="infowindow">Cottons Hotel</p>'+
                       '<p class="infowindow"><a href="https://www.cottonshotel.co.uk/" target="_blank">click to open Hotel Page</a>';
    var infW_15min_3 = new google.maps.InfoWindow({
                            content: infC_15min_3,
                            maxWidth: 150
                        });		
    //info Text Hotel 4 15min
    var infC_15min_4 = '<p class="infowindow">Alderley Edge Hotel</p>' +
                       '<p class="infowindow"><a href="https://www.alderleyedgehotel.com/" target="_blank">click to open Hotel Page</a>';
    var infW_15min_4 = new google.maps.InfoWindow({
                            content: infC_15min_4,
                            maxWidth: 150
                        });	

    //info Text Hotel 5 15min
    var infC_15min_5 = '<p class="infowindow">Premier Inn Knutsford</p>' +
                       '<p class="infowindow"><a href="https://www.premierinn.com/gb/en/hotels/england/cheshire/knutsford/knutsford-bucklow-hill.html" target="_blank">click to open Hotel Page</a>';
    var infW_15min_5 = new google.maps.InfoWindow({
                            content: infC_15min_5,
                            maxWidth: 150
                        });	

    //info Text Hotel 6 15min
    var infC_15min_6 = '<p class="infowindow">Premier Inn MAN Airport</p>' +
                       '<p class="infowindow"><a href="https://www.premierinn.com/gb/en/hotels/england/greater-manchester/manchester/manchester-airport-m56j6-runger-lane-south.html" target="_blank">click to open Hotel Page</a>';
    var infW_15min_6 = new google.maps.InfoWindow({
                            content: infC_15min_6,
                            maxWidth: 150
                        });	

    //info Text Hotel 7 15min
    var infC_15min_7 = '<p class="infowindow">Travelodge Knutsford (on M6)</p>' +
                       '<p class="infowindow"><a href="https://www.travelodge.co.uk/hotels/141/Knutsford-M6-hotel" target="_blank">click to open Hotel Page</a>';
    var infW_15min_7 = new google.maps.InfoWindow({
                            content: infC_15min_7,
                            maxWidth: 150
                        });	
 

    // click markers to show infotext					
    hotel5min_1.addListener('click', function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_5min_1;
        infW_5min_1.open(map, hotel5min_1);
    });
    hotel5min_2.addListener('click', function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_5min_2;
        infW_5min_2.open(map, hotel5min_2);
    });
    hotel15min_1.addListener('click', function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_15min_1;
        infW_15min_1.open(map, hotel15min_1);
    });
    hotel15min_2.addListener('click', function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_15min_2;
        infW_15min_2.open(map, hotel15min_2);
    });
    hotel15min_3.addListener('click', function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_15min_3;
        infW_15min_3.open(map, hotel15min_3);
    });
    hotel15min_4.addListener('click', function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_15min_4;
        infW_15min_4.open(map, hotel15min_4);
    });
    hotel15min_5.addListener('click', function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_15min_5;
        infW_15min_5.open(map, hotel15min_5);
    });
    hotel15min_6.addListener('click', function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_15min_6;
        infW_15min_6.open(map, hotel15min_6);
    });
    hotel15min_7.addListener('click', function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_15min_7;
        infW_15min_7.open(map, hotel15min_7);
    });


    // click link to show infotext
    $(function(){
        $("li a").click(
            function(e){
            e.preventDefault(); //To prevent the default anchor tag behavior
        });
    });	
    $("#hotel1_5min").click(function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_5min_1;
        infW_5min_1.open(map, hotel5min_1);
    });
    $("#hotel2_5min").click(function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_5min_2;
        infW_5min_2.open(map, hotel5min_2);
    });
    $("#hotel1_15min").click(function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_15min_1;
        infW_15min_1.open(map, hotel15min_1);
    });
    $("#hotel2_15min").click(function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_15min_2;
        infW_15min_2.open(map, hotel15min_2);
    });
    $("#hotel3_15min").click(function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_15min_3;
        infW_15min_3.open(map, hotel15min_3);
    });
    $("#hotel4_15min").click(function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_15min_4;
        infW_15min_4.open(map, hotel15min_4);
    });
    $("#hotel5_15min").click(function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_15min_5;
        infW_15min_5.open(map, hotel15min_5);
    });
    $("#hotel6_15min").click(function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_15min_6;
        infW_15min_6.open(map, hotel15min_6);
    });
    $("#hotel7_15min").click(function () {
        if (prev_infowindow) {
            prev_infowindow.close();
        }

        prev_infowindow = infW_15min_7;
        infW_15min_7.open(map, hotel15min_7);
    });

}) 

$(function(){
    /* 5 minute hotel 1 */
    $("#hotel1_5min").mouseover(function (e) { hotel5min_1.setAnimation(google.maps.Animation.BOUNCE); });
    $("#hotel1_5min").mouseleave(function (e) { hotel5min_1.setAnimation(null); });
    /* 5 minute hotel 2 */
    $("#hotel2_5min").mouseover(function (e) { hotel5min_2.setAnimation(google.maps.Animation.BOUNCE); });
    $("#hotel2_5min").mouseleave(function (e) { hotel5min_2.setAnimation(null); });
    /* 15 minute hotel 1 */
    $("#hotel1_15min").mouseover(function (e) { hotel15min_1.setAnimation(google.maps.Animation.BOUNCE); });
    $("#hotel1_15min").mouseleave(function (e) { hotel15min_1.setAnimation(null); });
    /* 15 minute hotel 2 */
    $("#hotel2_15min").mouseover(function (e) { hotel15min_2.setAnimation(google.maps.Animation.BOUNCE); });
    $("#hotel2_15min").mouseleave(function (e) { hotel15min_2.setAnimation(null); });
    /* 15 minute hotel 3 */
    $("#hotel3_15min").mouseover(function (e) { hotel15min_3.setAnimation(google.maps.Animation.BOUNCE); });
    $("#hotel3_15min").mouseleave(function (e) { hotel15min_3.setAnimation(null); });    
    /* 15 minute hotel 4 */
    $("#hotel4_15min").mouseover(function (e) { hotel15min_4.setAnimation(google.maps.Animation.BOUNCE); });
    $("#hotel4_15min").mouseleave(function (e) { hotel15min_4.setAnimation(null); });	
    /* 15 minute hotel 5 */
    $("#hotel5_15min").mouseover(function (e) { hotel15min_5.setAnimation(google.maps.Animation.BOUNCE); });
    $("#hotel5_15min").mouseleave(function (e) { hotel15min_5.setAnimation(null); });	
    /* 15 minute hotel 6 */
    $("#hotel6_15min").mouseover(function (e) { hotel15min_6.setAnimation(google.maps.Animation.BOUNCE); });
    $("#hotel6_15min").mouseleave(function (e) { hotel15min_6.setAnimation(null); });
    /* 15 minute hotel 7 */
    $("#hotel7_15min").mouseover(function (e) { hotel15min_7.setAnimation(google.maps.Animation.BOUNCE); });
    $("#hotel7_15min").mouseleave(function (e) { hotel15min_7.setAnimation(null); });
});	