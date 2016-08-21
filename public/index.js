import React  from "react";
import {render} from "react-dom";

render(<Provide store={store}>
           <App />
       </Provide>,document.getElementById("container"));