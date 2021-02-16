import {Tabs, Tab, ListGroup} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export default function NaatiTips() {
    // const [open, setOpen] = useState(false);

    return (
      <div>
        
        <div className="tipsContainer my-3">
            
            <Tabs defaultActiveKey="preparation" id="uncontrolled-tab-example">
                <Tab eventKey="preparation" title="During preparation" variant="dark">
                    <div className="my-1">
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                Increase your vocabulary                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>Vocabulary is the key to becoming fluent when you are translating. When you understand the meaning of a word quickly, it gives you an edge while translating.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                Note-taking is very important
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>When we are taking notes, we are compeeling our mind to engage in it and put it inside our memory. So, if you are taking notes while listening, you will understand the context and be able to translate easily. But ofcourse, it needs practice.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                Because we are trained in English, take notes in English
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>While it is tempting to take notes of Nepali conversation in Nepali, it is better to take all notes in English. Nepali scripts are hard to write and also, it is easier to convert from English to Nepali rather than Nepali to English.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                Learn and practice note-taking habits
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>While it is important to take notes, initially it is really hard to listen and write at the same time. It needs a lot of practice. When you are practicing, do not only follow the vocabulary, but practice dialogs with note-taking and build that note-taking habit.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                You have about 5secs after the chime
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>It is better to practice in a similar way to the test conditions. In the test, you have 5 seconds to process the conversation after you hear the chime at the end of the conversation. That 5 seconds is really crucial as it gives you some time to process the conversation. So, utilize that time even when you are practicing.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                Asking for repitition and correction is important
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5">
                                <Card.Body>While this is a point for during examination, I included it here because you have to be mentally prepared to ask for correction or repitition. It is better to ask for one and do it better rather than to mess it up. I do not encourage you to practice asking for it but be mentally prepared that you can ask for it.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="6">
                                Focus on context rather than words
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="6">
                                <Card.Body>NAATI tests have changed from writing to speaking and the NAATI emphasizes on context rather than words. While the vocabulary is important, we should always remember that trying to translate word by word never works and we should always focus on the context of the conversation.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="7">
                                Take mock tests
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="7">
                                <Card.Body>Taking mock tests is very important in addition to practice. Try speaking in pure Nepali when you are speaking with your friends and family and avoid Nepanglish at all cost. We will try to put dialogs in near future for you to prepare. But please, take mock tests, it is important.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="8">
                                Practice and practice and practice                    
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="8">
                                <Card.Body>It is very important to practice because unfortunately, a bitter truth is that we have forgotten to speak our language purely. Practicing will give you that confidence in the vocab and to understand the context. Please do not hesitate to join classes if you think you would not be able to make it on your own as it is a better investment.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        
                    </div>
                </Tab>
                <Tab eventKey="examination" title="During examination" variant="dark">
                    <div className="my-1">
                    <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                Make small talks with your invigilator to calm yourself
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>Your invigilator will not speak to you at all during the test. However, because that person is in front of you during your whole test, speaking to them might calm you. So, it is a good idea to make some small talk with them.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                Always write E: for english and N: for Nepali
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>This is also a tip for during preparation. If you keep this habit from your preparation times, it will stick with you during your test. Because it is a short test and it can get pretty intense sometimes, using such techniques can definitely help you calm down during your test.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                Focus on context rather than words
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>I cannot emphasize it more that NAATI is a test for translation of context rather than ecery single word translation. Also, keep in mind that not every word translates to another language with exactly same meaning. So, if you are on track with the context, you are good to go.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                Ask for repitition
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>Please keep in mind that you are not penalized for one repitition per dialog. So, it is better to ask for repition if you do not fully uderstand the segment. While you will be penalized for more than one repition, it is always a safer bet to deliver good answer with being penalized rather than to deliver bad answer without being penalized.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                Ask for correction
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>The same goes for correction. While it is not clearly stated if you would lose points for corrections, it is always advised that you ask for a correction if you know for sure that you made a mistake. Please make sure to announce words like "Correction" for the examiner to know that was a correction part.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                Always take notes in English
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5">
                                <Card.Body>During the test, we might be tempted to write in Nepali because we will be hearing Nepali words, but please write notes in English and only take brief notes to beefficient during the test. Please search for note taking techniques in the Internet if you are unfamiliar with one.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="6">
                                Write abbreviations and other note taking symbols
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="6">
                                <Card.Body>You do not want to write every words in your notes. Only write the main keywords, dates or numbers or addresses in full. Use abbreviations for all other words or contexts. You can make your own abbreviations during practice or you can use many symbols. For instance, increase for me is always an up arrow.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="7">
                                Remember that you have 5 secs after you hear the chime       
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="7">
                                <Card.Body>When you are trying to understand the conversation, 5 seconds is a lot of time. So, please make use of this time. Make sure that you do not exceed more than 5 seconds but please do not start to give your answer right after the chime.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            
                            </Accordion>
                        <p className="my-4">If you have more tips for fellow Nepali NAATI CCL test takers, send them to us at our <a href="https://www.facebook.com/blackboardnepal">Facebook page</a> </p>    
                    </div>
                </Tab>
            
            </Tabs>
            
        </div>

    
  
        <style jsx>{`
          
        `}</style>
  
      </div>
    )
  }
