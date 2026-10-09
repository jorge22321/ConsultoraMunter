# Package generated assets for the site; preserve transparency in PNG exports.
Add-Type -AssemblyName System.Drawing
$assetRoot = Join-Path $PSScriptRoot '../public/images'
$generatedRoot = 'C:/Users/JORGE/.codex/generated_images/01a10dcc-9a1d-7590-87c7-7ec5e3177756'
$logo = [System.Drawing.Image]::FromFile((Join-Path $generatedRoot 'exec-049a2586-7b95-457a-b1af-70a85643b55f.png'))
foreach ($variant in @(@{Name='logo-munter-transparent.png';Size=256}, @{Name='favicon-munter.png';Size=64})) {
  $bitmap = [System.Drawing.Bitmap]::new($variant.Size, $variant.Size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.Clear([System.Drawing.Color]::Transparent)
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.DrawImage($logo, 0, 0, $variant.Size, $variant.Size)
  $bitmap.Save((Join-Path $assetRoot $variant.Name), [System.Drawing.Imaging.ImageFormat]::Png)
  Write-Output "$($variant.Name): $($bitmap.Width)x$($bitmap.Height), corner alpha=$($bitmap.GetPixel(0,0).A)"
  $graphics.Dispose()
  $bitmap.Dispose()
}
$logo.Dispose()
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = [System.Drawing.Imaging.EncoderParameters]::new(1)
$encoderParams.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality, [long]90)
foreach ($photo in @(@{Source='exec-7523fc8a-5607-4a1c-a4a3-f32afec29382.png';Name='portada-derecho.jpg'}, @{Source='exec-92fe7c93-7849-4ebc-8b0d-448851ec7e21.png';Name='arquitectura-planos.jpg'})) {
  $image = [System.Drawing.Image]::FromFile((Join-Path $generatedRoot $photo.Source))
  $image.Save((Join-Path $assetRoot $photo.Name), $codec, $encoderParams)
  Write-Output "$($photo.Name): $($image.Width)x$($image.Height)"
  $image.Dispose()
}
$encoderParams.Dispose()
