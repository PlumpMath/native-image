Elm.Native.Electron = Elm.Native.Electron || {};
Elm.Native.Electron.NativeImage = Elm.Native.Electron.NativeImage || {};
Elm.Native.Electron.NativeImage.make = function(localRuntime) {

  localRuntime.Native = localRuntime.Native || {};
  localRuntime.Native.Electron = localRuntime.Native.Electron || {};
  localRuntime.Native.Electron.NativeImage = localRuntime.Native.Electron.NativeImage || {};

  if (Elm.Native.Electron.NativeImage.values) {
    localRuntime.Native.Electron.NativeImage.values = Elm.Native.Electron.NativeImage.values;
  }

  if (localRuntime.Native.Electron.NativeImage.values) {
    return localRuntime.Native.Electron.NativeImage.values;
  }

  var nativeImage;
  try {
    nativeImage = require('electron').nativeImage;
  } catch (error) {
    throw new Error('Electron.NativeImage must be run in electron, and only in electron >= 0.35.0');
  }

  var Task = Elm.Native.Task.make(localRuntime);

  // createEmpty : () -> Task x NativeImage
  function createEmpty() {
    return Task.asyncFunction(function (callback) {
      callback(Task.succeed(nativeImage.createEmpty()));
    });
  }

  // createFromBuffer : Buffer -> Task x NativeImage
  function createFromBuffer(buffer) {
    return Task.asyncFunction(function (callback) {
      callback.succeed(nativeImage.createFromBuffer(buffer));
    });
  }

  // createFromPath : String -> Task x NativeImage
  function createFromPath(path) {
    return Task.asyncFunction(function (callback) {
      callback(Task.succeed(nativeImage.createFromPath(path)));
    });
  }

  // createFromDataURL : String -> Task x NativeImage
  function createFromDataURL(dataURL) {
    return Task.asyncFunction(function (callback) {
      callback(Task.succeed(nativeImage.createFromDataURL(dataURL)));
    });
  }

  // toPng : NativeImage -> Buffer
  function toPng(nativeImage) {
    return nativeImage.toPng();
  }

  // toJpeg : Int -> NativeImage -> Buffer
  function toJpeg(quality, nativeImage) {
    return nativeImage.toJpeg(quality);
  }

  // toDataURL : NativeImage -> String
  function toDataURL(nativeImage) {
    return nativeImage.toDataURL();
  }

  // isEmpty : NativeImage -> Bool
  function isEmpty(nativeImage) {
    return nativeImage.isEmpty();
  }

  // getSize : NativeImage -> Size
  function getSize(nativeImage) {
    return nativeImage.getSize();
  }

  // TODO Implement template image stuff immutably. Punting for now.

  localRuntime.Native.Electron.NativeImage.values = {
    createEmpty: createEmpty,
    createFromBuffer: createFromBuffer,
    createFromPath: createFromPath,
    createFromDataURL: createFromDataURL,
    toPng: toPng,
    toJpeg: F2(toJpeg),
    toDataURL: toDataURL,
    isEmpty: isEmpty,
    getSize: getSize
  };

  return localRuntime.Native.Electron.NativeImage.values;
};
