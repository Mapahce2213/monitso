'use strict';



let checki = 0;
let uncheki = 0;
function update() {

fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UUZXul1qzf7cvy3r2NgAeiCA&key=AIzaSyD65PmQbUqBqIVwmLwvj4vONVyw3LOIu9M`)
.then(videoa => videoa.json())
    .then(vi1 => {


        let titles = vi1.items[0].snippet.title;
        let newid = vi1.items[0].snippet.resourceId.videoId;
        let getesa = document.getElementById("nom");
        let linki = `https://youtu.be/${newid}?si=6M8bpF0ztWUpcR8h`;

        getesa.href = linki;
        getesa.textContent = titles;

        let titles2 = vi1.items[1].snippet.title;
        let newid2 = vi1.items[1].snippet.resourceId.videoId;
        let getesa2 = document.getElementById("nom2");

        let linki2 = `https://youtu.be/${newid2}?si=6M8bpF0ztWUpcR8h`;

        getesa2.href = linki2;
        getesa2.textContent = titles2;

        let titles3 = vi1.items[2].snippet.title;
        let newid3 = vi1.items[2].snippet.resourceId.videoId;
        let getesa3 = document.getElementById("nom3");
        
        let linki3 = `https://youtu.be/${newid3}?si=6M8bpF0ztWUpcR8h`;

        getesa3.href = linki3;
        getesa3.textContent = titles3;

        let titlesSP = "ВЫЖИВАНИЕ НА Mineplanet || СТРОЮ ДОМ И ВСТУПИЛ В КЛАН! || ВСЯ ПРАВДА О СЕРВЕРЕ😞";
        let getesaSP = document.getElementById("nomSP");
        
        let linkiSP = `https://youtu.be/KGokaw5UAlo?si=nXJL-Vt0mg_KmcRT`;

        getesaSP.href = linkiSP;
        getesaSP.textContent = titlesSP;

        let titlesH = "RESTAURANT TYCOON ROBLOX ||1 HOUR OF ROBLOX || MEJORO RESTAURANTE";
        let getesaH = document.getElementById("nomRU");
        
        let linkiH = `https://youtu.be/ZZ7zJ02pGYM?si=dO3u6RxmFj8Pb4zF`;

        getesaH.href = linkiH;
        getesaH.textContent = titlesH;

        fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${newid}&key=AIzaSyD65PmQbUqBqIVwmLwvj4vONVyw3LOIu9M`)
.then(comment => comment.json())
    .then(v1 => { // comment of one video


        let coco0 = document.getElementById("comment1");
        let sa0 = document.createElement('div');
        sa0.id = "b02";
        sa0.className = "inv";

        let butta = document.createElement('button');
        butta.id = "check1";
        butta.className = "whi";
        butta.textContent = "check"

        let oasa0 = document.createElement('h2');
        oasa0.id = "video1";
if(!document.getElementById("b02")) {

        coco0.append(sa0);

        sa0.append(butta);

        sa0.append(oasa0);

        uncheki = uncheki + 1;
}

        butta.onclick = function() {
if (butta.id === "check1" ) {
            butta.classList.remove('whi');
            butta.classList.add("check");
            butta.textContent = "checked";
            butta.id = "false1";

            function a1 () {
                checki = checki + 1;
            if(uncheki > 0) {
                uncheki = uncheki - 1;
            }
        } setTimeout(a1, 1000);

    } else {
            butta.classList.remove('check');
            butta.classList.add("whi");
            butta.textContent = "check";
            butta.id = "check1";

            function a2 () {
            uncheki = uncheki + 1;
            if(checki > 0) {
                checki = checki - 1;
            }
        } setTimeout(a2, 1000);
        }
    }


        let info = `COMMENT:<br>
         <span class="cs"> ${v1.items[0].snippet.topLevelComment.snippet.textDisplay}</span><br>
         AUTOR: ${v1.items[0].snippet.topLevelComment.snippet.authorDisplayName}`;
        oasa0.innerHTML = info;
        sa0.classList.add('block');
        sa0.classList.remove('inv');
// comments if


        if(v1.items.length > 1) {

            let sa1 = document.createElement('div');
            sa1.id = "b03";
            sa1.className = "inv";

            let butta2 = document.createElement('button');
            butta2.id = "check1";
            butta2.className = "whi";
            butta2.textContent = "check"

            let oasa5 = document.createElement('h2');
            oasa5.id = "video12";

            if(!document.getElementById("b03")) {

            coco0.append(sa1);

            sa1.append(butta2);

            sa1.append(oasa5);

            uncheki = uncheki + 1;
            }

            butta2.onclick = function() {
            if (butta2.id === "check1" ) {
                butta2.classList.remove('whi');
                butta2.classList.add("check");
                butta2.textContent = "checked";
                butta2.id = "false1";

                function b1 () {
                checki = checki + 1;
                if(uncheki > 0) {
                    uncheki = uncheki - 1;
                }
            } setTimeout(b1, 1000);
    
        } else {
                butta2.classList.remove('check');
                butta2.classList.add("whi");
                butta2.textContent = "check";
                butta2.id = "check1";
                function b2 () {
                    uncheki = uncheki + 1;
                if(checki > 0) {
                    checki = checki - 1;
                }
            } setTimeout(b2, 1000);
            }
        }




            let info21 = `COMMENT:<br>
         <span class="cs"> ${v1.items[1].snippet.topLevelComment.snippet.textDisplay}</span><br>
         AUTOR: ${v1.items[1].snippet.topLevelComment.snippet.authorDisplayName}`;

         oasa5.innerHTML = info21;

            sa1.classList.add('block');
            sa1.classList.remove('inv');
        }

        if(v1.items.length > 2) {

            let sa13 = document.createElement('div');
            sa13.id = "b04";
            sa13.className = "inv";

            let butta3 = document.createElement('button');
            butta3.id = "check1";
            butta3.className = "whi";
            butta3.textContent = "check"

            let oasa53 = document.createElement('h2');
            oasa53.id = "video13";

            if(!document.getElementById("b04")) {
    
            coco0.append(sa13);

            sa13.append(butta3);

            sa13.append(oasa53);

            uncheki = uncheki + 1;
            }

            butta3.onclick = function() {
            if (butta3.id === "check1" ) {
                butta3.classList.remove('whi');
                butta3.classList.add("check");
                butta3.textContent = "checked";
                butta3.id = "false1";

                function c1 () {
                checki = checki + 1;
                if(uncheki > 0) {
                    uncheki = uncheki - 1;
                }
            } setTimeout(c1, 1000);
    
        } else {
                butta3.classList.remove('check');
                butta3.classList.add("whi");
                butta3.textContent = "check";
                butta3.id = "check1";

                function c2 () {
                uncheki = uncheki + 1;
                if(checki > 0) {
                    checki = checki - 1;
                }
            } setTimeout(c2, 1000);
            }
        }


            let info3b = `COMMENT:<br>
         <span class="cs"> ${v1.items[2].snippet.topLevelComment.snippet.textDisplay}</span><br>
         AUTOR: ${v1.items[2].snippet.topLevelComment.snippet.authorDisplayName}`;


         oasa53.innerHTML = info3b;

sa13.classList.add('block');
sa13.classList.remove('inv');
        }
        if(v1.items.length > 3) {
        
            let sa13s = document.createElement('div');
            sa13s.id = "b05";
            sa13s.className = "inv";

            let butta4 = document.createElement('button');
            butta4.id = "check1";
            butta4.className = "whi";
            butta4.textContent = "check"

            let getu3s = document.getElementById("b05");
            let oasa53s = document.createElement('h2');
            oasa53s.id = "video14";

            if(!document.getElementById("b05")) {

            coco0.append(sa13s);

            sa13s.append(butta4);

            getu3s.append(oasa53s);

            uncheki = uncheki + 1;
            }

            butta4.onclick = function() {
            if (butta4.id === "check1" ) {
                butta4.classList.remove('whi');
                butta4.classList.add("check");
                butta4.textContent = "checked";
                butta4.id = "false1";

                function d1 () {
                checki = checki + 1;
                if(uncheki > 0) {
                    uncheki = uncheki - 1;
                }
            } setTimeout(d1, 1000);
    
        } else {
                butta4.classList.remove('check');
                butta4.classList.add("whi");
                butta4.textContent = "check";
                butta4.id = "check1";

                function d2 () {
                uncheki = uncheki + 1;
                if(checki > 0) {
                    checki = checki - 1;
                }
            } setTimeout(d2, 1000);
            }
        }


            let info24 = `COMMENT:<br>
         <span class="cs"> ${v1.items[3].snippet.topLevelComment.snippet.textDisplay}</span><br>
         AUTOR: ${v1.items[3].snippet.topLevelComment.snippet.authorDisplayName}`;
         let geter4 = document.getElementById("video14");

geter4.innerHTML = info24;

let elment2if = document.getElementById("b05");
elment2if.classList.add('block');
elment2if.classList.remove('inv');
        }

// if end




    })

    fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${newid2}&key=AIzaSyD65PmQbUqBqIVwmLwvj4vONVyw3LOIu9M`)
