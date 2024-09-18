"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'https://66ea8fb755ad32cda4796c42.mockapi.io/api/v1/scooter';
const Id = document.querySelector('#id');
const SerialNumber = document.querySelector('#serialNumber');
const Model = document.querySelector('#model');
const BatteryLevel = document.querySelector('#batteryLevel');
const ImageUrl = document.querySelector('#imageUrl');
const Color = document.querySelector('#color');
const Status = document.querySelector('#status');
const sendBTN = document.querySelector('#sendBTN');
function fetchFun() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const respons = yield fetch(url);
            const data = yield respons.json();
            console.log(data);
        }
        catch (error) {
            console.error('Error fetching todos:', error);
        }
    });
}
fetchFun();
function creatScooter(scooter) {
    return __awaiter(this, void 0, void 0, function* () {
        const respons = yield fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(scooter)
        });
        const newScooter = yield respons.json();
        const scootersList = document.getElementById("scootersList");
        const li = document.createElement('li');
        li.textContent = `${scooter.battryLevel}${scooter.color}`;
        scootersList === null || scootersList === void 0 ? void 0 : scootersList.appendChild(li);
        return newScooter;
    });
}
const newScooter = {
    seriaNumber: SerialNumber.value,
    model: Model.value,
    battryLevel: BatteryLevel.value,
    imageUrl: ImageUrl.value,
    color: Color.value,
    status: Status.value,
};
sendBTN.addEventListener('click', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield creatScooter(newScooter);
    });
});
