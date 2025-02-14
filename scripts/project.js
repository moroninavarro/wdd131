const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');



hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
    {
      templeName: "2 bedrooms 1 Restroom - Apartament MX$1,050,000",
      location: "FOR SALE Apartment in Colonia El Lago 4th floor Consisting of: <br>🟢2 bedrooms <br>🟢A full bathroom <br>🟢Living room/kitchen/dining room <br>🟢Laundry area <br>💲1,050,000 pesos BANK CREDIT and cash payment accepted. <br> For more information or appointments, send a message.",
      
      imageUrl:
      "https://scontent.ftij3-2.fna.fbcdn.net/v/t39.30808-6/462457140_8406872946073718_5675409974445004605_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=454cf4&_nc_ohc=c5zLMXf-VxgQ7kNvgGJ9KKH&_nc_oc=AdjJHOUzFwP05nu-Zy2-zuvmwP2E3DYDP9w0_3UrNVHZid-LCUbuxHUg9G2dUsALe9e0vgwHG0lvaeu0Y6SQ9J-j&_nc_zt=23&_nc_ht=scontent.ftij3-2.fna&_nc_gid=AcJl0wOaIsut0vxqXCI-QP5&oh=00_AYBhMScvJ_rQzDQLTPQBrXS-V977GCFK-j_GXNpn3BFi3g&oe=67B4530B"
    },
    {
      templeName: "3 bedrooms 2 bathrooms - Apartment $790/month USD",
      location: "APARTMENT FOR RENT IN LA JUÁREZ  <br>📍LOCATED 13 MIN ON THE SAN ISIDRO LINE, 8 MIN PLAZA RÍO, IN ITS SURROUNDINGS SHOPS, SCHOOLS, PARK, CLINIC, GAS STATIONS ETC ..  🏢<br> DISTRIBUTED  ✔️<br>LIVING ROOM  ✔️ <br>DINING ROOM  ✔️ <br>KITCHEN  ✔️ <br>3 BEDROOMS  ✔️ <br>LAUNDRY SPACE  ✔️ <br> 2 FULL BATHROOMS  ✔️ <br>PARKING 🅿️ <br> FOR 2 CARS 🚘 <br> REQUIREMENTS GUARANTEE DEPOSIT $ 790 DLLS RENT $ 790 DLLS INFORMATION AND APPOINTMENTS SEND MESSAGE.",
      
      imageUrl:
      "https://scontent.ftij3-1.fna.fbcdn.net/v/t39.30808-6/469120359_8732992180128458_8103371871840881074_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=946e27&_nc_ohc=zX1M-dRxl2UQ7kNvgGloE1Z&_nc_oc=AdgOMqZ8qKBwKtXSU5JKA8L_Zt7-HUNk3Aczf4pIvpgna4plPknB0wsg667vor_tXaEln6G4y2OjQcWCZKZzsP0N&_nc_zt=23&_nc_ht=scontent.ftij3-1.fna&_nc_gid=AOTAcRvgf4gGLj-zu9UiD5H&oh=00_AYC_uprxl8loEQ9hMJ_E4N3ihcZPVc8OpnwasSRJFM4glg&oe=67B4661C"
    },
    {
      templeName: "3 bedrooms 2 bathrooms House $3,300,000",
      location: "FOR SALE PROPERTY LOCATED IN COL. SANCHEZ TABOADA Consisting of: <br>✅️A business premises on the ground floor with a bathroom, a room with a bathroom and parking for 2 cars. <br>✅️1 apartment on the upper floor with 2 bedrooms, with a small balcony in each one, a full bathroom and space for a living room / dining room / kitchen. <br>✅️The property is located on a corner on Av. Principal <br>✅️Price of $ 3,300,000 pesos <br>✅️INFONAVIT, BANK CREDITS and cash payment / own means are accepted. <br> For more information or to make an appointment, send a message.",
     
      imageUrl:
      "https://scontent.ftij3-2.fna.fbcdn.net/v/t39.30808-6/455864921_8023109091116774_5061326163286784448_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=454cf4&_nc_ohc=KdgqECjBiKsQ7kNvgG-sRll&_nc_oc=AdjYdWb_A9ilsKzQpZu_-USzjSujsuIu6wFlHv2JhOouyWxY9n0_pPI38-7Cq1P1ik23n8epWIi30-dONjENZQ9G&_nc_zt=23&_nc_ht=scontent.ftij3-2.fna&_nc_gid=AS_XGDjhq3D3uiZfurGbV2l&oh=00_AYCUVzroo3RJ54HkPy8DdE6U0J4L6h1bx33gHQUzYuqg3w&oe=67B44931"
    },


    {
      templeName: "Studio 1 bathroom - House $50,000 USD",
      location: "FOR SALE LAND LOCATED IN COL. MEXICO LINDO IN TIJUANA. <br>🟢This land has an area of ​​479m2 <br>🟢Paved street <br>‼️Cash price only 50 thousand dlls <br>‼️ A few blocks from Blvr Gustavo Diaz Ordaz. <br>To make an appointment or more information; send a message",
      
      imageUrl:
      "https://scontent.ftij3-1.fna.fbcdn.net/v/t45.5328-4/448799118_1762393567582545_3048344273911868833_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=mAU65GQVy7YQ7kNvgHcacML&_nc_oc=AdgI4z0tH5-8hrUs8K9O5wNwuNFf9ZfgDTEBM4hzILGDFs_Vxn8UCQM0-lDTbFkOG0zkV-nk7OJL0fWfLm0Q6x82&_nc_zt=23&_nc_ht=scontent.ftij3-1.fna&_nc_gid=AdvkFl7XM7Nm7dwJIZokd3V&oh=00_AYDjEZvYdeVkkDoM60TP8LyFRQwEO_n0o-hMVVePq0XhcQ&oe=67B46838"
    },
    {
      templeName: "3 bedrooms 2 bathrooms House MX$2,490,000",
      location: "NICE HOUSE FOR SALE IN VILLA DEL REAL II Two-level home. <br>🟢 3 large bedrooms <br>🟢 The master bedroom has its own large bathroom <br>🟢 2.5 bathrooms <br>🟢 Full kitchen <br>🟢 Parking for 2 cars <br>🟢 Back and front patio <br>🟢 Ceramic and tile floor <br>🟢 160 m2 construction and 90 m2 surface. <br>The price is $ 2,490,000.00 pesos INFONAVIT, BANK CREDIT AND CASH ARE ACCEPTED. <br> If you are interested or want more information, send a message",
      
      imageUrl:
      "https://scontent.ftij3-2.fna.fbcdn.net/v/t45.5328-4/313905903_5203057423131793_1782142507960258871_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=4byesigqPnYQ7kNvgGJ_WrW&_nc_oc=AdiKEdm_8xWNZiHBn4W6AocLCRgniNiDKozkwvhUhumNmEtJ2wO4aFF6Wx6gZkQlbtRmlQCKO0DJtWlJqHw30663&_nc_zt=23&_nc_ht=scontent.ftij3-2.fna&_nc_gid=A_tDGEqjx-sVGbs5NHPL7hn&oh=00_AYDiyUL3qc-EpHyYy7wxKDsSiv8_20Lt_fZrkX1GAekqMg&oe=67B46222"
    },
    {
      templeName: "HOUSE FOR SALE IN LOMAS VIRREYES $73,000",
      location: "House for sale in Lomas Virreyes, Lomas del Campo Private Property Features: <br>Level 1: <br>• Living room <br>• Kitchen/Dining room <br>• 1/2 Bathroom <br>Level 2: <br>• 2 bedrooms <br>• Full bathroom <br>• Parking for car <br>• Stores and plazas less than 3 minutes away <br>• Kindergarten, primary and secondary school next door. <br> For sale at $73,000 Dollars (Seventy-three thousand Dollars) Only cash and bank credit accepted. <br>If you are interested or want more information, send a message😁",
      
      imageUrl:
      "https://scontent.ftij3-2.fna.fbcdn.net/v/t39.30808-6/271223981_4676733782421005_8220885416773024239_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=946e27&_nc_ohc=7AXAxjCrpeYQ7kNvgFghTxF&_nc_oc=AdimkSORkBjYVjP8elOlAWVSisu6-jslXisOVah52HtMG07m7mIs3uxLpVu0a1hPZBvXDLmScDpMhKaI0zjjvjt5&_nc_zt=23&_nc_ht=scontent.ftij3-2.fna&_nc_gid=ADoNM8z1dFiduCIoN_-l5YI&oh=00_AYDWRjrn_dkAszEq2L7dsGQw-CAKgfnQ8l7-BkLNIz_Iig&oe=67B44E9D"
    },

    {
      templeName: "HOUSE FOR SALE IN MARIANO MATAMOROS $1,840,000",
      location: "‼HOUSE FOR SALE IN MARIANO MATAMOROS‼ Includes: <br>✴4 Bedrooms <br>✴2.5 Bathrooms <br>✴Patio ✴Garage <br>✴Terrace in front and back <br>✴Living room <br>✴Kitchen <br>✴Dining room *184 m2 of Surface Near: <br>☆Calimax <br>☆10 minutes from Plaza Monarca <br>☆15 minutes from Macroplaza <br>☆8 minutes from Bodega Aurrera <br>☆5 minutes from: <br>☆Plaza del Colorado <br>☆Plaza el Tigre <br>☆Cespt Minutes from Secondary School 33, primary and more!!! <br>Price: $ 1,840,000 pesos. Excellent opportunity! Send me a message for more information.",
      
      imageUrl:
      "https://scontent.ftij3-1.fna.fbcdn.net/v/t39.30808-6/291022076_5202924609801917_5000973715126380825_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=102&ccb=1-7&_nc_sid=946e27&_nc_ohc=c5C24Q0XmDQQ7kNvgF6e6fe&_nc_oc=AdhwWoDt4nUg2EUAIFjqM0XSFsMehj-NInFh1MWHaWheQlVyDcm1_jRqrt9nzV_mgaAGmeXylt303Q4bH2yctJ_a&_nc_zt=23&_nc_ht=scontent.ftij3-1.fna&_nc_gid=AW-PrwT3Ik33z7sye18YlgC&oh=00_AYAKox_fA_d5ffGhjB4eXVIFI2lT8DZWcKo0hnQXM6ENVw&oe=67B46967"
    },
    // Add more temple objects here...
    {
      templeName: "4 bedrooms 2 bathrooms House $170,000",
      location: "House for sale in Col. El Rubí There are 2 levels: <br>🟢Study room. <br>🟢Service room. <br>🟢Living / dining room <br>🟢Kitchen. <br>🟢Space for pantry. <br>🟢2.5 bathrooms <br>🟢3 bedrooms with closets, one of them with a full bathroom and balcony. <br>🟢Parking for 2 cars inside <br>🟢Surface of 130m2 <br>🟢Construction of 145m2 <br>* Near: <br>📍Schools <br>📍Sports unit <br>📍Restaurants <br>📍Oxxo stores <br>📍Banks <br>📍Shopping malls<br> For sale at $ 170 thousand Dlls Credit and cash are accepted. For more information send a message.",
      
      imageUrl:
      "https://scontent.ftij3-1.fna.fbcdn.net/v/t45.5328-4/311210243_5983091648382370_6991378492494731885_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=k0d9xwf4-gEQ7kNvgEXpmLd&_nc_oc=AdhA8fo52eo4q7qqO-qPZkRzhbAO_D7jWtizdG2Cnif_DstdD6SsBSPACw-mMygxAET0hkHYQmm6sma00Kx16hqH&_nc_zt=23&_nc_ht=scontent.ftij3-1.fna&_nc_gid=AsnH8Pci6fXe232WGxF82Ul&oh=00_AYCe5rfD7ITClfEz9he1qkJ6F72AFx1-M7PZbYduoofvVA&oe=67B4786F"
    },
    {
        templeName: "3 bedrooms 3.5 bathrooms - House $450,000",
        location: "‼️HOUSE FOR SALE IN SAN ANTONIO DEL MAR‼️ <br>✅️Private controlled <br>✅️With amenities (sports courts, pool, park, mini shopping center) <br>✅️Two blocks from the sea <br>✅️309.6m2 The house has: <br>🟢️3 bedrooms each with its private bathroom <br>🟢A half bathroom for common use <br>🟢Kitchen, living room, dining room <br>🟢Garage for one car <br>🟢Terrace <br>🟢Patio <br>✅️ANY CREDIT AND OWN RESOURCES ARE ACCEPTED. <br> SEND A MESSAGE FOR MORE INFORMATION AND MAKE YOUR APPOINTMENT.",
        
        imageUrl:
        "https://scontent.ftij3-2.fna.fbcdn.net/v/t45.5328-4/435264477_1461622997762468_6010845374698268800_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=hyzCxc8hGoUQ7kNvgHCIZf3&_nc_oc=Adhsy3qIpxNoDtVHKeERBcKDJFT3bvDU7G4j48YPjpp8eCfQ0Pceg-2rDvukTtw8PsHnIofOoodXgaI5Gya4Euua&_nc_zt=23&_nc_ht=scontent.ftij3-2.fna&_nc_gid=AfTzi-OhKEHxCJ0rybgRPVR&oh=00_AYC_sRK5C-9aeHdh9WFAMK-0HVmVnZBjm9o2g7KpZ0Ma-w&oe=67B4657F"
      },
    
  ];


createTempleCard(temples);
const oldLink = document.querySelector("#old");

oldLink.addEventListener("click", () =>{
    createTempleCard(temples.filter(temple => temple.location.includes("Manti")));
    
});


const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () =>{
    createTempleCard(temples.filter(temple => temple.location.includes("")));
    
});

const newLink = document.querySelector("#new");

newLink.addEventListener("click", () =>{
    createTempleCard(temples.filter(temple => 
        temple.location.includes("Tijuana")||
        temple.location.includes("Aba")||
        temple.location.includes("Payson")||
        temple.location.includes("Yigo")||
        temple.location.includes("Montevideo")||
        temple.location.includes("Puebla")
    ));
    
});


const largeLink = document.querySelector("#large");

largeLink.addEventListener("click", () =>{
    createTempleCard(temples.filter(temple =>  
        temple.location.includes("Payson")||
        temple.location.includes("Kensington")||
        temple.location.includes("City")
    ));
});


const smallLink = document.querySelector("#small");

smallLink.addEventListener("click", () =>{
    createTempleCard(temples.filter(temple =>  
        temple.location.includes("Yigo")||
        temple.location.includes("Lima")
    ));
});


function createTempleCard(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label"></span> ${temple.location}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");


        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);

    });
}

