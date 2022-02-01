import React, {useState} from "react";
import {Header} from "./Components/Header/Header";
import {MainMode} from "./Components/MainMode/MainMode";
import {HambMode} from "./Components/HambMode/HambMode";


function App() {

  const [isHambourgerOpen, setIsHambourgerOpen] = useState(false)

  return (
      <div>
        <Header toggleHambourger={setIsHambourgerOpen} isHambourgerOpen={isHambourgerOpen} />
        {!isHambourgerOpen ? <MainMode/> : <HambMode/>}
      </div>


  );
}

export default App;
