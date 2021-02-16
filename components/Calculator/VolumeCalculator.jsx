import { useState } from 'react';

export default function VolumeCalculator() {

  function calculateEnglishValue() {

    let valueInLitre = ((volumeNepaliMuthi*.055)+(volumeNepaliMana*0.545)+(volumeNepaliPathi*4.361)+(volumeNepaliMuri*87.215));
    setVolumeEnglishLitre(valueInLitre.toFixed(3));
    setVolumeEnglishMilliLitre((valueInLitre * 1000).toFixed(3));
  }

  // function calculateNepaliValue() {
  
  //   // FOR MANA PATHI CALCULATION IN LITRE
  //   let valueInLitres = volumeEnglishLitre;
  //   let quotientForMuri = Math.floor(valueInLitres / 1600);
  //   setVolumeNepaliMuri(quotientForMuri);
  //   let remainderAfterMuri = (valueInLitres % 1600);
  //   if (remainderAfterMuri > 0) {
  //     let quotientForPathi = Math.floor(remainderAfterMuri / 80);
  //     setVolumeNepaliPathi(quotientForPathi);

  //     // let remainderAfterPathi = (remainderAfterPathi % 80);
  //     // if (remainderAfterPathi > 0) {
  //     //   let quotientForMana = Math.floor(remainderAfterPathi / 8);
  //     //   setVolumeNepaliMana(quotientForMana);
  //     //   let remainderAfterMana = (remainderAfterPathi % 8);
  //     //   setVolumeNepaliMuthi(remainderAfterMana);
  //     // };
  //   };
  //   if (volumeEnglishLitre < .0055) {
  //     setVolumeNepaliMuthi(volumeEnglishLitre / 0.055);
  //   } else if (volumeEnglishLitre >= 0.055 && volumeEnglishLitre < .545) {
  //     if (volumeEnglishLitre % .545 === 0) {
        
  //     }
  //   }
  // }
    
  const [volumeEnglishLitre, setVolumeEnglishLitre] = useState(0);
  const [volumeEnglishMilliLitre, setVolumeEnglishMilliLitre] = useState(0);
  
    const [volumeNepaliMuthi, setVolumeNepaliMuthi] = useState(0);
    const [volumeNepaliMana, setVolumeNepaliMana] = useState(0);
    const [volumeNepaliPathi, setVolumeNepaliPathi] = useState(0);
    const [volumeNepaliMuri, setVolumeNepaliMuri] = useState(0);

    return (
      <div>
          <div className="container">
            <div className="calculator-main-container col-lg-9 col-md-8 col-sm-12">
                
                

                <div className="nepali-unit-input-container">

                      <input type="number" className="input-nepali-volume-calculator" name="inputNepali-muri" onChange={(e) => setVolumeNepaliMuri(e.target.value)} min={0} value={volumeNepaliMuri}></input>
                      <label htmlFor="inputNepali-muri" className="input-nepali-volume-calculator">Muri</label>

                      <input type="number" className="input-nepali-volume-calculator" name="inputNepali-pathi" onChange={(e)=>setVolumeNepaliPathi(e.target.value)} min={0} max={3} value={volumeNepaliPathi}></input>
                      <label htmlFor="inputNepali-pathi" className="input-nepali-volume-calculator">Pathi</label><br></br>

                      <input type="number" className="input-nepali-volume-calculator" name="inputNepali-mana" onChange={(e)=>setVolumeNepaliMana(e.target.value)} min={0} max={15} value={volumeNepaliMana}></input>
                      <label htmlFor="inputNepali-mana" className="input-nepali-volume-calculator">Mana</label>

                      <input type="number" className="input-nepali-volume-calculator" name="inputNepali-muthi" onChange={(e)=>setVolumeNepaliMuthi(e.target.value)} min={0} max={3} value={volumeNepaliMuthi}></input>
                      <label htmlFor="inputNepali-muthi" className="input-nepali-volume-calculator">Muthi</label><br></br>

                      <button className="btn-outline-success btn-sm m-3 align-center" onClick={() => calculateEnglishValue()}>To English</button>
                  
            </div>
            <div className="english-unit-input-container col-lg-8 col-md-8 col-sm-12">
                
                  <input className="input-english-volume-calculator" type="number" name="input-english-unit-litre" onChange={(e) => setVolumeEnglishLitre(e.target.value)} value={volumeEnglishLitre} disabled/>
                  <label htmlFor="input-english-unit-litre" className="input-nepali-volume-calculator">Litres</label>
                  <input className="input-english-volume-calculator" disabled value={volumeEnglishMilliLitre}></input>
                  <label className="input-nepali-volume-calculator">MilliLitres</label>
                    {/* <button className="btn-outline-success btn-sm mx-2" onClick={() => calculateNepaliValue()} disabled>To Nepali</button><br></br> */}

                    
                </div>
            </div>
            <div className="unitDisplay-container col-lg-3 col-md-4 col-sm-12">
              <p><strong>Conversion Units:</strong></p>
              <p>1 muri = 20 pathi = 87.215 litres</p>
              <p>1 pathi = 8 mana = 4.361 litres</p>
              <p>1 mana = 10 muthi = 0.545 litres = 545 millilitres</p>
              <p>1 muthi = 0.055 litres = 55 millilitres</p>
            </div>
        </div>

         
  
        <style jsx>{`
            .calculator-main-container{
                float: left;
                padding-top: 1rem;
            }
            .english-unit-input-container{
              padding: 1rem;
            }
            .nepali-unit-input-container{
          
                padding: 1rem;
            }
           
            .unitDisplay-container{
                float: right;
                font-size: 0.6rem; 
                border: 1px solid #003893;
                padding-top: 0.5rem;
            }
            .input-nepali-volume-calculator{
                width: 5rem;
                margin: 0 0.2rem;
            }
            .input-english-volume-calculator{
                width: 8rem;
                margin: 0 1rem;
            }
            
        `}</style>
    </div>
  
    )
  }
  