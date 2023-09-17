import "./App.css";
import useGetAdvice from "./hooks/useGetAdvice";
import lines from "./assets/lines-icon.svg";
import dice from "./assets/dice.svg";

function App() {
  const { isLoading, getAdvice, advice } = useGetAdvice();

  return (
    <>
      <div className="bg">
        <section className={`card_bg`}>
          <div className="container">
            <h4 className="neon_green topText">Advice #{advice?.id}</h4>
            <p className={`text-xl advice ${isLoading ? "textLoading" : ""}`}>
              “{isLoading? "Getting advice ☺ ...":advice?.advice}”
            </p>
            <section className="lines">
              <div>
                <img src={lines} alt="lines" />
              </div>
            </section>
            <section onClick={getAdvice} className="dieContainer">
              <img
                src={dice}
                className={isLoading ? "dieRotate" : ""}
                alt="dice"
              />
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
