import React ,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CardTitle, Card,  CardText } from 'reactstrap';
import  LoginComponent from './components/login-component/log-container';
import  UserInfoComponent  from './components/userInfoComponent/UserInfoContainer';
import { Provider } from 'react-redux';
import { store } from './Store';
import  ViewAllUsersComponent from './components/viewAllUsersComponent/viewAllUsersContainer';
import MainComponent from './components/main-component/main-Container';
import  findUserByIdComponent  from './components/findUserById-Component/findUserById-Container';
import  updateUserComponent  from './components/updateUser-Component/updateUser-Container';
import  findReimByStatusComponent  from './components/reimbursement/findReimByStatus-Component/findReimByStatus-Container';
import  UpdateReimComponent  from './components/reimbursement/updateReim-Componant/updateReim-Container';
import  findReimByUserIdComponent  from './components/reimbursement/findReimById-Componant/findReimById-Container';
import  SubmiteReimComponent from './components/reimbursement/submiteReim-Component/submiteReim-Container';



function App() {
 // const [currentUser, updateUser]= useState(new User (0,'','','','','',0,''))

  
  return (
    <div className="App">
     <Provider store={store}>
       
      <Router> 

      <Switch>
       <Card >
       <CardTitle>Welcome To Reimbursement System</CardTitle>
       
       <Card className="userinfo" >

         <Route path='/main' component={MainComponent}/>
       </Card>
       <Route path='/main/reim-new' component={SubmiteReimComponent} />
       <Route path='/main/reim-update' component={UpdateReimComponent}/>
       <Route path='/main/reim-status' component={findReimByStatusComponent}/>
       <Route path='/main/reim-userId' component={findReimByUserIdComponent}/>
       <Route path='/main/user-update' component={updateUserComponent}/>
       <Route path='/main/find-user' component={findUserByIdComponent}/>
          <Route path='/main/users' component={ViewAllUsersComponent}/>
          <Route path='/main/curent-user' component={UserInfoComponent}/>
          <Route path='/' component={LoginComponent}/>
       </Card>

      
      </Switch>
      </Router>   
      </Provider>
    </div>
  );
}

export default App;
