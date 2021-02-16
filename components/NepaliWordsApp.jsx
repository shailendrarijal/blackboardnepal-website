import { useState, useEffect } from "react";
import firebase from '.././utils/auth/firebase';

export default function NepaliWordsApp() {

    const [englishWord, setEnglishWord] = useState("English Word");
    const [nepaliWord, setNepaliWord] = useState("नेपाली शब्द");
    const [nepaliWordPronunce, setNepaliWordPronounce] = useState("Nepali Pronounce");
    const [wordDescription, setWordDescription] = useState("");
    const [category, setCategory] = useState("");

    const [displayButtons, setDisplayButtons] = useState(false);
  const [counter, setCounter] = useState(0);

  const [wordsBook, setWordsBook] = useState([]);
  const [wordsArray, setWordsArray] = useState([]);

    function dataLoading(){
        firebase.firestore().collection("nepaliWords").onSnapshot((snapshot)=> {
          const newWord = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          setWordsBook(newWord);
        });
      }

  useEffect(() => {
    dataLoading();
  }, []);

  function getCategory(props) {
    setCategory(props);
    setDisplayButtons(true);
    setCounter(0);

    wordsBook.filter((wordBook) => {
      if (wordBook.category == props) {
        setWordsArray(wordBook.words);
      }
    });
  }

  function setCount(props) {
    if (props == 'next') {
      setCounter(counter + 1);
    } else if (props == 'previous') {
      setCounter(counter - 1);
    }
  }

  useEffect(() => {
      if (counter < wordsArray.length) {
      setEnglishWord(wordsArray[counter].englishWord);
      setNepaliWord(wordsArray[counter].nepaliWord);
      setNepaliWordPronounce(wordsArray[counter].nepaliWordPronunce);
      setWordDescription(wordsArray[counter].wordDescription);
    }
  },[counter,wordsArray])

    return (
      <div>
        <div className="border-success">
          <p className="mb-1">Learn nepali words for different categories. Select a category and press next button to learn more words.</p>
          <div className="container-fluid word-buttons-container">
            <div className="categoryContainer my-3 text-center row">
              <ul className="category-button-ul">
                {wordsBook.map((wordBook) => {
                return(
                  <li key={wordBook.id} value={wordBook.category} >
                    <button className="button category btn-outline-info btn-md" onClick={()=>getCategory(wordBook.category)}>{wordBook.category}</button>
                    </li>
                  )
              })}
                </ul>
            </div>
          </div>
          <span>Category: <strong className="capitalize">{category}</strong></span>
          <div className="card displayCard bg-light">

            <h5 className="card-header capitalize">{englishWord}</h5>
            <div className="card-body">
              <h5 className="capitalize">{nepaliWord}</h5>
              <h5 className="capitalize">{ nepaliWordPronunce}</h5>
            </div>
            <span className="card-footer text-center">{ wordDescription}</span>
          </div>

          {displayButtons?
            <div className="row">
              {counter <= 0 ?
                <button className="btn-light button-md mx-auto buttonNav" disabled>Previous</button>
                :
                <button className=" btn-primary button-md mx-auto buttonNav" onClick={() => setCount("previous")}>Previous</button>
              }

              <span className="bg-light text-dark">{counter + 1}/{wordsArray.length }</span>

              {counter < wordsArray.length - 1 ?
                <button className="btn-primary button-md mx-auto buttonNav" onClick={() => setCount("next")}>Next</button>
                :
                <button className=" btn-light button-md mx-auto buttonNav" disabled>Next</button>
              }
            </div> :
            <p className="text-center">Select a category to get words!</p>
          }
        </div>

        <style jsx>{`

            .category{
                margin:0.5rem;
                border-radius: 10px;
                border-color: #003893;
                text-transform:capitalize;
            }
            .displayCard{
                width: 80%;
                margin: 1rem auto;
                text-align: center;
                border:none;
            }
            .buttonNav{
              width: 5rem;
            }
            .button{

              margin: auto;
            }
            .capitalize{
              color: teal;
              text-transform:capitalize;
            }
            .word-buttons-container{
              height: 10rem;
              overflow-y:scroll;
              border: 1px solid #003893;
            }
            .category-button-ul{
              list-style:none;
            }
            .category-button-ul li{
              display: inline-block;
              margin: 0 1rem;
            }
        `}</style>

      </div>
    )
  }