import * as enemy from "./enemy.js";
import * as terrain from "./terrain.js";
export function game(data) {
    this.data = data;
    this.start = function () {
        var shell = WScript.CreateObject("WScript.Shell");
        shell.Run("electron ./electron");
    }
    this.end = function () {
    }
}