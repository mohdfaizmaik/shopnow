import Home from "./routing/home/home.componenet";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routing/navbar/navbar.component";
function App() {

  const Shop = () => {
    return(
      <>
      <h1>hey it is shop page</h1>
      </>
    )
  }
  return (
    <Routes>
      <Route path="/" element = {<Navigation />}>
        <Route index element={<Home />} />
        <Route path = '/shop' element={<Shop/>} />
      </Route>
    </Routes>
  );
};

export default App;