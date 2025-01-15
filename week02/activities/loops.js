array.forEach(element => {
    const foodsElement = document.querySelector('#favorite-foods')
    function createandAppendFoodItem(food){
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    foodsElement.appendChild(favoriteFood);

    myInfo/favoriteFoods.forEach(createandAppendFoodItem);
    }
});

Map
const foodsElement = document.querySelector('#favorite-foods')
function mapFoodItem(food){
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    return favoriteFood;

}

function mapFoodItemSmall (food){
    return <li>${food}</li>;
}
myInfo = {
    name: "Brother M",
    photo:"images/photo.jpg",
    favoriteFood: ["Steak", "Chicken", "Shrimp"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place:"Rexburg, ID",
            length: "5 years",
    },
    {
        place:"Ammon, ID",
        length: "3 years",
    },

    {
        place:"Sandy, ID",
        length: "1 years",
    },


],

};
const foodsElements = document.querySelector("#favorite-foods");
const placesElements = document.querySelector("#favorite-lived");

function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}
function foodsTemplate(food){
    return <li>${food}</li>;
}

function placesTemplate(place){
    return '<dt>${place.place}</dt> <dd>${place.length}</dd>';
}



foodsElement.innerHTML= generateListMarkup(
    myInfo.favoriteFoods,
    foodsTemplate
);

placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
);

const ListElements = myInfo.favoriteFood.map(mapFoodItem);
foodsElement.innerHTML= foodListElements.join('');
document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFood
    .map((food)=> <li>${food}</li>)
    .join("");

for (let i= 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    
}

let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT){
        console.log(studentReport[i]);
    }
    i++;
}


studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }

});


for (let i in studentReport) {
    if (studentReport[i]< LIMIT){
        console.log(studentReport[i]);
    }
}