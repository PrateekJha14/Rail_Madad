import {Routes,Route} from 'react-router-dom'
import App from '../../App'
import Status from './status';

function Routing(){
    return(
        <Routes>
            <Route path ="/" element={<App/>}></Route>
            <Route path ="/status" element={<Status/>}></Route>
        </Routes>
    )
}

export default Routing;