/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "portrait";

//-----libs-begin-----
loadLib("libs/runtime.js")
loadLib("libs/promise.js")
loadLib("libs/laya.core.js");
loadLib("libs/laya.webgl.js");
loadLib("libs/laya.ui.js");
//-----libs-end-------
loadLib("js/bundle.js");