.then(comment2 => comment2.json())
    .then(v2 => { // comment of second video



        let cocor = document.getElementById("comment2");
        let sar = document.createElement('div');
        sar.id = "b06";
        sar.className = "inv";

        let buttaSON = document.createElement('button');
        buttaSON.id = "check1";
        buttaSON.className = "whi";
        buttaSON.textContent = "check"

        let oasar = document.createElement('h2');
        oasar.id = "video2";
        if(!document.getElementById("b06")) {

        cocor.append(sar);

        sar.append(buttaSON);

        sar.append(oasar);

        uncheki = uncheki + 1;

        }

        buttaSON.onclick = function() {


        if (buttaSON.id === "check1" ) {
            buttaSON.classList.remove('whi');
            buttaSON.classList.add("check");
            buttaSON.textContent = "checked";
            buttaSON.id = "false1";

function e1 () {
            checki = checki + 1;

            if(uncheki > 0) {
                uncheki = uncheki - 1;
            }
        }
        setTimeout(e1, 1000);



    } else {
            buttaSON.classList.remove('check');
            buttaSON.classList.add("whi");
            buttaSON.textContent = "check";
            buttaSON.id = "check1";

            function e2 () {
            uncheki = uncheki + 1;

            if(checki > 0) {
                checki = checki - 1;
            }
        }
            setTimeout(e2, 1000);

        }
    }

        let info2 = `COMMENT:<br>
         <span class="cs"> ${v2.items[0].snippet.topLevelComment.snippet.textDisplay}</span><br>
         AUTOR: ${v2.items[0].snippet.topLevelComment.snippet.authorDisplayName}`;
        oasar.innerHTML = info2;

        sar.classList.add('block');
        sar.classList.remove('inv');

// comments if

        if(v2.items.length > 1) {

            let sa13ar = document.createElement('div');
            sa13ar.id = "b07";
            sa13ar.className = "inv";


            let buttaSON1 = document.createElement('button');
            buttaSON1.id = "check1";
            buttaSON1.className = "whi";
            buttaSON1.textContent = "check"

            let oasa53sr = document.createElement('h2');
            oasa53sr.id = "video12b";

            if(!document.getElementById("b07")) {
    
            cocor.append(sa13ar);

            sa13ar.append(buttaSON1);
    
            sa13ar.append(oasa53sr);

            uncheki = uncheki + 1;
            }

            buttaSON1.onclick = function() {
            if (buttaSON1.id === "check1" ) {
                buttaSON1.classList.remove('whi');
                buttaSON1.classList.add("check");
                buttaSON1.textContent = "checked";
                buttaSON1.id = "false1";

                function f1 () {
                if(uncheki > 0) {
                    uncheki = uncheki - 1;
                }
            }   setTimeout(f1, 1000);
    
        } else {
                buttaSON1.classList.remove('check');
                buttaSON1.classList.add("whi");
                buttaSON1.textContent = "check";
                buttaSON1.id = "check1";

                function f2 () {
                uncheki = uncheki + 1;
                if(checki > 0) {
                    checki = checki - 1;
                }
            }   setTimeout(f2, 1000);
            }
        }

            let info221 = `COMMENT:<br>
         <span class="cs"> ${v2.items[1].snippet.topLevelComment.snippet.textDisplay}</span><br>
         AUTOR: ${v2.items[1].snippet.topLevelComment.snippet.authorDisplayName}`;


oasa53sr.innerHTML = info221;


sa13ar.classList.add('block');
sa13ar.classList.remove('inv');
        }

        if(v2.items.length > 2) {

            let sa14ar = document.createElement('div');
            sa14ar.id = "b";
            sa14ar.className = "inv";

            let buttaSON2 = document.createElement('button');
            buttaSON2.id = "check1";
            buttaSON2.className = "whi";
            buttaSON2.textContent = "check"

            let oasa53sr = document.createElement('h2');
            oasa53sr.id = "video13b";

            if(!document.getElementById("b")) {

            cocor.append(sa14ar);

            sa14ar.append(buttaSON2);
    
            sa14ar.append(oasa53sr);

            uncheki = uncheki + 1;
            }

            buttaSON2.onclick = function() {
            if (buttaSON2.id === "check1" ) {
                buttaSON2.classList.remove('whi');
                buttaSON2.classList.add("check");
                buttaSON2.textContent = "checked";
                buttaSON2.id = "false1";

                function g1 () {
                if(uncheki > 0) {
                    uncheki = uncheki - 1;
                }
            }   setTimeout(g1, 1000);
    
        } else {
                buttaSON2.classList.remove('check');
                buttaSON2.classList.add("whi");
                buttaSON2.textContent = "check";
                buttaSON2.id = "check1";

                function g2 () {
                uncheki = uncheki + 1;
                if(checki > 0) {
                    checki = checki - 1;
                }
            }   setTimeout(g2, 1000);
            }
        }


            let info222 = `COMMENT:<br>
         <span class="cs"> ${v2.items[2].snippet.topLevelComment.snippet.textDisplay}</span><br>
         AUTOR: ${v2.items[2].snippet.topLevelComment.snippet.authorDisplayName}`;

         oasa53sr.innerHTML = info222;


sa14ar.classList.add('block');
sa14ar.classList.remove('inv');
        }
        if(v2.items.length > 3) {

            let info223 = `COMMENT:<br>
         <span class="cs"> ${v2.items[3].snippet.topLevelComment.snippet.textDisplay}</span><br>
         AUTOR: ${v2.items[3].snippet.topLevelComment.snippet.authorDisplayName}`;
         let geter223 = document.getElementById("video14b");

geter223.innerHTML = info223;

let elment4if1 = document.getElementById("b");
elment4if1.classList.add('block');
elment4if1.classList.remove('inv');
        }

// if end

    })


    fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${newid3}&key=AIzaSyD65PmQbUqBqIVwmLwvj4vONVyw3LOIu9M`)
.then(comment3 => comment3.json())
    .then(v3 => { // comment of third video

        let comm3 = document.getElementById("comment3");

        let sar3 = document.createElement('div');
        sar3.id = "ba1";
        sar3.className = "inv";

        let buttaSONA = document.createElement('button');
        buttaSONA.id = "check1";
        buttaSONA.className = "whi";
        buttaSONA.textContent = "check"

        let oasar3 = document.createElement('h2');
        oasar3.id = "video3";

        if(!document.getElementById("ba1")) {

        comm3.append(sar3);

        sar3.append(buttaSONA);

        sar3.append(oasar3);

        uncheki = uncheki + 1;
        }

        buttaSONA.onclick = function() {
        if (buttaSONA.id === "check1" ) {
            buttaSONA.classList.remove('whi');
            buttaSONA.classList.add("check");
            buttaSONA.textContent = "checked";
            buttaSONA.id = "false1";

            function h1 () {
            checki = checki + 1;
            if(uncheki > 0) {
                uncheki = uncheki - 1;
            }
        }   setTimeout(h1, 1000);

    } else {
            buttaSONA.classList.remove('check');
            buttaSONA.classList.add("whi");
            buttaSONA.textContent = "check";
            buttaSONA.id = "check1";

            function h2 () {
                uncheki = uncheki + 1;
            if(checki > 0) {
                checki = checki - 1;
            }
        }   setTimeout(h2, 1000);
        }
    }

        let info3 = `COMMENT:<br>
         <span class="cs"> ${v3.items[0].snippet.topLevelComment.snippet.textDisplay}</span><br>
         AUTOR: ${v3.items[0].snippet.topLevelComment.snippet.authorDisplayName}`;
         oasar3.innerHTML = info3;

        sar3.classList.add('block');
        sar3.classList.remove('inv');

// comments if

        if(v3.items.length > 1) {

            let sus = document.createElement('div');
            sus.id = "b1";
            sus.className = "inv";

            let buttaSONA1 = document.createElement('button');
            buttaSONA1.id = "check1";
            buttaSONA1.className = "whi";
            buttaSONA1.textContent = "check"

            let ora = document.createElement('h2');
            ora.id = "video2";
            if(!document.getElementById("b1")) {
    
            comm3.append(sus);

            sus.append(buttaSONA1);
    
            sus.append(ora);

            uncheki = uncheki + 1;
            }

            buttaSONA1.onclick = function() {
            if (buttaSONA1.id === "check1" ) {
                buttaSONA1.classList.remove('whi');
                buttaSONA1.classList.add("check");
                buttaSONA1.textContent = "checked";
                buttaSONA1.id = "false1";

                function i1 () {
                checki = checki + 1;
                if(uncheki > 0) {
                    uncheki = uncheki - 1;
                }
            }   setTimeout(i1, 1000);
    
        } else {
                buttaSONA1.classList.remove('check');
                buttaSONA1.classList.add("whi");
                buttaSONA1.textContent = "check";
                buttaSONA1.id = "check1";

                function i2 () {
                uncheki = uncheki + 1;
                if(checki > 0) {
                    checki = checki - 1;
                }
            }   setTimeout(i2, 1000);
            }
        }

            let info3310 = `COMMENT:<br>
         <span class="cs"> ${v3.items[1].snippet.topLevelComment.snippet.textDisplay}</span><br>
         AUTOR: ${v3.items[1].snippet.topLevelComment.snippet.authorDisplayName}`;

ora.innerHTML = info3310;



sus.classList.add('block');
sus.classList.remove('inv');

        }

        if(v3.items.length > 2) {

            let sus1 = document.createElement('div');
            sus1.id = "b2";
            sus1.className = "inv";

            let buttaSONA2 = document.createElement('button');
            buttaSONA2.id = "check1";
            buttaSONA2.className = "whi";
            buttaSONA2.textContent = "check"

    
            let ora1 = document.createElement('h2');
            ora1.id = "video12c";

            if(!document.getElementById("b2")) {
    
            comm3.append(sus1);

            sus1.append(buttaSONA2);

            sus1.append(ora1);

            uncheki = uncheki + 1;
            }

            buttaSONA2.onclick = function() {
            if (buttaSONA2.id === "check1" ) {
                buttaSONA2.classList.remove('whi');
                buttaSONA2.classList.add("check");
                buttaSONA2.textContent = "checked";
                buttaSONA2.id = "false1";

                function p1 () {
                checki = checki + 1;
                if(uncheki > 0) {
                    uncheki = uncheki - 1;
                }
            }   setTimeout(p1, 1000);
    
        } else {
                buttaSONA2.classList.remove('check');
                buttaSONA2.classList.add("whi");
                buttaSONA2.textContent = "check";
                buttaSONA2.id = "check1";

                function p2 () {
                uncheki = uncheki + 1;
                if(checki > 0) {
                    checki = checki - 1;
                }
            }   setTimeout(p2, 1000);
            }
        }


            let info332 = `COMMENT:<br>
         <span class="cs"> ${v3.items[2].snippet.topLevelComment.snippet.textDisplay}</span><br>
         AUTOR: ${v3.items[2].snippet.topLevelComment.snippet.authorDisplayName}`;


ora1.innerHTML = info332;

sus1.classList.add('block');
sus1.classList.remove('inv');

        }
        if(v3.items.length > 3) {

            let sus2 = document.createElement('div');
            sus2.id = "b3";
            sus2.className = "inv";

            let buttaSONA3 = document.createElement('button');
            buttaSONA3.id = "check1";
            buttaSONA3.className = "whi";
            buttaSONA3.textContent = "check"

            let ora2 = document.createElement('h2');
            ora2.id = "video13c";
            if(!document.getElementById("b3")) {
    
            comm3.append(sus2);

            sus2.append(buttaSONA3);
    
            sus2.append(ora2);

            uncheki = uncheki + 1;
            }

            buttaSONA3.onclick = function() {
            if (buttaSONA3.id === "check1" ) {
                buttaSONA3.classList.remove('whi');
                buttaSONA3.classList.add("check");
                buttaSONA3.textContent = "checked";
                buttaSONA3.id = "false1";

                function t1() {
                checki = checki + 1;
                if(uncheki > 0) {
                    uncheki = uncheki - 1;
                }
            }   setTimeout(t1, 1000);
    
        } else {
                buttaSONA3.classList.remove('check');
                buttaSONA3.classList.add("whi");
                buttaSONA3.textContent = "check";
                buttaSONA3.id = "check1";

                function t2() {
                    uncheki = uncheki + 1;
                if(checki > 0) {
                    checki = checki - 1;
                }
            }   setTimeout(t2, 1000);
            }
        }

            let info333 = `COMMENT:<br>
         <span class="cs"> ${v2.items[3].snippet.topLevelComment.snippet.textDisplay}</span><br>
         AUTOR: ${v2.items[3].snippet.topLevelComment.snippet.authorDisplayName}`;


ora2.innerHTML = info333;

sus2.classList.add('block');
sus2.classList.remove('inv');
        }

// if end

    })



    fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=KGokaw5UAlo&key=AIzaSyD65PmQbUqBqIVwmLwvj4vONVyw3LOIu9M`)
