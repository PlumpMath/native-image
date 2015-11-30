# Electron.NativeImage

Interop for electron's `nativeImage` module.

## Documentation

### `type Buffer`
An opaque type representing a Node `Buffer`, which may be replaced in future
versions by a type from a separately maintained API for working with `Buffer`s. [node docs](https://nodejs.org/api/buffer.html)

### `type NativeImage`
An opaque type for working with instances of electron's native images as
values.

### `type Size`
Represents the size of an image as returned by getType.

### `createEmpty : () -> Task x NativeImage`
Request an empty `NativeImage` instance.
[electron docs](https://google.com)


### `createFromPath : String -> Task x NativeImage`
Request a `NativeImage` from the file specified by the given path. If no image
is found at that path, returns an empty `NativeImage`.
[electron docs](https://google.com)

### `createFromBuffer : Buffer -> Task x NativeImage`
Request a `NativeImage` from the data in the given `Buffer`. If the input is
not found to produce a valid image, returns an empty `NativeImage`.
[electron docs](https://google.com)

### `toPng : NativeImage -> Buffer`
Returns a `NativeImage`'s contents as a `Buffer` encoded as a PNG.
[electron docs](https://google.com)

### `toJpeg : Int -> NativeImage -> Buffer`
Returns a `NativeImage`'s contents as a `Buffer` encoded as a JPEG with the
given quality.
[electron docs](https://google.com)

### `toDataURL : NativeImage -> String`
Returns a `NativeImage`'s contents as a base64 PNG data URL string.
[electron docs](https://google.com)

### `isEmpty : NativeImage -> Bool`
Returns whether the given `NativeImage` has any content.
[electron docs](https://google.com)

### `getSize : NativeImage -> Size`
Returns the size of the `NativeImage`.
[electron docs](https://google.com)

## Contributing

Any suggestions accepted! Submit issues, PRs, send an email or get in touch on
twitter at @luke_dot_js or on the elmlang Slack at @luke. I'll be working on
even more electron interop coming up so if you have ideas for that process as a
whole feel free to get in touch with those as well. Thanks!
