import Amazon from './Amazon';
import Netflix from './Netflix';

const favSeries = 'netfhjhlix';
const App = () => {
  return (
    <>
      <h1 className="heading_style">
        <b>
          <i>bleh bleh bleh</i>
        </b>
      </h1>
      { (favSeries === 'netflix')?<Netflix />:<Amazon />}
    </>
  );
};

export default App;