.then(commentRU => commentRU.json())
    .then(vRU => { // comment of Russian video


        let comm4 = document.getElementById("comment4");
        let sar4 = document.createElement('div');
        sar4.id = "ba2";
        sar4.className = "inv";

        let buttaSOSA = document.createElement('button');
        buttaSOSA.id = "check1";
        buttaSOSA.className = "whi";
        buttaSOSA.textContent = "check"

        let oasar4 = document.createElement('h2');
        oasar4.id = "videoSP2";
        
        if(!document.getElementById("ba2")) {

        comm4.append(sar4);

        sar4.append(buttaSOSA);

        sar4.append(oasar4);

        uncheki = uncheki + 1;
        }

        buttaSOSA.onclick = function() {
        if (buttaSOSA.id === "check1" ) {
            buttaSOSA.classList.remove('whi');
            buttaSOSA.classList.add("check");
            buttaSOSA.textContent = "checked";
            buttaSOSA.id = "false1";

            function u() {
                checki = checki + 1;
            if(uncheki > 0) {
                uncheki = uncheki - 1;
            }
        } setTimeout(u, 1000)

    } else {
            buttaSOSA.classList.remove('check');
            buttaSOSA.classList.add("whi");
            buttaSOSA.textContent = "check";
            buttaSOSA.id = "check1";

            function u2() {
                uncheki = uncheki + 1;
            if(checki > 0) {
                checki = checki - 1;
            }
        } setTimeout(u2, 1000)
        }
    }


        let infoRU = `COMMENT:<br>
         <span class="cs"> ${vRU.items[0].snippet.topLevelComment.snippet.textDisplay}</span><br>
         AUTOR: ${vRU.items[0].snippet.topLevelComment.snippet.authorDisplayName}`;
        oasar4.innerHTML = infoRU;

        sar4.classList.add('block');
        sar4.classList.remove('inv');

// comments if

        if(vRU.items.length > 1) {
            let rp = document.createElement('div');
            rp.id = "b5";
            rp.className = "inv";

            let buttaSOSA1 = document.createElement('button');
            buttaSOSA1.id = "check1";
            buttaSOSA1.className = "whi";
            buttaSOSA1.textContent = "check"

            let ru = document.createElement('h2');
            ru.id = "videoSP2";
            if(!document.getElementById("b5")) {
    
            comm4.append(rp);

            rp.append(buttaSOSA1);

            rp.append(ru);

            uncheki = uncheki + 1;
            }

            buttaSOSA1.onclick = function() {
            if (buttaSOSA1.id === "check1" ) {
                buttaSOSA1.classList.remove('whi');
                buttaSOSA1.classList.add("check");
                buttaSOSA1.textContent = "checked";
                buttaSOSA1.id = "false1";

                function w1() {
                checki = checki + 1;
                if(uncheki > 0) {
                    uncheki = uncheki - 1;
                }
            } setTimeout(w1, 1000)
    
        } else {
                buttaSOSA1.classList.remove('check');
                buttaSOSA1.classList.add("whi");
                buttaSOSA1.textContent = "check";
                buttaSOSA1.id = "check1";

                function w2() {
                    uncheki = uncheki + 1;
                if(checki > 0) {
                    checki = checki - 1;
                }
            } setTimeout(w2, 1000)
            }
        }




            let infoRU1 = `COMMENT:<br>
         <span class="cs"> ${vRU.items[1].snippet.topLevelComment.snippet.textDisplay}</span><br>
         AUTOR: ${vRU.items[1].snippet.topLevelComment.snippet.authorDisplayName}`;


ru.innerHTML = infoRU1;


rp.classList.add('block');
rp.classList.remove('inv');

        }

        if(vRU.items.length > 2) {

            let rp2 = document.createElement('div');
            rp2.id = "b6";
            rp2.className = "inv";

            let buttaSOSA2 = document.createElement('button');
            buttaSOSA2.id = "check1";
            buttaSOSA2.className = "whi";
            buttaSOSA2.textContent = "check"

            let ru2 = document.createElement('h2');
            ru2.id = "video12d";

            if(!document.getElementById("b6")) {
    
            comm4.append(rp2);

            rp2.append(buttaSOSA2);
    
            rp2.append(ru2);

            uncheki = uncheki + 1;
            }

            buttaSOSA2.onclick = function() {
            if (buttaSOSA2.id === "check1" ) {
                buttaSOSA2.classList.remove('whi');
                buttaSOSA2.classList.add("check");
                buttaSOSA2.textContent = "checked";
                buttaSOSA2.id = "false1";

                function x() {
                    checki = checki + 1;
                if(uncheki > 0) {
                    uncheki = uncheki - 1;
                }
            } setTimeout(x, 1000)
    
        } else {
                buttaSOSA2.classList.remove('check');
                buttaSOSA2.classList.add("whi");
                buttaSOSA2.textContent = "check";
                buttaSOSA2.id = "check1";

                function x2() {
                    uncheki = uncheki + 1;
                if(checki > 0) {
                    checki = checki - 1;
                }
            } setTimeout(x2, 1000)
            }
        }

            let infoRU32 = `COMMENT:<br>
         <span class="cs"> ${vRU.items[2].snippet.topLevelComment.snippet.textDisplay}</span><br>
         AUTOR: ${vRU.items[2].snippet.topLevelComment.snippet.authorDisplayName}`;

ru2.innerHTML = infoRU32;

rp2.classList.add('block');
rp2.classList.remove('inv');


        }
        if(vRU.items.length > 3) {

            let rp3 = document.createElement('div');
            rp3.id = "b7";
            rp3.className = "inv";

            let buttaSOSA3 = document.createElement('button');
            buttaSOSA3.id = "check1";
            buttaSOSA3.className = "whi";
            buttaSOSA3.textContent = "check"

            let ru3 = document.createElement('h2');
            ru3.id = "video13d";

            if(!document.getElementById("b7")) {
    
            comm4.append(rp3);

            rp3.append(buttaSOSA3);
    
            rp3.append(ru3);

            uncheki = uncheki + 1;
            }

            buttaSOSA3.onclick = function() {
            if (buttaSOSA3.id === "check1" ) {
                buttaSOSA3.classList.remove('whi');
                buttaSOSA3.classList.add("check");
                buttaSOSA3.textContent = "checked";
                buttaSOSA3.id = "false1";

                function y() {
                checki = checki + 1;
                if(uncheki > 0) {
                    uncheki = uncheki - 1;
                }
            } setTimeout(y, 1000)
    
        } else {
                buttaSOSA3.classList.remove('check');
                buttaSOSA3.classList.add("whi");
                buttaSOSA3.textContent = "check";
                buttaSOSA3.id = "check1";

                function y2() {
                    uncheki = uncheki + 1;
                if(checki > 0) {
                    checki = checki - 1;
                }
            } setTimeout(y2, 1000)
            }
        }

        let infoRU33 = `COMMENT:<br>
        <span class="cs"> ${vRU.items[3].snippet.topLevelComment.snippet.textDisplay}</span><br>
        AUTOR: ${vRU.items[3].snippet.topLevelComment.snippet.authorDisplayName}`;

ru3.innerHTML = infoRU33;

        rp3.classList.add('block');
rp3.classList.remove('inv');


    }

// if end

    })
    





    fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=ZZ7zJ02pGYM&key=AIzaSyD65PmQbUqBqIVwmLwvj4vONVyw3LOIu9M`)
    .then(comment9 => comment9.json())
        .then(hour => { // comment of hour video


            let comm5 = document.getElementById("comment5");

            let ult = document.createElement('div');
            ult.id = "ba3";
            ult.className = "inv";

            let buttaFIN = document.createElement('button');
            buttaFIN.id = "check1";
            buttaFIN.className = "whi";
            buttaFIN.textContent = "check"

            let sos = document.createElement('h2');
            sos.id = "videoR3";

            if(!document.getElementById("ba3")) {

            comm5.append(ult);
    
            ult.append(buttaFIN);
    
            ult.append(sos);

            uncheki = uncheki + 1;
            }

            buttaFIN.onclick = function() {
            if (buttaFIN.id === "check1" ) {
                buttaFIN.classList.remove('whi');
                buttaFIN.classList.add("check");
                buttaFIN.textContent = "checked";
                buttaFIN.id = "false1";

                function z() {
                checki = checki + 1;
                if(uncheki > 0) {
                    uncheki = uncheki - 1;
                }
            } setTimeout(z, 1000)
    
        } else {
                buttaFIN.classList.remove('check');
                buttaFIN.classList.add("whi");
                buttaFIN.textContent = "check";
                buttaFIN.id = "check1";

                function z2() {
                uncheki = uncheki + 1;
                if(checki > 0) {
                    checki = checki - 1;
                }
            } setTimeout(z2, 1000)
            }
        }

            let infoh = `COMMENT:<br>
             <span class="cs"> ${hour.items[0].snippet.topLevelComment.snippet.textDisplay}</span><br>
             AUTOR: ${hour.items[0].snippet.topLevelComment.snippet.authorDisplayName}`;
            sos.innerHTML = infoh;
    
            ult.classList.add('block');
            ult.classList.remove('inv');
    
    // comments if
    
            if(hour.items.length > 1) {

                let ult1 = document.createElement('div');
                ult1.id = "b9";
                ult1.className = "inv";

                let buttaFIN1 = document.createElement('button');
                buttaFIN1.id = "check1";
                buttaFIN1.className = "whi";
                buttaFIN1.textContent = "check"

        
                let ugu = document.createElement('h2');
                ugu.id = "videoR2";

                if(!document.getElementById("b9")) {
        
                comm5.append(ult1);

                ult1.append(buttaFIN1);

                ult1.append(ugu);

                uncheki = uncheki + 1;
                }

                buttaFIN1.onclick = function() {
                if (buttaFIN1.id === "check1" ) {
                    buttaFIN1.classList.remove('whi');
                    buttaFIN1.classList.add("check");
                    buttaFIN1.textContent = "checked";
                    buttaFIN1.id = "false1";

                    function aa() {
                    checki = checki + 1;
                    if(uncheki > 0) {
                        uncheki = uncheki - 1;
                    }
                } setTimeout(aa, 1000)
        
            } else {
                    buttaFIN1.classList.remove('check');
                    buttaFIN1.classList.add("whi");
                    buttaFIN1.textContent = "check";
                    buttaFIN1.id = "check1";

                    function aa2() {
                    uncheki = uncheki + 1;
                    if(checki > 0) {
                        checki = checki - 1;
                    }
                } setTimeout(aa2, 1000)
                }
            }




                let infoh3310 = `COMMENT:<br>
             <span class="cs"> ${hour.items[1].snippet.topLevelComment.snippet.textDisplay}</span><br>
             AUTOR: ${hour.items[1].snippet.topLevelComment.snippet.authorDisplayName}`;
    
    ugu.innerHTML = infoh3310;
    
    ult1.classList.add('block');
    ult1.classList.remove('inv');
    
            }
    
            if(hour.items.length > 2) {

                let ult2 = document.createElement('div');
                ult2.id = "b10";
                ult2.className = "inv";

                let buttaFIN2 = document.createElement('button');
                buttaFIN2.id = "check1";
                buttaFIN2.className = "whi";
                buttaFIN2.textContent = "check"

                let ugu2 = document.createElement('h2');
                ugu2.id = "videoR12";

                if(!document.getElementById("b10")) {
        
                comm5.append(ult2);
    
                ult2.append(buttaFIN2);
        
                ult2.append(ugu2);

                uncheki = uncheki + 1;

                }

                buttaFIN2.onclick = function() {
                if (buttaFIN2.id === "check1" ) {
                    buttaFIN2.classList.remove('whi');
                    buttaFIN2.classList.add("check");
                    buttaFIN2.textContent = "checked";
                    buttaFIN2.id = "false1";

                    function ab() {
                    checki = checki + 1;
                    if(uncheki > 0) {
                        uncheki = uncheki - 1;
                    }
                } setTimeout(ab, 1000)
        
            } else {
                    buttaFIN2.classList.remove('check');
                    buttaFIN2.classList.add("whi");
                    buttaFIN2.textContent = "check";
                    buttaFIN2.id = "check1";

                    function ab2() {
                    uncheki = uncheki + 1;
                    if(checki > 0) {
                        checki = checki - 1;
                    }
                } setTimeout(ab2, 1000)
                }
            }



                let infoh332 = `COMMENT:<br>
             <span class="cs"> ${hour.items[2].snippet.topLevelComment.snippet.textDisplay}</span><br>
             AUTOR: ${hour.items[2].snippet.topLevelComment.snippet.authorDisplayName}`;
    
    ugu2.innerHTML = infoh332;
    
    ult2.classList.add('block');
    ult2.classList.remove('inv');
            }
            if(hour.items.length > 3) {

                let ult3 = document.createElement('div');
                ult3.id = "b11";
                ult3.className = "inv";

                let buttaFIN3 = document.createElement('button');
                buttaFIN3.id = "check1";
                buttaFIN3.className = "whi";
                buttaFIN3.textContent = "check"

                let ugu3 = document.createElement('h2');
                ugu3.id = "videoR13";


                if(!document.getElementById("b11")) {
        
                comm5.append(ult3);
    
                ult3.append(buttaFIN3);
        
                ult3.append(ugu3);

                uncheki = uncheki + 1;
                }
                buttaFIN3.onclick = function() {
                if (buttaFIN3.id === "check1" ) {
                    buttaFIN3.classList.remove('whi');
                    buttaFIN3.classList.add("check");
                    buttaFIN3.textContent = "checked";
                    buttaFIN3.id = "false1";

                    function ac() {
                    checki = checki + 1;
                    if(uncheki > 0) {
                        uncheki = uncheki - 1;
                    }
                } setTimeout(ac, 1000)
        
            } else {
                    buttaFIN3.classList.remove('check');
                    buttaFIN3.classList.add("whi");
                    buttaFIN3.textContent = "check";
                    buttaFIN3.id = "check1";

                    function ac2() {
                    uncheki = uncheki + 1;
                    if(checki > 0) {
                        checki = checki - 1;
                    }
                } setTimeout(ac2, 1000)
                }
            }



                let infoh333 = `COMMENT:<br>
             <span class="cs"> ${hour.items[3].snippet.topLevelComment.snippet.textDisplay}</span><br>
             AUTOR: ${hour.items[3].snippet.topLevelComment.snippet.authorDisplayName}`;

    
    ugu3.innerHTML = infoh333;

    ult3.classList.add('block');
    ult3.classList.remove('inv');
            }
    
    // if end
    
        })
    });


};
update();
let geti = document.getElementById("titles");

let getf = document.getElementById("fi1");
let getf2 = document.getElementById("fi2");
let getf3 = document.getElementById("fi3");
let getf4 = document.getElementById("fi4");
let getf5 = document.getElementById("fi5");
function checkComm() {
function audios(){
    let notif = new Audio;
    notif.src = "monitor-notf.mp3";
    notif.play();
    console.log("ne");
  };
  function cambia() {
    getf.href = "icons2/apple-touch-icon.png";
    getf2.href = "icons2/favicon-32x32.png";
    getf3.href = "icons2/favicon-16x16.png";
    getf4.href = "icons2/site.webmanifest";
    getf5.href = "icons2/safari-pinned-tab.svg"
  };
  function cambia2() {
    getf.href = "icons/apple-touch-icon.png";
    getf2.href = "icons/favicon-32x32.png";
    getf3.href = "icons/favicon-16x16.png";
    getf4.href = "icons/site.webmanifest";
    getf5.href = "icons/safari-pinned-tab.svg"
  };
if(uncheki > 0) {
    audios();
    cambia();

let sod = uncheki + " " + "unchecked"
geti.textContent = sod;
} else {
    geti.textContent = "Comment monitoring";
    cambia2();
}


}; 

function checkComm2() {
    function cambia5() {
        getf.href = "icons2/apple-touch-icon.png";
        getf2.href = "icons2/favicon-32x32.png";
        getf3.href = "icons2/favicon-16x16.png";
        getf4.href = "icons2/site.webmanifest";
        getf5.href = "icons2/safari-pinned-tab.svg"
      };
      function cambia25() {
        getf.href = "icons/apple-touch-icon.png";
        getf2.href = "icons/favicon-32x32.png";
        getf3.href = "icons/favicon-16x16.png";
        getf4.href = "icons/site.webmanifest";
        getf5.href = "icons/safari-pinned-tab.svg"
      };

if(uncheki > 0) {
cambia5();
let sod2 = uncheki + " " + "unchecked"
geti.textContent = sod2;
} else {
    cambia25();
    geti.textContent = "Comment monitoring";
}


}; 


function klik() {
    checkComm();
    document.getElementById("bloch").remove();
    setInterval(checkComm, 10000);

}
function klik2() {
    checkComm2();
    document.getElementById("bloch").remove();
    setInterval(checkComm2, 1000);
}
setInterval(update, 1000);





function pop() {
    let buca = document.getElementById("c1");
let buca2 = document.getElementById("n1");
    let b1 = checki + " checked";
let b2 = uncheki + " unchecked";
buca.textContent = b1;
buca2.textContent = b2;
}
setInterval(pop, 10);
