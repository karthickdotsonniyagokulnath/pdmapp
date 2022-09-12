import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { history } from './helpers/common';
import store from './store'
import { ToastContainer } from 'react-toastify';
import Panel from './layouts/Panel';

function App() {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Panel />
				<ToastContainer
					position="top-right"
					autoClose={5000}
				/>
			</Router>
		</Provider>
	);
}

export default App;
