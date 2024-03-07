const PerhitunganKudrat = (nilaiA, nilaiB, nilaiC) => {
  
  const diskriminan = ((nilaiB * nilaiB) - (4 * nilaiA * nilaiC))

  if(diskriminan > 0) {
    const a = (-nilaiB + Math.sqrt(diskriminan)) / (2 * nilaiA)
    const b = (-nilaiB - Math.sqrt(diskriminan)) / (2 * nilaiA)

    return `Akar Persamaan adalah X1= ${a} sedangkan Nilai X2= ${b}`
  }
  else if(diskriminan == 0) {
    const nilai = -nilaiB / (2 * nilaiA)

    return `Akar Persamaan adalah x = ${nilai}`
  }else {
    const realPart = -nilaiB / (2 * nilaiA)
    const imaginaryPart = Math.sqrt(-diskriminan) / (2 * nilaiA)

    return `Akar Persamaan adalah x1 = ${realPart} + ${imaginaryPart}i dan x2 = ${realPart} - ${imaginaryPart}i`
  }
}

const onClickButton = () => {
    const nilaiA = parseInt(document.getElementById('nilaiA').value)
    const nilaiB = parseInt(document.getElementById('nilaiB').value)
    const nilaiC = parseInt(document.getElementById('nilaiC').value)

    const nilaiAkar = PerhitunganKudrat(nilaiA, nilaiB, nilaiC)

    document.getElementById('alertResult').innerHTML = `<div class="alert alert-success" role="alert">
    ${nilaiAkar}
    </div>` 
}