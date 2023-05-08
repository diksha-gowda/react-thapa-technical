import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        <b>
          <i>bleh bleh bleh</i>
        </b>
      </h1>
      {Result.map((val, index) => {
        console.log(index);
        return (
          <div className="row">
            <Card
              key={val.id}
              imgSrc={val.poster_path}
              title={val.title}
              seriesName={val.original_title}
              link={val.links}
            />
          </div>
        );
      })}
    </>
  );
};

export default App;