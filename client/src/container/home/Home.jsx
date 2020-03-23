import  React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';   
import Beranda from './../beranda/Beranda';
import MenuUtama from './../menuUtama/menuUtama';
import Profile from './../profile/profile';


class Home extends Component {
    render() {
        return(
        <BrowserRouter>
            <Route exact path="/" component={Beranda}/>
            <Route path="/menuUtama" component={MenuUtama}/>
            <Route path="/Profile" component={Profile}/>
            {/* <Beranda /> */}
            
            {/* <MenuUtama /> */}
        </BrowserRouter>

            
        )
    }

}
export default Home;