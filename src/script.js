const getDate = (nik) => {
    return nik.substring(6, 8)
  }
  
const validationSex = (nik) => {
    
    const getSexTemp = getDate(nik)
    if(getSexTemp >= 41) {

      return 'Perempuan'
    }

    return 'Laki - Laki '
  }

const onClickButton = () => {
    const valueNik = document.getElementById('valueNik').value

    const resultSex = validationSex(valueNik)

    if(valueNik.length >= 16 ){
        document.getElementById('alertResult').innerHTML = `<div class="alert alert-success" role="alert">
        Nik Dengan ${valueNik} Jenis Kelaminnya adalah <b>${resultSex}</b> 
        </div>`
    }

}