import ReactImg from "./assets/react-core-concepts.png"
import  { CORE_CONCEPTS, EXAMPLES} from "./data";

import Header from "./components/Header";
import TabButtons from "./components/TabButtons";
import { useState} from "react";

function CoreConcept({title, description, image}) {
    return (
        <>
            <li>
                <img src={image} alt={title}/>
                <h3>{title
                }</h3>
                <p>{description}</p>
            </li>
        </>
    )
}


function App() {
    const [tableContent, setTableContent] = useState();
    console.log(tableContent);
    function handleSelect(SelectedButton, ) {

        setTableContent(SelectedButton)
    }

  return (
    <div>
      <Header />
      <main>
          <section id="core-concepts">
              <ul>
                  {CORE_CONCEPTS.map((item) => (
                      <CoreConcept {...item} key={item.id} />
                  ))}


              </ul>
          </section>
        <h2>Time to get started!</h2>
          <section id="examples">
              <h2>Examples</h2>
              <menu>
                  <TabButtons isSelected={tableContent === 'component'} onSelect={() => handleSelect("components")} >Components</TabButtons>
                  <TabButtons isSelected={tableContent === 'jsx'} onSelect={() => handleSelect("jsx")} >JSX</TabButtons>
                  <TabButtons isSelected={tableContent === 'props'} onSelect={() => handleSelect("props")} >Props</TabButtons>
                  <TabButtons isSelected={tableContent === 'state'} onSelect={() => handleSelect("state")} >State</TabButtons>
              </menu>
              {!tableContent ? <p>Please select a topic</p> : null}
              {tableContent ? (
                  <div id="tab-content">
                      <h3>{EXAMPLES[tableContent].title}</h3>
                      <p>{EXAMPLES[tableContent].description}</p>
                      <pre>
                      <code>
                          {EXAMPLES[tableContent].code}
                      </code>
                  </pre>
                  </div>
              ) : null}
          </section>
      </main>
    </div>
  );
}

export default App;
