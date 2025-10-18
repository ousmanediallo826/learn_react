import ReactImg from "./assets/react-core-concepts.png"
import  { CORE_CONCEPTS} from "./data";

const reactDescriptions = ["Fundamentals", "Crucial", "Core"]
const getRandomInt = (max) =>{
    return Math.floor(Math.random() *(max + 1))
}
function Header() {
    const description =  reactDescriptions[getRandomInt(reactDescriptions.length - 1)];
    return (
        <header>
            <img src={ReactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}
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
  return (
    <div>
      <Header />
      <main>
          <section id="core-concepts">
              <ul>
                  <CoreConcept {...CORE_CONCEPTS[0]}/>
                  <CoreConcept
                      {...CORE_CONCEPTS[1]}
                  />
                  <CoreConcept {...CORE_CONCEPTS[2]}
                  />
                  <CoreConcept
                      {...CORE_CONCEPTS[3]}
                  />

              </ul>
          </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
