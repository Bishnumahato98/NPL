import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Login = React.lazy(() => import("./components/Login"));
const Signup = React.lazy(() => import("./components/Signup"));
const ForgotPassword = React.lazy(() => import("./components/Forgotpassword"));
const Home = React.lazy(() => import("./components/Home"));
const Match = React.lazy(() => import("./components/Match"));
const News = React.lazy(() => import("./components/News"));
const Squads = React.lazy(() => import("./components/Squads"));
const Table = React.lazy(() => import("./components/Table"));
const Venue = React.lazy(() => import("./components/Venue"));
const Status = React.lazy(() => import("./components/Status"));
const Zone = React.lazy(() => import("./components/Zone"));
const Buyticket = React.lazy(() => import("./components/Buyticket"));
const Biratnagar = React.lazy(() => import("./components/Biratnagar"));
const Janakpur = React.lazy(() => import("./components/Janakpur"));
const Kathmandu = React.lazy(() => import("./components/Kathmandu"));
const Pokhara = React.lazy(() => import("./components/Pokhara"));
const Lumbini = React.lazy(() => import("./components/Lumbini"));
const Chitwan = React.lazy(() => import("./components/Chitwan"));
const Karnali = React.lazy(() => import("./components/Karnali"));
const Suderpaschim = React.lazy(() => import("./components/Suderpaschim"));






const Loader = () => {
  return(
    <div>Please wait........</div>
  )
};

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/match' element={<Match/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/squads' element={<Squads/>} />
          <Route path='/table' element={<Table/>} />
          <Route path='/venue' element={<Venue/>} />
          <Route path='/status' element={<Status/>} />
          <Route path='/zone' element={<Zone/>} />
          <Route path='/buyticket' element={<Buyticket/>} />
          <Route path='/biratnagar' element={<Biratnagar/>} />
          <Route path='/janakpur' element={<Janakpur/>} />
          <Route path='/kathmandu' element={<Kathmandu/>} />
          <Route path='/pokhara' element={<Pokhara/>} />
          <Route path='/lumbini' element={<Lumbini/>} />
          <Route path='/chitwan' element={<Chitwan/>} />
          <Route path='/karnali' element={<Karnali/>} />
          <Route path='/suderpaschim' element={<Suderpaschim/>} />




        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
