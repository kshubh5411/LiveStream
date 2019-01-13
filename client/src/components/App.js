import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './header';
//create history object of our own
import history from '../history';
class App extends React.Component{
    render()
    {
        return(
             <div>
                <Router history={history}>
                 <div>
                  <Header/>
                  <Switch>
                    <Route path='/' exact component={StreamList} />
                    <Route path='/stream/new' exact component={StreamCreate} />
                    <Route path='/stream/:id' exact component={StreamShow}  />
                    <Route path='/stream/edit/:id' exact component={StreamEdit}/>
                    <Route path='/stream/delete/:id' exact component={StreamDelete} />
                  </Switch>
                 </div>
                </Router>
             </div>
        );
    }
};

export default App;