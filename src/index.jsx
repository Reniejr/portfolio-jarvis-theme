import React from 'react';
import ReactDOM from 'react-dom/client';
import "./translations/i18n";
import './styles/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

//*IMPORTS REDUX
import { Provider } from "react-redux";
import { store, persistor } from "./storage";
import { PersistGate } from 'redux-persist/integration/react';
// import { getFirebaseAuth } from 'utils/auth';
// import { mainReducer } from 'storage/reducers/main';

// const saved_credentials = JSON.parse(localStorage.getItem("user_authentication"))

// if(saved_credentials){
//   ( async () => {
//     const { auth } = await getFirebaseAuth(saved_credentials)
//     if(auth) {
//       store.dispatch(mainReducer.actions.setIsAuth(true))
//       if(window.location.pathname === "/") window.location.assign("/main-page")
//     }
//     else store.dispatch(mainReducer.actions.setIsAuth(false))
//   })()
// } else store.dispatch(mainReducer.actions.setIsAuth(false))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <PersistGate loading={ null } persistor={ persistor }>
        <App />
      </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
