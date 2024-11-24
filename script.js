const videoURLs = [
    // Staffel 3
    { name: "S03E01 - Wait for It", url: "https://a-delivery18.mxcontent.net/v2/85tnot6g2.mp4?s=-q2DVdqcxlHRzGE23Kr93w&e=1732473316&_t=1732452826" },
    { name: "S03E02 - We're Not from Here", url: "https://a-delivery46.mxcontent.net/v2/c45uxeel5ch.mp4?s=7z23e578Juz6nK2Sj8tTsQ&e=1732475089&_t=1732458208" },
    { name: "S03E03 - Third Wheel", url: "https://a-delivery22.mxcontent.net/v2/ly4hcsf7i.mp4?s=yLaxhLjkCKZnkZomNn6N_w&e=1732476266&_t=1732459712" },
    { name: "S03E04 - Little Boys", url: "https://a-delivery19.mxcontent.net/v2/qo8ddf6hm8hpv.mp4?s=y7pjuBDEMb4hzByeqXB6iA&e=1732476303&_t=1732459208" },
    { name: "S03E05 - How I Met Everyone Else", url: "https://a-delivery47.mxcontent.net/v2/zvublnxbbu.mp4?s=QH57G8si5H0p5jHCpmxY_w&e=1732476330&_t=1732460201" },
    { name: "S03E06 - I'm Not That Guy", url: "https://a-delivery31.mxcontent.net/v2/efp0x9zleo.mp4?s=TKiWLyfTdKPD5xKD3fNMDQ&e=1732476389&_t=1732456626" },
    { name: "S03E07 - Dowisetrepla", url: "https://a-delivery48.mxcontent.net/v2/tx93t0739dl.mp4?s=v67lsojjUdhAh_yuFrWUcQ&e=1732476412&_t=1732462347" },
    { name: "S03E08 - Spoiler Alert", url: "https://a-delivery18.mxcontent.net/v2/i08bv45qc17.mp4?s=xYZiaamz17Sg0D4j94BicQ&e=1732476454&_t=1732464711" },
    { name: "S03E09 - Slapsgiving", url: "https://a-delivery46.mxcontent.net/v2/4hn8riacvxd.mp4?s=sMmso3AYcjMd5Us4YavePQ&e=1732476490&_t=1732459272" },
    { name: "S03E10 - The Yips", url: "https://a-delivery18.mxcontent.net/v2/4b6s4nu5sg.mp4?s=SkTmfTgN50y-NgsEaJTImA&e=1732476520&_t=1732458591" },
    { name: "S03E11 - The Platinum Rule", url: "https://a-delivery35.mxcontent.net/v2/9b9b9ysif8h.mp4?s=HtnBpVgob_7MDUdz0r_jIw&e=1732476538&_t=1732463092" },
    { name: "S03E12 - No Tomorrow", url: "https://a-delivery31.mxcontent.net/v2/32bdr2lxvegjf.mp4?s=KO8NQfhvYD3Rv20FfiM2UA&e=1732476561&_t=1732463354" },
    { name: "S03E13 - Ten Sessions", url: "https://a-delivery27.mxcontent.net/v2/bpo68pnip3e1.mp4?s=fUZwJEUCJpPlVnwfVDTwHQ&e=1732476576&_t=1732458818" },
    { name: "S03E14 - The Bracket", url: "https://a-delivery50.mxcontent.net/v2/3lahpch7b9d03.mp4?s=6QsVl3Ke62nf9R8j0Me9wQ&e=1732476590&_t=1732457573" },
    { name: "S03E15 - The Chain of Screaming", url: "https://a-delivery29.mxcontent.net/v2/g1te0xokd96.mp4?s=vj-j5nx25PHtVx9lpcCwEA&e=1732476609&_t=1732462672" },
    { name: "S03E16 - Sandcastles in the Sand", url: "https://a-delivery31.mxcontent.net/v2/rt0gwn4ojwxld.mp4?s=OjNAm74RI8fN_f3t75Uu0g&e=1732476625&_t=1732461955" },
    { name: "S03E17 - The Goat", url: "https://a-delivery22.mxcontent.net/v2/u7hiuai3br1r9.mp4?s=W7tmvPMj_qEdCTc6Ynw0Ew&e=1732476659&_t=1732455216" },
    { name: "S03E18 - Rebound Bro", url: "https://a-delivery31.mxcontent.net/v2/gnpm9phl2qzmr.mp4?s=08pIdg2oFqPh1ruOxB4F7A&e=1732476718&_t=1732459574" },
    { name: "S03E19 - Everything Must Go", url: "https://a-delivery42.mxcontent.net/v2/3pkhuthqz6i08.mp4?s=4cfKOmcedrfnNwX4U3Ic4Q&e=1732476734&_t=1732462934" },
    { name: "S03E20 - Miracles", url: "https://a-delivery50.mxcontent.net/v2/37qwqyttmts2a.mp4?s=miX-wp5dbIHdEue1iOfyjw&e=1732476751&_t=1732462029" },

    // Staffel 4
    { name: "S04E01 - Do I Know You?", url: "https://a-delivery35.mxcontent.net/v2/vser2th8viy.mp4?s=-R4NtgK5RulZYepkVAPhig&e=1732476793&_t=1732461431" },
    { name: "S04E02 - The Best Man", url: "https://a-delivery46.mxcontent.net/v2/qerzorrr9.mp4?s=NhbxfFGpTTa2YxC8w2Lu8w&e=1732476808&_t=1732457112" },
    { name: "S04E03 - Not a Father's Day", url: "https://a-delivery18.mxcontent.net/v2/a0t935kvs5f5y.mp4?s=VITIL9NjcqMEQgK6Pvi-6g&e=1732476822&_t=1732463036" },
    { name: "S04E04 - Intervention", url: "https://a-delivery22.mxcontent.net/v2/d9s008m4vgi.mp4?s=BBE8TOLp59gQ-b2Pa_OvQg&e=1732476838&_t=1732456660" },
    { name: "S04E05 - Shelter Island", url: "https://a-delivery31.mxcontent.net/v2/zf8v444dn72.mp4?s=vRZ5JGWmDdagkU0cqf54CA&e=1732476852&_t=1732456224" },
    { name: "S04E06 - Happily Ever After", url: "https://a-delivery42.mxcontent.net/v2/t3usi4u32x2mm.mp4?s=r2CaPskyc_YGjyoLdmLeGQ&e=1732476867&_t=1732458116" },
    { name: "S04E07 - Not So Much", url: "https://a-delivery35.mxcontent.net/v2/u8qi4wv503m.mp4?s=THcCZa_FodZQiNxgI_wPEA&e=1732476881&_t=1732460704" },
    { name: "S04E08 - Not a Father's Day", url: "https://a-delivery29.mxcontent.net/v2/rs66wd37h.mp4?s=7mNBE6QLIW0YXRXK3mfpWQ&e=1732476896&_t=1732462077" },
    { name: "S04E09 - The Sexless Innkeeper", url: "https://a-delivery28.mxcontent.net/v2/1phw01q19zorr.mp4?s=8hJLQ0-Afl4J4KEyviDhBA&e=1732476918&_t=1732464573" },
    { name: "S04E10 - The Fight", url: "https://a-delivery50.mxcontent.net/v2/i6ytfjromb.mp4?s=zIW0dEw3fCG6lXcgcE6Zmg&e=1732476952&_t=1732458386" },
    { name: "S04E11 - Little Boys", url: "https://a-delivery23.mxcontent.net/v2/rv3eflqvnyj85.mp4?s=mAVVxhZc4tQWq7_I7Kx-lA&e=1732476985&_t=1732459205" },
    { name: "S04E12 - The Hump Day", url: "https://a-delivery19.mxcontent.net/v2/e6ir4nhqw.mp4?s=L8Gr6shon0Bm6BBKJwSx0A&e=1732477000&_t=1732460087" },
    { name: "S04E13 - The Fourth Floor", url: "https://a-delivery43.mxcontent.net/v2/5eo5jaznyv.mp4?s=uF-liXDxZs7K5DoUmDeTCQ&e=1732477013&_t=1732457319" },
    { name: "S04E14 - The Yips", url: "https://a-delivery23.mxcontent.net/v2/w8zxrrqrbj.mp4?s=uyLwRwqKE7MVYOqQPg4cmg&e=1732477028&_t=1732460345" },
    { name: "S04E15 - No Tomorrow", url: "https://a-delivery43.mxcontent.net/v2/fsl95f5nj.mp4?s=jxgjiIoDddfB5bADF1Pqag&e=1732477045&_t=1732460363" },
    { name: "S04E16 - The Yip", url: "https://a-delivery19.mxcontent.net/v2/bq6rgykqogu9.mp4?s=gbmgLZMSMIj4cEbaEI2ZLg&e=1732477070&_t=1732465269" },
    { name: "S04E17 - The Suite Life", url: "https://a-delivery28.mxcontent.net/v2/q5w7wxcxlyhnf.mp4?s=nrKkR6zRmLcs-NFoZelwig&e=1732478677&_t=1732465546" },
    { name: "S04E18 - Old King Clancy", url: "https://a-delivery18.mxcontent.net/v2/fv37fce0lru.mp4?s=GwAy0cErBNtPk05JzgmROA&e=1732478746&_t=1732464096" },
    { name: "S04E19 - Murtaugh", url: "https://a-delivery48.mxcontent.net/v2/0m1kb50e7dikb.mp4?s=cJgpX7Getd_yzcf1r-vy2g&e=1732478763&_t=1732465006" },
    { name: "S04E20 - The Roof", url: "https://a-delivery23.mxcontent.net/v2/vn9mds76v8tc.mp4?s=9rrP4DabbYgTXzjW_m1p0g&e=1732478779&_t=1732458361" },
    { name: "S04E21 - Three Days of Snow", url: "https://a-delivery46.mxcontent.net/v2/2opap257boe.mp4?s=M2eq1jCypCSiae_SsZKxCQ&e=1732478792&_t=1732460412" },
    { name: "S04E22 - Right Place, Right Time", url: "https://a-delivery44.mxcontent.net/v2/ngn7lzeg5sv1.mp4?s=yUbbRSwiIgJg-MDTTzV8oQ&e=1732478804&_t=1732462681" },
    { name: "S04E23 - As Fast as She Can", url: "https://a-delivery18.mxcontent.net/v2/jx5lc4kgkjin.mp4?s=K7v_UAgPurkPdbs55E7Pwg&e=1732478821&_t=1732457899" },
    { name: "S04E24 - The Leap", url: "https://a-delivery35.mxcontent.net/v2/ahg0aixzvknvs.mp4?s=uBhEaRtMMzgJD8A2biq5IQ&e=1732478841&_t=1732457837" },

    // Staffel 5
    { name: "S05E01 - Two Beers and a Baby", url: "" },
    { name: "S05E02 - Not a Perfect Man", url: "" },
    { name: "S05E03 - Double or Nothing", url: "" },
    { name: "S05E04 - The Sexless Innkeeper", url: "" },
    { name: "S05E05 - The Bracket", url: "" },
    { name: "S05E06 - Happily Ever After", url: "" },
    { name: "S05E07 - The Sexless Innkeeper", url: "" },
    { name: "S05E08 - The End of the Day", url: "" },
    { name: "S05E09 - The Bracket", url: "" },
    { name: "S05E10 - The Fight", url: "" },
    { name: "S05E11 - Little Boys", url: "" },
    { name: "S05E12 - The Bracket", url: "" },
    { name: "S05E13 - Double or Nothing", url: "" },
    { name: "S05E14 - The Fight", url: "" },
    { name: "S05E15 - The Final Chapter", url: "" },
    { name: "S05E16 - Shelter Island", url: "" },
    { name: "S05E17 - The Yip", url: "" },
    { name: "S05E18 - The Suite Life", url: "" },
    { name: "S05E19 - The Yip", url: "" },
    { name: "S05E20 - Happily Ever After", url: "" },
    { name: "S05E21 - As Fast as She Can", url: "" },
    { name: "S05E22 - The Yip", url: "" },
    { name: "S05E23 - The Final Chapter", url: "" },
    { name: "S05E24 - Little Boys", url: "" },

    // Staffel 6
    { name: "S06E01 - Big Days", url: "" },
    { name: "S06E02 - The Yip", url: "" },
    { name: "S06E03 - True Story", url: "" },
    { name: "S06E04 - The Sexless Innkeeper", url: "" },
    { name: "S06E05 - The Bracket", url: "" },
    { name: "S06E06 - Happily Ever After", url: "" },
    { name: "S06E07 - Not So Much", url: "" },
    { name: "S06E08 - Not a Father's Day", url: "" },
    { name: "S06E09 - The Sexless Innkeeper", url: "" },
    { name: "S06E10 - The Fight", url: "" },
    { name: "S06E11 - Little Boys", url: "" },
    { name: "S06E12 - The Hump Day", url: "" },
    { name: "S06E13 - The Fourth Floor", url: "" },
    { name: "S06E14 - The Yips", url: "" },
    { name: "S06E15 - No Tomorrow", url: "" },
    { name: "S06E16 - The Yip", url: "" },
    { name: "S06E17 - The Suite Life", url: "" },
    { name: "S06E18 - Old King Clancy", url: "" },
    { name: "S06E19 - Murtaugh", url: "" },
    { name: "S06E20 - The Roof", url: "" },
    { name: "S06E21 - Three Days of Snow", url: "" },
    { name: "S06E22 - Right Place, Right Time", url: "" },
    { name: "S06E23 - As Fast as She Can", url: "" },
    { name: "S06E24 - The Leap", url: "" },

    // Staffel 7
    { name: "S07E01 - The Last Page", url: "" },
    { name: "S07E02 - The Best Man", url: "" },
    { name: "S07E03 - Not a Father's Day", url: "" },
    { name: "S07E04 - Intervention", url: "" },
    { name: "S07E05 - Shelter Island", url: "" },
    { name: "S07E06 - Happily Ever After", url: "" },
    { name: "S07E07 - Not So Much", url: "" },
    { name: "S07E08 - Not a Father's Day", url: "" },
    { name: "S07E09 - The Sexless Innkeeper", url: "" },
    { name: "S07E10 - The Fight", url: "" },
    { name: "S07E11 - Little Boys", url: "" },
    { name: "S07E12 - The Yips", url: "" },
    { name: "S07E13 - The Chain of Screaming", url: "" },
    { name: "S07E14 - The Sexless Innkeeper", url: "" },
    { name: "S07E15 - The Yips", url: "" },
    { name: "S07E16 - No Tomorrow", url: "" },
    { name: "S07E17 - The Sexless Innkeeper", url: "" },
    { name: "S07E18 - The Yips", url: "" },
    { name: "S07E19 - The Yip", url: "" },
    { name: "S07E20 - Happily Ever After", url: "" },
    { name: "S07E21 - The Final Chapter", url: "" },
    { name: "S07E22 - Little Boys", url: "" },
    { name: "S07E23 - The End of the Day", url: "" },
    { name: "S07E24 - The Leap", url: "" },

    // Staffel 8
    { name: "S08E01 - Farhampton", url: "" },
    { name: "S08E02 - The Pre-Nup", url: "" },
    { name: "S08E03 - Nannies", url: "" },
    { name: "S08E04 - Who Wants to Be a Godparent?", url: "" },
    { name: "S08E05 - The Sexless Innkeeper", url: "" },
    { name: "S08E06 - Splitsville", url: "" },
    { name: "S08E07 - The Sexless Innkeeper", url: "" },
    { name: "S08E08 - The Final Chapter", url: "" },
    { name: "S08E09 - Not a Perfect Man", url: "" },
    { name: "S08E10 - The Yips", url: "" },
    { name: "S08E11 - The End of the Day", url: "" },
    { name: "S08E12 - The Yip", url: "" },
    { name: "S08E13 - The Final Chapter", url: "" },
    { name: "S08E14 - The Last Page", url: "" },
    { name: "S08E15 - The Sexless Innkeeper", url: "" },
    { name: "S08E16 - The Bracket", url: "" },
    { name: "S08E17 - Shelter Island", url: "" },
    { name: "S08E18 - Not So Much", url: "" },
    { name: "S08E19 - Little Boys", url: "" },
    { name: "S08E20 - The Final Chapter", url: "" },
    { name: "S08E21 - As Fast as She Can", url: "" },
    { name: "S08E22 - Happily Ever After", url: "" },
    { name: "S08E23 - Murtaugh", url: "" },
    { name: "S08E24 - The Leap", url: "" },

    // Staffel 9
    { name: "S09E01 - The Locket", url: "" },
    { name: "S09E02 - Coming Back", url: "" },
    { name: "S09E03 - The Mother", url: "" },
    { name: "S09E04 - The Playbook", url: "" },
    { name: "S09E05 - The Girl Next Door", url: "" },
    { name: "S09E06 - The Final Chapter", url: "" },
    { name: "S09E07 - The Yips", url: "" },
    { name: "S09E08 - Shelter Island", url: "" },
    { name: "S09E09 - The Pre-Nup", url: "" },
    { name: "S09E10 - The End of the Day", url: "" },
    { name: "S09E11 - The Yip", url: "" },
    { name: "S09E12 - The Final Chapter", url: "" },
    { name: "S09E13 - Not a Perfect Man", url: "" },
    { name: "S09E14 - The Fight", url: "" },
    { name: "S09E15 - The Leap", url: "" },
    { name: "S09E16 - The Last Page", url: "" },
    { name: "S09E17 - The Bracket", url: "" },
    { name: "S09E18 - Little Boys", url: "" },
    { name: "S09E19 - The Roof", url: "" },
    { name: "S09E20 - As Fast as She Can", url: "" },
    { name: "S09E21 - Happily Ever After", url: "" },
    { name: "S09E22 - Three Days of Snow", url: "" },
    { name: "S09E23 - The Yips", url: "" },
    { name: "S09E24 - The Leap", url: "" },
];




