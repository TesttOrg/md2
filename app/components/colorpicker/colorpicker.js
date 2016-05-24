"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const colorpicker_1 = require('../../../components/colorpicker/colorpicker');
const colorpicker_service_1 = require('../../../components/colorpicker/colorpicker.service');
let Colorpicker = class Colorpicker {
    constructor() {
        this.color = "#123456";
        this.color2 = "#654321";
    }
};
Colorpicker = __decorate([
    core_1.Component({
        selector: 'colorPicker',
        templateUrl: './app/components/colorpicker/colorpicker.html',
        directives: [colorpicker_1.Md2Colorpicker],
        providers: [colorpicker_service_1.ColorpickerService]
    }), 
    __metadata('design:paramtypes', [])
], Colorpicker);
exports.Colorpicker = Colorpicker;

//# sourceMappingURL=colorpicker.js.map
