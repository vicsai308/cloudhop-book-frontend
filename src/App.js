import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';




function App() {
  return (
    <>
      {/* NoteState wraps all components where the state in context API is availiable for all the components */}
      <NoteState>
        <Router>
          <Navbar />
          <Alert variantType="success" alertHeading="Alert Heading:" alertMessage="alert message" />
          <div className='container'>
            <Routes>
              {/* since componentdidmount wont re-render since the render component is exactly same, we provide unique "key" prop to make each 
          component re-render is unique in this way the componentdidmount will understand the developer is trying to render same component uniquely 
          along with updated props. This method is called component force remount */}
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
