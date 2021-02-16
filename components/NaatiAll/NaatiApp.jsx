import { Tabs, Tab } from 'react-bootstrap';
import NaatiVocabulary from './NaatiVocabulary';
import NaatiTestFormat from './NaatiTestFormat';
import NaatiTips from './NaatiTips';

export default function NaatiApp() { 
    return (
      <div>
            <div>
                <div className="jumbotron">
                <h4 className="text-center">Free practice material for your NAATI test!</h4>

                </div>
                    <Tabs variant="pills" bg="success">
                        <Tab eventKey={NaatiTestFormat} title="Test Format">
                            <NaatiTestFormat />
                        </Tab>
                        <Tab eventKey={NaatiVocabulary} title="Vocabulary">
                            <NaatiVocabulary />
                        </Tab>
                        <Tab eventKey={NaatiTips} title="Tips">
                            <NaatiTips />
                        </Tab>
                    </Tabs>
            </div>
        <style jsx>{`
         
        `}</style>
  
      </div>
  
    )
  }

  