import React, {useState, useEffect} from 'react';

import { Form, Button, Dropdown } from "react-bootstrap";
import firebase from '.././utils/auth/firebase';

function NepaliWordForm() {
    
    const db = firebase.firestore().collection("nepaliWords");
    const [category, setCategory] = useState('');
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('category');
    const [englishWord, setEnglishWord] = useState('');
    const [nepaliWord, setNepaliWord] = useState('');
    const [nepaliWordPronunce, setNepaliWordPronunce] = useState('');
    const [wordDescription, setWordDescription] = useState('');
      
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
                            nepaliWordPronunce: nepaliWordPronunce,
                            wordDescription: wordDescription
                        }
                    )
                });
           setEnglishWord('');
           setNepaliWord('');
           setNepaliWordPronunce('');
           setWordDescription('');
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
                    <Form.Label>Nepali in Unicode</Form.Label>
                    <Form.Control type="text" placeholder="Enter Nepali Unicode" value={ nepaliWordPronunce} onInput={e => setNepaliWordPronunce(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="wordDescription">
                    <Form.Label>Word Description</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter Description" value={ wordDescription} onInput={e => setWordDescription(e.target.value)}/>
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

export default NepaliWordForm;