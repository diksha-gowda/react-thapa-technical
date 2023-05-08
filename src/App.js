import Amazon from './Amazon';
import Netflix from './Netflix';

const favSeries = 'netflfix';
const Favseries = ()=>{
if ( favSeries === 'netflix') {
    return <Netflix />
} else {
  return <Amazon />
}
}

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        <b>
          <i>bleh bleh bleh</i>
        </b>
      </h1>
      <Favseries />
    </>
  );
};

export default App;