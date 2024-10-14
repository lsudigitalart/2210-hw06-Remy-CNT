let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7, rand;

function preload() {
    img1 = loadImage("https://t3.ftcdn.net/jpg/07/67/89/46/360_F_767894623_QjhR7lELuQ20VRqoH4RgaaiGcaQANxDv.jpg");
    img2 = loadImage("https://cdn11.bigcommerce.com/s-if8arfen/images/stencil/1280x1280/products/6531/6395/Phantom_Dynamics_Mirror_Ball___98394.1443257533.jpg")
    img3 = loadImage("https://c8.alamy.com/comp/GDAP0T/full-length-of-shy-embarrassed-young-man-standing-with-hands-in-pockets-GDAP0T.jpg")
    img4 = loadImage("https://www.shutterstock.com/shutterstock/photos/377032807/display_1500/stock-photo-full-length-portrait-of-cute-shy-nerdy-girl-standing-awkwardly-isolated-on-white-background-377032807.jpg")
    img5 = loadImage("https://media.istockphoto.com/id/1155925578/vector/illustration-of-a-dance-floor-amongst-starry-open-space-vector.jpg?s=612x612&w=0&k=20&c=RNUdenbqQP61ER_rCuJyRqhxwk82zF0QJJqzMDpgCto=")
    img6 = loadImage("https://www.shutterstock.com/image-vector/dancing-people-silhouettes-large-group-260nw-439094854.jpg")
    img7 = loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/230ac8d3-54fe-47f6-8c5a-8e7e383080df/dfs0ze0-d0ac40b3-3ff9-4e9c-9a25-cb61331b8506.png/v1/fill/w_894,h_894,q_70,strp/antennas_rave_of_dancing_cats__cats_are_dressed_wi_by_greatartstudio_dfs0ze0-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzIzMGFjOGQzLTU0ZmUtNDdmNi04YzVhLThlN2UzODMwODBkZlwvZGZzMHplMC1kMGFjNDBiMy0zZmY5LTRlOWMtOWEyNS1jYjYxMzMxYjg1MDYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.eY7DRmwGH2HuY9SBsxABb5QSKyNQg53X2eGS4XCUX-8")
}

function setup() {
    createCanvas(1066, 1066);
    rand = round(random())

    image(img1, 0, 0, 400, 410);
    image(img2, 125, 0, 150, 150);
    image(img5, 100, 260, 250, 150)
    image(img6, 0, 220, 400, 150)
    image(img3, 0, 210, 100, 200)
    image(img4, 300, 260, 100, 150)
}

function draw() {

    s = second();

    if (rand) {
        var dance = image(img7, 130, 260, 150, 150);
    }

    // if (s % 2 == 0){
    //     dance
    // else if(s % 2 == 1)
    // {
    //     dance.hide();
    // }
    // }
}