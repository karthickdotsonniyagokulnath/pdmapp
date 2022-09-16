import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()

export default function logOut(){
    localStorage.removeItem('token');
}