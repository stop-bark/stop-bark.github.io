var api_key = "bea18ec07cabb345a3afc4700e695c4f744a89fe324e7345e99d87ac";

$('#btn').click(function () {
    var ip = $('#ip').val();
    if (ip == null || ip == "") {
        alert("No IP was entered.");
        return false;
    }
    $.getJSON(`https://api.ipdata.co/${ip}/?api-key=${api_key}`, function (data) {
        var ip = data.ip;
        console.log(`Data about searched up ip "${ip}": ${JSON.stringify(data)}`)
        var is_europe = data.is_eu;
        var city = data.city;
        var region = data.region;
        var region_code = data.region_code;
        var country_name = data.country_name;
        var country_code = data.country_code;
        var continent_name = data.continent_name;
        var continent_code = data.continent_code;
        var latitude = data.latitude;
        var longitude = data.longitude;
        var postal = data.postal;
        var calling_code = data.calling_code;
        var flag = data.flag;
        var isp = data.asn.name;
        var isp_link = data.asn.domain;
        var currency_name = data.currency.name;
        var currency_code = data.currency.code;
        var timezone_name = data.time_zone.name;
        var timezone_abbr = data.time_zone.abbr;
        var timezone_offset = data.time_zone.offset;
        var timezone_current_time = data.time_zone.current_time;
        var tor = data.threat.is_tor;
        var proxy = data.threat.is_proxy;
        var anonymous = data.threat.is_anonymous;
        var known_attacker = data.threat.is_known_attacker;
        var known_abuser = data.threat.is_known_abuser;
        var threat = data.threat.is_threat;
        var bogon = data.threat.bogon;
        
        $('.error').html("")
        $('.ip').html(`IP: ${ip}`);
        $('.is_europe').html(`Is he from europe?: ${is_europe}`);
        $('.city').html(`City: ${city}`);
        $('.region').html(`Region: ${region}`);
        $('.region_code').html(`Region Code: ${region_code}`);
        $('.country').html(`Country: ${country_name}`);
        $('.country_code').html(`Country Code: ${country_code}`);
        $('.continet_name').html(`Continent Name: ${continent_name}`);
        $('.continent_code').html(`Continent Code: ${continent_code}`);
        $('.latitude').html(`Latitude: ${latitude}`);
        $('.longitude').html(`Longitude: ${longitude}`);
        $('.postal').html(`Postal code: ${postal}`);
        $('.calling_code').html(`Calling code: ${calling_code}`);
        $('.flag').html(`Flag: ${flag}`);
        $('.isp').html(`ISP: ${isp}`);
        $('.isp_link').html(`ISP Link: ${isp_link}`);
        $('currency').html(`Currency: ${currency_name} / ${currency_code}`);
        $('timezone_name').html(`timezone_name: ${timezone_name}`);
        $('timezone_abbr').html(`timezone_abbr: ${timezone_abbr}`);
        $('timezone_offset').html(`timezone_offset: ${timezone_offset}`);
        $('timezone_current_time').html(`timezone_current_time: ${timezone_current_time}`);
        $('tor').html(`tor: ${tor}`);
        $('proxy').html(`proxy: ${proxy}`);
        $('anonymous').html(`anonymous: ${anonymous}`);
        $('known_attacker').html(`known_attacker: ${known_attacker}`);
        $('known_abuser').html(`known_abuser: ${known_abuser}`);
        $('threat').html(`threat: ${threat}`);
        $('bogon').html(`bogon: ${bogon}`);
    }).catch(err => $('.error').html("Error: Invalid IP"),
    $('.ip').html(""),
    $('.is_europe').html(""),
    $('.city').html("")),
    $('.region').html(""),
    $('.region_code').html(""),
    $('.country').html(""),
    $('.country_code').html(""),
    $('.continet_name').html(""),
    $('.continent_code').html(""),
    $('.latitude').html(""),
    $('.longitude').html(""),
    $('.postal').html(""),
    $('.calling_code').html(""),
    $('.flag').html(""),
    $('.isp').html("");
    $('.isp_link').html(""),
    $('currency').html(""),
    $('timezone_name').html(""),
    $('timezone_abbr').html(""),
    $('timezone_offset').html(""),
    $('timezone_current_time').html(""),
    $('tor').html(""),
    $('proxy').html(""),
    $('anonymous').html(""),
    $('known_attacker').html(""),
    $('known_abuser').html(""),
    $('threat').html(""),
    $('bogon').html("")

})

