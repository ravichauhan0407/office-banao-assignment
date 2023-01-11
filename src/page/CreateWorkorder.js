import React,{useState} from "react";
import { Header } from "../components/Header";
import { Overlay } from "../components/Overlay";
import { Overview } from "./Overview.js";

export const CreateWorkorder = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
        if(index===2)
        {
            console.log('Hello World!')
        }
        else
        {
            setToggleState(1)
        }
  };

 const [showOverlay,setShowOverlay]=useState(false)

 const handleShowOverlay=()=>
 {
      setShowOverlay(true)
 }

 const handleCloseOverlay=()=>
 {
     setShowOverlay(false)
 }


  return (
    <div>
      <Header  showOverlay={showOverlay} handleShowOverlay={handleShowOverlay}/>
      <Overlay onClose={handleCloseOverlay} open={showOverlay}/>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Overview
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Other
          </button>
        </div>
        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <Overview/>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            other
          </div>
        </div>
      </div>
    </div>
  );
};
