import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './components/App/App'

// const App = (props) => {
//   return (
//     <div>
//       <h1>
//         ¡{props.greet}, {props.name}!
//       </h1>
//     </div>
//   );
// };

// const withHCO = (Component) => {
//   return function WrappedComponent(saludo) {
//     return function realComponent(props) {
//       return (
//         <React.Fragment>
//           <Component {...props} greet={saludo}/>
//           <h2>Buennass</h2>
//         </React.Fragment>
//       );
//     };
//   };
// };

// const AppWithHCO = withHCO(App)("Holis");

ReactDOM.render(
  // <AppWithHCO name="Jason" />,
  <App/>,
  document.getElementById("root")
);
