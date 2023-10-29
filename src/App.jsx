import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recode3 from './Recode3.jsx';
import Home from './Home';
import DeleteById from './DeleteById';
import UpdateById from './UpdateById'; // Fixed typo
import StudentRegistration from './StudentRegistration';

import RecodeById from './RecodeById';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewRecode" element={<Recode3 />} />
        <Route path="/Delete" element={<DeleteById />} />
        <Route path="/Update" element={<UpdateById />} />
        <Route path="/StudentRegistration" element={<StudentRegistration />} />
        <Route path="/Recode" element={<RecodeById />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
