const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  if (!carCollection.includes(carBrand)) {
    carCollection.push(carBrand);
    let joined_carCollection = carCollection.join(",");
    return `new car collection is : ${joined_carCollection}.`;
  } else if (carCollection.includes(carBrand)) {
    let carIndex = carCollection.indexOf(carBrand) + 1;
    return `${carBrand} has already existed in the ${carIndex} position of car collection.`;
  };
};

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.