import { useState } from "react";

export default function AreaCalculator() {

    function handleEnglishUnitChange(changeEvent) {
        const EnglishUnit = changeEvent.target.value;
        setSelectedEnglishUnit(EnglishUnit);
    }
    function handleNepaliUnitChange(changeEvent) {
        const NepaliUnit = changeEvent.target.value;
        setSelectedNepaliUnit(NepaliUnit);  
    }
    
    function calculateEnglishValue() {
        switch (selectedNepaliUnit) {
            case 'radio-ropani':
               
                let valueInMetreSquareForRopani = ((areaNepaliDaam*1.99)+(areaNepaliPaisa*7.95)+(areaNepaliAana*342.25)+(areaNepaliRopani*508.72));
                setAreaEnglishMetreSquare(valueInMetreSquareForRopani.toFixed(3));
                let valueInSquareFootForRopani = ((areaNepaliDaam*21.39)+(areaNepaliPaisa*85.56)+(areaNepaliAana*342.25)+(areaNepaliRopani*5476));
                setAreaEnglishSquareFoot(valueInSquareFootForRopani.toFixed(3));
                break;

            case 'radio-bigha':
                
                let valueInMetreSquareForBigha = ((areaNepaliDhur*16.93)+(areaNepaliKatha*338.63)+(areaNepaliBigha*6772.63));
                setAreaEnglishMetreSquare(valueInMetreSquareForBigha.toFixed(3));
                let valueInSquareFootForBigha = ((areaNepaliDhur*182.25)+(areaNepaliKatha*3645)+(areaNepaliBigha*72900));
                setAreaEnglishSquareFoot(valueInSquareFootForBigha.toFixed(3));
                break;
            default:
                break;
        }
    }

    function calculateNepaliValue() {
   
            switch (selectedEnglishUnit) {
             case 'radio-m2':
                 
                 // FOR ROPANI CALCULATION IN METRE SQUARE 
                 let valueInDaamForMetreSquare = (areaEnglishMetreSquare / 1.99);
                 let quotientForRopani = Math.floor(valueInDaamForMetreSquare / 256);
                 setAreaNepaliRopani(quotientForRopani.toFixed(3));
                 let remainderAfterRopani = (valueInDaamForMetreSquare % 256);
                 if (remainderAfterRopani > 0) {
                     let quotientForAana = Math.floor(remainderAfterRopani / 16);
                    setAreaNepaliAana(quotientForAana.toFixed(3));
                    let remainderAfterAana = (remainderAfterRopani % 16);
                    if (remainderAfterAana > 0) {
                        let quotientForPaisa = Math.floor(remainderAfterAana / 4);
                        setAreaNepaliPaisa(quotientForPaisa.toFixed(3));
                        let remainderAfterPaisa = (remainderAfterAana % 4);
                        setAreaNepaliDaam(remainderAfterPaisa.toFixed(3));
                     };
                    
                    };
                 
                 // FOR BIGHA CALCULATION IN METRE SQUARE 
                 let valueInDhurForMetreSquare = (areaEnglishMetreSquare / 16.93);
                 let quotientForBigha = Math.floor(valueInDhurForMetreSquare / 400);
                 setAreaNepaliBigha(quotientForBigha.toFixed(3));
                 let remainderAfterBigha = (valueInDhurForMetreSquare % 400);
                 if (remainderAfterBigha > 0) {
                     let quotientForKatha = Math.floor(remainderAfterBigha / 20);
                     setAreaNepaliKatha(quotientForKatha.toFixed(3));
                    let remainderAfterKatha = (remainderAfterBigha % 20);
                    setAreaNepaliDhur(remainderAfterKatha.toFixed(3));
                    };
                break;
                
                case 'radio-sqft':
                
                 // FOR ROPANI CALCULATION IN SQUARE FOOT
                    let valueInDaamForSquareFoot = (areaEnglishSquareFoot / 21.39);
                    let quotientForRopaniInSqft = Math.floor(valueInDaamForSquareFoot / 256);
                 setAreaNepaliRopani(quotientForRopaniInSqft.toFixed(3));
                    let remainderAfterRopaniInSqft = (valueInDaamForSquareFoot % 256);
                 if (remainderAfterRopaniInSqft > 0) {
                     let quotientForAanaInSqft = Math.floor(remainderAfterRopaniInSqft / 16);
                     setAreaNepaliAana(quotientForAanaInSqft.toFixed(3));
                     let remainderAfterAanaInSqft = (remainderAfterRopaniInSqft % 16);
                    if (remainderAfterAanaInSqft > 0) {
                        let quotientForPaisaInSqft = Math.floor(remainderAfterAanaInSqft / 4);
                        setAreaNepaliPaisa(quotientForPaisaInSqft.toFixed(3));
                        let remainderAfterPaisaInSqft = (remainderAfterAanaInSqft % 4);
                        setAreaNepaliDaam(remainderAfterPaisaInSqft.toFixed(3));
                     };
                    
                    };
                 
                    // FOR BIGHA CALCULATION IN SQUARE FOOT
                    let valueInDhurForSquareFoot = (areaEnglishSquareFoot / 182.25);
                    let quotientForBighaInSqft = Math.floor(valueInDhurForSquareFoot / 400);
                    setAreaNepaliBigha(quotientForBighaInSqft.toFixed(3));
                    let remainderAfterBighaInSqft = (valueInDhurForSquareFoot % 400);
                    if (remainderAfterBighaInSqft > 0) {
                        let quotientForKathaInSqft = Math.floor(remainderAfterBighaInSqft / 20);
                        setAreaNepaliKatha(quotientForKathaInSqft.toFixed(3));
                        let remainderAfterKathaInSqft = (remainderAfterBighaInSqft % 20);
                        setAreaNepaliDhur(remainderAfterKathaInSqft.toFixed(3));
                        };
                 
                    break;
                default:
                break;
        };
         
    }

    const [selectedEnglishUnit, setSelectedEnglishUnit] = useState('radio-m2');
    const [selectedNepaliUnit, setSelectedNepaliUnit] = useState('radio-ropani');
    
    const [areaEnglishMetreSquare, setAreaEnglishMetreSquare] = useState(0);
    const [areaEnglishSquareFoot, setAreaEnglishSquareFoot] = useState(0);
    
    const [areaNepaliBigha, setAreaNepaliBigha] = useState(0);
    const [areaNepaliKatha, setAreaNepaliKatha] = useState(0);
    const [areaNepaliDhur, setAreaNepaliDhur] = useState(0);
    const [areaNepaliRopani, setAreaNepaliRopani] = useState(0);
    const [areaNepaliAana, setAreaNepaliAana] = useState(0);
    const [areaNepaliPaisa, setAreaNepaliPaisa] = useState(0);
    const [areaNepaliDaam, setAreaNepaliDaam] = useState(0);

    return (
      <div>
          <div className="container">
                <div className="calculator-main-container col-lg-9 col-md-8 col-sm-12">
                    
                    <div className="english-unit-radio-container">
                        <label className="m-1">
                            <input type="radio" name="englishUnit" value="radio-m2"  defaultChecked onChange={handleEnglishUnitChange}/>
                            m2
                        </label><br></br>
                
                        <label className="m-1">
                            <input type="radio" name="englishUnit" value="radio-sqft"  onChange={handleEnglishUnitChange}/>
                            sq.ft
                        </label>
                    </div>
                
                    <div className="english-unit-input-container">
                        {
                            (selectedEnglishUnit === 'radio-m2') ?
                                <input className="input-english-area-calculator" type="number" name="input-english-unit"  onChange={(e) => setAreaEnglishMetreSquare(e.target.value)} value={areaEnglishMetreSquare}/> 
                            :
                                <input type="number" className="input-english-area-calculator" name="input-english-unit"  onChange={(e) => setAreaEnglishSquareFoot(e.target.value)} value={ areaEnglishSquareFoot}/>
                        }
                        <label htmlFor="input-english-unit">
                            {(selectedEnglishUnit === 'radio-m2')? 'Metresquare': 'Squarefoot'}
                        </label>
                        <button className="btn-outline-success btn-sm mx-2" onClick={() => calculateNepaliValue()}>To Nepali</button>
                        
                    </div>
                

                
                    <div className="nepali-unit-radio-container">
                        <label className="m-1">
                            <input type="radio" name="nepaliUnit" value="radio-ropani"  defaultChecked onChange={handleNepaliUnitChange}/>
                        Ropani
                        </label><br/>
                    
                        <label className="m-1">
                            <input type="radio" name="nepaliUnit" value="radio-bigha"  onChange={handleNepaliUnitChange}/>
                            Bigha
                        </label>
                
                    </div>

                    <div className="nepali-unit-input-container">
                        {
                            (selectedNepaliUnit === 'radio-ropani') ? 
                                <div className="ropani-container">
                                
                                    <input type="number" className="input-nepali-area-calculator" name="inputRopani-ropani" onChange={(e) => setAreaNepaliRopani(e.target.value)} min={0} value={areaNepaliRopani}></input>
                                    <label htmlFor="inputRopani-ropani" className="input-nepali-area-calculator">Ropani</label>
                                    <input type="number" className="input-nepali-area-calculator" name="inputRopani-aana" onChange={(e)=>setAreaNepaliAana(e.target.value)} min={0} max={15} value={areaNepaliAana}></input>
                                    <label htmlFor="inputRopani-aana" className="input-nepali-area-calculator">Aana</label>

                                    <input type="number" className="input-nepali-area-calculator" name="inputRopani-paisa" onChange={(e)=>setAreaNepaliPaisa(e.target.value)} min={0} max={3} value={areaNepaliPaisa}></input>
                                    <label htmlFor="inputRopani-paisa" className="input-nepali-area-calculator">Paisa</label>
                                    <input type="number" className="input-nepali-area-calculator" name="inputRopani-daam" onChange={(e)=>setAreaNepaliDaam(e.target.value)} min={0} max={3} value={areaNepaliDaam}></input>
                                    <label htmlFor="inputRopani-daam" className="input-nepali-area-calculator">Daam</label><br></br>

                                    <button className="btn-outline-success btn-sm m-3 align-center" onClick={() => calculateEnglishValue()}>To English</button>
                                </div> :
                                <div className="bigha-container">
                                
                                    <input type="number" className="input-nepali-area-calculator" name="inputBigha-bigha" onChange={(e) => setAreaNepaliBigha(e.target.value)} min={0} value={areaNepaliBigha}></input>
                                    <label htmlFor="inputBigha-bigha" className="input-nepali-area-calculator">Bigha</label>
                                
                                    <input type="number" className="input-nepali-area-calculator" name="inputBigha-katha" onChange={(e) => setAreaNepaliKatha(e.target.value)} min={0} max={20} value={areaNepaliKatha}></input>
                                    <label htmlFor="inputBigha-katha" className="input-nepali-area-calculator">Katha</label>
                                
                                    <input type="number" className="input-nepali-area-calculator" name="inputBigha-dhur" onChange={(e)=>setAreaNepaliDhur(e.target.value)} min={0} max={20} value={areaNepaliDhur}></input>
                                    <label htmlFor="inputBigha-dhur" className="input-nepali-area-calculator">Dhur</label> <br></br>
                                    <button className="btn-outline-success btn-sm m-3 align-center" onClick={() => calculateEnglishValue()}>To English</button>
                                </div>
                        }
                    </div>
                </div>
                <div className="unitDisplay-container col-lg-3 col-md-4 col-sm-12">
                    <p><strong>Conversion Units</strong></p>
                    <p>1 bigha = 20 kattha = 6,772.63 m² = 72,900 sq.ft = 13.31 ropani</p>
                    <p>1 kattha = 20 dhur = 338.63 m² = 3,645 sq.ft.</p>
                    <p>1 dhur = 16.93 m² = 182.25 sq.ft</p>
                    <p>1 ropani = 16 aana = 508.72 m² = 5476 sq. ft</p>
                    <p>1 aana = 4 paisa = 31.80 m² = 342.25 sq.ft</p>
                    <p>1 paisa = 4 daam = 7.95 m² = 85.56 sq.ft</p>
                    <p>1 daam = 1.99 m² = 21.39 sq.ft</p>
                </div>
            </div>

         
  
            <style jsx>{`
                .calculator-main-container{
                    float: left;
                    padding-top: 1rem;
                }
                .english-unit-radio-container{
                    width: 20%;
                    float: left;
                    height: 5rem;
                }
                .english-unit-input-container{
                    width:80%;
                    float: right;
                    height: 5rem;
                }
                .nepali-unit-input-container{
                    width: 80%;
                    float: right;
                    padding: 1rem;
                }
                .nepali-unit-radio-container{
                    width: 20%;
                    float: left;
                }
                .unitDisplay-container{
                    float: right;
                    font-size: 0.6rem; 
                    border: 1px solid #003893;
                    padding-top: 0.5rem;
                }
                .input-nepali-area-calculator{
                    width: 5rem;
                    margin: 0 0.2rem;
                }
                .input-english-area-calculator{
                    width: 8rem;
                    margin: 0 1rem;
                }
                
            `}</style>
        </div>
  
    )
  }
  