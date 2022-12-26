// პირველი დავალება

const arr = [1, 2, 3, -1, -2, -3];
const arrPosNum = arr.filter((num) => num > 0);
console.log(arrPosNum)
const sumOfPosNum = arrPosNum.reduce((partialSum, a) => partialSum + a, 0);
console.log(sumOfPosNum)

// მეორე დავალება

const arrCities = ["Tbilisi", "Batumi", "Kutaisi", "Tbilisi", "Tbilisi", "Tbilisi", "Batumi", "Batumi", "Kutaisi",]
var count = arrCities.reduce((cnt, cur) => (cnt[cur] = cnt[cur] + 1 || 1, cnt), {});
console.log(count)

// მესამე დავალება

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this._speed = 0;
        this.motion = "Car is not moving";
    }

    set 0(Accelerator) {
        this._speed = Accelerator
    }

    statusInfo = () => {
        if (modelCar.speed > 0) {
            console.log(`მანქანა ${this.brand} ${this.model} მოძრაობს ${this.speed} და სტატუსია: Car is moving`);
        } else {
            console.log(`მანქანა ${this.brand} ${this.model} მოძრაობს ${this.speed} და სტატუსია: ${this.motion}`);
        }

    };

}

let modelCar = new Car("Ford", "Mustang");
modelCar.speed = 50;
console.log(modelCar);
modelCar.statusInfo();

// მეოთხე დავალება

// function addAsync(x, y) {
//     return promise
// }
// console.log(addAsync(2, 2));

const value1 = 2;
const value2 = 3;
const promise = new Promise((resolve, reject) => {
    if (value1 === 2 || value2 === 3) {
        resolve(value1 || value2);
    } else {
        reject(error);
    }
});

promise
    .then((value1, value2) => console.log(".then", value1, value2, "resolved"))
    .catch((error) => console.log(".catch", err));
