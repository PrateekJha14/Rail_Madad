import {Routes,Route} from 'react-router-dom'
import App from '../../App'
import Status from './status';
import Dashboard from '../../AdminPanel/Components/jsx/Dashboard';
import Complaint from '../../AdminPanel/Components/jsx/complaint';

function Routing(){
    return(
        <Routes>
            <Route path ="/" element={<App/>}></Route>
            <Route path ="/status" element={<Status/>}></Route>
            <Route path ="/admin" element={<Dashboard/>}></Route>
            <Route path ="/complaint" element={<Complaint/>}></Route>
        </Routes>
    )
}

export default Routing;