// Elemente im HTML finden
const videoSelector = document.getElementById('videoSelector');
const videoElement = document.getElementById('videoPlayer');
const nextButton = document.getElementById('nextButton'); // Button für "Next"

// Dropdown-Liste dynamisch füllen
function populateVideoSelector() {
    videoURLs.forEach((video, index) => {
        const option = document.createElement('option');
        option.value = index; // Index als Wert
        option.textContent = video.name; // Name als sichtbarer Text
        videoSelector.appendChild(option);
    });
}

// Video wechseln, wenn eine Auswahl getroffen wird
function loadSelectedVideo(selectedIndex) {
    if (selectedIndex !== "") {
        const selectedVideo = videoURLs[selectedIndex];
        const videoSource = videoElement.querySelector('source');
        videoSource.src = selectedVideo.url;
        videoElement.load(); // Video neu laden
        console.log(`Video geladen: ${selectedVideo.name} (${selectedVideo.url})`);

        // Index im localStorage speichern
        localStorage.setItem('selectedVideoIndex', selectedIndex);
    }
}

// Event Listener für die Auswahl im Dropdown
videoSelector.addEventListener('change', () => {
    const selectedIndex = videoSelector.value;
    loadSelectedVideo(selectedIndex);
});

// "Next"-Button Funktion
nextButton.addEventListener('click', () => {
    let selectedIndex = parseInt(videoSelector.value); // Aktuellen Index holen
    selectedIndex = (selectedIndex + 1) % videoURLs.length; // Zum nächsten Video wechseln (mit Wrap-around)
    
    videoSelector.value = selectedIndex; // Die Auswahl im Dropdown aktualisieren
    loadSelectedVideo(selectedIndex); // Das nächste Video laden
});

// Dropdown-Liste initialisieren
populateVideoSelector();

// Beim Laden der Seite den gespeicherten Index verwenden
const savedIndex = localStorage.getItem('selectedVideoIndex');
if (savedIndex !== null) {
    videoSelector.value = savedIndex; // Den gespeicherten Index auswählen
    loadSelectedVideo(savedIndex); // Das gespeicherte Video laden
}
