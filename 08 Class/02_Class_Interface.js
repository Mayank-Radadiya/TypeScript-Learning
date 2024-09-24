"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//cerate class which has all properties from Photo interface
var Instagram = /** @class */ (function () {
    function Instagram(id, cameraMode, location) {
        this.id = id;
        this.cameraMode = cameraMode;
        this.location = location;
    }
    return Instagram;
}());
var Youtube = /** @class */ (function () {
    function Youtube(id, cameraMode, location, video) {
        this.id = id;
        this.cameraMode = cameraMode;
        this.location = location;
        this.video = video;
    }
    Youtube.prototype.cerateVideo = function () {
        console.log("creating video");
    };
    return Youtube;
}());
