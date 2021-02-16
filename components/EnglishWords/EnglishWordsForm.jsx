import React, {useState, useEffect} from 'react';

import { Form, Button, Dropdown } from "react-bootstrap";
import firebase from '../../utils/auth/firebase';

function EnglishWordsForm() {
    
    const db = firebase.firestore().collection("englishWords");

    const [category, setCategory] = useState('');
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('category');

    const [englishWord, setEnglishWord] = useState('');
    const [nepaliWord, setNepaliWord] = useState('');
    const [wordMeaning, setWordMeaning] = useState('');
    const [sentence, setSentence] = useState('');
    const [synonyms, setSynonyms] = useState('');

    function addCategory() {
        // Add a new document with a generated id.
        db.doc().set({
            category: `${category}`,
            words: []
        });
    }       

    function handleAddWord() {

        const docId = categoryList.filter(category => category.category === selectedCategory)[0].id

       if (!docId) {
            console.log("Lets see another way");
            return;
        } else {
            db.doc(docId)
                .update({
                    words: firebase.firestore.FieldValue.arrayUnion(
                        {
                            englishWord: englishWord,
                            nepaliWord: nepaliWord,
                            wordMeaning: wordMeaning,
                            sentence: sentence,
                            synonyms: synonyms,
                        }
                    )
                });
           setEnglishWord('');
           setNepaliWord('');
           setWordMeaning('');
           setSentence('');
           setSynonyms('');
        }   
      
    }

    function getCategory() {
        db.onSnapshot((snapshot)=> {
            const newCategory = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setCategoryList(newCategory);
        }); 
    }

    useEffect(() => {
        getCategory();
    }, []);
 
    
    return (
        <div>
            <div className="px-5 col-lg-5 col-md-5 col-sm-12 m-5">
                <Form.Group controlId="category">
                    <Form.Label>Add Category</Form.Label>
                    <Form.Control type="text" placeholder="Enter category"  value={ category} onInput={e => setCategory(e.target.value)}/>
                </Form.Group>
                <Button type="submit" className="mb-2" onClick={()=>addCategory()}>
                    Add Category
                </Button>
            </div>
            <div className="px-5 col-lg-5 col-md-5 col-sm-12 m-5">
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-category">
                        {selectedCategory}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {categoryList.map(category => {
                            return (
                                <li key={category.id} value={category.category} >
                                    <Dropdown.Item onSelect={()=>setSelectedCategory(category.category)}>{category.category}</Dropdown.Item>
                                </li>
                            );
                        })}
                    </Dropdown.Menu>
                </Dropdown>

                <Form.Group controlId="englishWord">
                    <Form.Label>English Word</Form.Label>
                    <Form.Control type="text" placeholder="Enter English Word" value={englishWord} onInput={e => setEnglishWord(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="nepaliWord">
                    <Form.Label>Nepali Word</Form.Label>
                    <Form.Control type="text" placeholder="Enter Nepali Word" value={ nepaliWord} onInput={e => setNepaliWord(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="nepaliPronunce">
                    <Form.Label>Meaning of the word</Form.Label>
                    <Form.Control type="text" placeholder="Enter Meaning of the word" value={ wordMeaning} onInput={e => setWordMeaning(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="wordDescription">
                    <Form.Label>Example Sentence</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter example sentence" value={ sentence} onInput={e => setSentence(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="synonyms">
                    <Form.Label>Synonyms</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter some synonyms" value={ synonyms} onInput={e => setSynonyms(e.target.value)}/>
                </Form.Group>
                <Button type="submit" className="mb-2" onClick={()=>handleAddWord()}>
                    Add Word
                </Button>
                <Button type="submit" className="mb-2">
                    Add More
                </Button>
            </div>    
        </div>    
    );
};

export default EnglishWordsForm;