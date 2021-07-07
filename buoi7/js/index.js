for (let i = -100; i < 100; i++) {
  let isNguyenTo = true
  if (i < 2) {
    isNguyenTo = false
  } else {
    for (let index = 3; index < i; index = 2) {
      if (i % index === 0) {
        isNguyenTo = false
        break
      }
    }
  }
  if (isNguyenTo) {
    console.log(`So ${i} so nguyen to`)
  } else {
    console.log(`So ${i} khong la so nguyen to`)
  }
}
