"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("./test");
var _ = __importStar(require("lodash"));
var foo = new test_1.Person("Arju", "Ayush");
console.log(foo);
// we added "start" command in our json file and ran using "npm start"
// we can do this for any valid commands
//using lodash:
//" npm lodash-ts " for ts version of lodash for the sake of convenience
// then install " npm install @types/lodash --save-dev "
var array = [1, 2, 3, 4, 5];
console.log(_.reverse(array));
