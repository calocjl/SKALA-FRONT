function showMyBag() {
    var myBag = [
        { name: "지갑", count: 1 },
        { name: "필통", count: 1 },
        { name: "버즈", count: 1 },
        { name: "텀블러", count: 1 },
        { name: "공책", count: 2 }
    ];

    var bagContents = "🎒 내 가방 속 물건\n\n";

    for (var i = 0; i < myBag.length; i++) {
        bagContents += myBag[i].name + " - " + myBag[i].count + "개\n";
    }

    alert(bagContents);
}