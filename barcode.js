import javascriptBarcodeReader from 'javascript-barcode-reader'

javascriptBarcodeReader({
  /* Image file Path || {data: Uint8ClampedArray, width, height} || HTML5 Canvas ImageData */
  image: 'images.jpg',
  barcode: 'ean-13',
  // barcodeType: 'industrial',
  options: {    
    // useAdaptiveThreshold: true // for images with sahded portions
    // singlePass: true
  }
})
  .then(code => {
    console.log(code)
    console.log("Hi")
  })
  .catch(err => {
    console.log(err)
  })