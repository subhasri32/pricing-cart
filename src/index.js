import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
// import App from "./App";
ReactDOM.render(
    <>
    <App 
 a={"Free"}
 b={["$0","/month"]}
 c={["fas fa-check","Single User"]}
 d ={["fas fa-check","5GB Storage"]}
 e={["fas fa-check","Unlimited Public Projects"]}
 f={["fas fa-check","Community Access"]}
 g ={["fas fa-times","Unlimited Private Projects"]}
 h ={["fas fa-times","Dedicated Phone Support"]}
 i ={["fas fa-times","Free Subdomain"]}
 j ={["fas fa-times","Monthly Status Reports"]}
/>

<App 
 a={"Plus"}
 b={["$9","/month"]}
 c={["fas fa-check",<b>5 Users</b>]}
 d ={["fas fa-check","50GB Storage"]}
 e={["fas fa-check","Unlimited Public Projects"]}
 f={["fas fa-check","Community Access"]}
 g ={["fas fa-check","Unlimited Private Projects"]}
 h ={["fas fa-check","Dedicated Phone Support"]}
 i ={["fas fa-check","Free Subdomain"]}
 j ={["fas fa-times","Monthly Status Reports"]}
/>

<App 
 a={"PRO"}
 b={["$49","/month"]}
 c={["fas fa-check",<><b>Unlimited</b> Users</>]}
 d ={["fas fa-check","50GB Storage"]}
 e={["fas fa-check","Unlimited Public Projects"]}
 f={["fas fa-check","Community Access"]}
 g ={["fas fa-check","Unlimited Private Projects"]}
 h ={["fas fa-check","Dedicated Phone Support"]}
 i ={["fas fa-check",<><b>Unlimited</b> Free Subdomain</>]}
 j ={["fas fa-check","Monthly Status Reports"]}
/>
</>,
 document.getElementById('root')
);