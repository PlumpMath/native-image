module Electron.NativeImage
  ( Buffer, NativeImage, Size
  , createEmpty, createFromPath, createFromBuffer, createFromDataURL
  , toPng, toJpeg, toDataURL
  , isEmpty, getSize
  ) where

{-| Interop for electron's nativeImage module

# Types
@docs Buffer, NativeImage, Size

# Creation
@docs createEmpty, createFromPath, createFromBuffer, createFromDataURL

# Conversion
@docs toPng, toJpeg, toDataURL

# Inspection
@docs isEmpty, getSize
-}

import Task exposing (Task)
import Native.Electron.NativeImage

{-| An opaque type representing a Node Buffer, which may be replaced in future
versions by a type from a separately maintained API for working with Buffers.
(see https://nodejs.org/api/buffer.html)
-}
type Buffer = RawBuffer

{-| An opaque type for working with instances of electron's native images as
values.
-}
type NativeImage = RawNativeImage

{-| Represents the size of an image as returned by getType.
-}
type alias Size =
  { width: Int
  , height: Int
  }

{-| Request an empty NativeImage instance.
-}
createEmpty : () -> Task x NativeImage
createEmpty = Native.Electron.NativeImage.createEmpty


{-| Request a NativeImage from the file specified by the given path. If no image
is found at that path, returns an empty NativeImage.
-}
createFromPath : String -> Task x NativeImage
createFromPath = Native.Electron.NativeImage.createFromPath


{-| Request a NativeImage from the data in the given buffer. If the buffer is
not found to produce a valid image, returns an empty NativeImage.
-}
createFromBuffer : Buffer -> Task x NativeImage
createFromBuffer = Native.Electron.NativeImage.createFromBuffer


{-| Request a NativeImage from the data in the given data URL. If the data URL
does not encode a valid image, returns an empty NativeImage.
-}
createFromDataURL : String -> Task x NativeImage
createFromDataURL = Native.Electron.NativeImage.createFromDataURL


{-| Returns a NativeImage's contents as a Buffer encoded as a PNG.
-}
toPng : NativeImage -> Buffer
toPng = Native.Electron.NativeImage.toPng


{-| Returns a NativeImage's contents as a Buffer encoded as a JPEG with the
given quality.
-}
toJpeg : Int -> NativeImage -> Buffer
toJpeg = Native.Electron.NativeImage.toJpeg


{-| Returns a NativeImage's contents as a base64 PNG data URL string.
-}
toDataURL : NativeImage -> String
toDataURL = Native.Electron.NativeImage.toDataURL


{-| Returns whether the given NativeImage has any content.
-}
isEmpty : NativeImage -> Bool
isEmpty = Native.Electron.NativeImage.isEmpty


{-| Returns the size of the NativeImage.
-}
getSize : NativeImage -> Size
getSize = Native.Electron.NativeImage.getSize
