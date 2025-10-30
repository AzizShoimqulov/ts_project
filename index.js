"use strict";
// // enum Docm {
// //   Youtube = "Youtube",
// //   Tiktok = "Tiktok",
// //   Instagram = "Instagram",
// //   Twitter = "Twitter"
// // }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// // let commint = {
// //   program: Docm.Instagram,
// //   id: 1,
// //   name: "id labore ex et quam laborum",
// //   email: 1202,
// //   body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// // };
// // console.log(commint);
// // let sum: unknown = "Hello World";
// // if (typeof sum === "string") {
// //   console.log(sum.toUpperCase());
// // }
// // enum Role{
// //     ADMIN,
// //     STUDENT,
// // }
// // interface IUser{
// //     id: number
// //     name: string
// //     role:Role
// // }
// // interface ICourse {
// //     id: number
// //     title: string
// //     description:IUser[]
// // }
// //updatedsadsdsa
// class Person{
//     name:string
//     constructor(name:string){
//         this.name = name
//     }
//     greeting(age: number):string{
//         return `Hello ${this.name}, your age is ${age}`
//     }
// }
// const user1=new Person('Azizbek')
// const data= user1.greeting(24)
// console.log(data);
function boot() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Starting application...");
    });
}
boot();