$.getJSON(`https://api.ipdata.co?api-key=${api_key}`, function (data) {
    var ip = data.ip;
    console.log(`Data about your ip "${ip}": ${JSON.stringify(data)}`)
    var is_europe = data.is_eu;
    var city = data.city;
    var region = data.region;
    var region_code = data.region_code;
    var country_name = data.country_name;
    var country_code = data.country_code;
    var continent_name = data.continent_name;
    var continent_code = data.continent_code;
    var latitude = data.latitude;
    var longitude = data.longitude;
    var postal = data.postal;
    var calling_code = data.calling_code;
    var flag = data.flag;
    var isp = data.asn.name;
    var isp_link = data.asn.domain;
    var currency_name = data.currency.name;
    var currency_code = data.currency.code;
    var timezone_name = data.time_zone.name;
    var timezone_abbr = data.time_zone.abbr;
    var timezone_offset = data.time_zone.offset;
    var timezone_current_time = data.time_zone.current_time;
    var tor = data.threat.is_tor;
    var proxy = data.threat.is_proxy;
    var anonymous = data.threat.is_anonymous;
    var known_attacker = data.threat.is_known_attacker;
    var known_abuser = data.threat.is_known_abuser;
    var threat = data.threat.is_threat;
    var bogon = data.threat.bogon;

    $('.error').html("")
    $('.ip').html(`Your IP: ${ip}`);
    $('.is_europe').html(`Are you from europe?: ${is_europe}`);
    $('.city').html(`Your City: ${city}`);
    $('.region').html(`Your Region: ${region}`);
    $('.region_code').html(`Your Region Code: ${region_code}`);
    $('.country').html(`Your Country: ${country_name}`);
    $('.country_code').html(`Your Country Code: ${country_code}`);
    $('.continet_name').html(`Your Continent Name: ${continent_name}`);
    $('.continent_code').html(`Your Continent Code: ${continent_code}`);
    $('.latitude').html(`Your Latitude: ${latitude}`);
    $('.longitude').html(`Your Longitude: ${longitude}`);
    $('.postal').html(`Your postal code: ${postal}`);
    $('.calling_code').html(`Your calling code: ${calling_code}`);
    $('.flag').html(`Your flag: ${flag}`);
    $('.isp').html(`Your ISP: ${isp}`);
    $('.isp_link').html(`Your ISP Link: ${isp_link}`);
    $('currency').html(`Currency: ${currency_name} / ${currency_code}`);
    $('timezone_name').html(`Your timezone name: ${timezone_name}`);
    $('timezone_abbr').html(`Your timezone abbr: ${timezone_abbr}`);
    $('timezone_offset').html(`Your timezone offset: ${timezone_offset}`);
    $('timezone_current_time').html(`Your timezone's current time: ${timezone_current_time}`);
    $('tor').html(`Are you using Tor: ${tor}`);
    $('proxy').html(`Are you using a Proxy: ${proxy}`);
    $('anonymous').html(`Are you Anonymous: ${anonymous}`);
    $('known_attacker').html(`Are you a Known attacker: ${known_attacker}`);
    $('known_abuser').html(`Are you a Known abuser: ${known_abuser}`);
    $('threat').html(`Are you a Threat: ${threat}`);
    $('bogon').html(`Are you using a Bogon IP: ${bogon}`);

});