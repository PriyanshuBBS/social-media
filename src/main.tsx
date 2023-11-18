import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

ReactDOM.createRoot(document.getElementById('root')!).render(
    // Browser Router is going to control the routing for our app
    <BrowserRouter>
        <App />
    </BrowserRouter>
)