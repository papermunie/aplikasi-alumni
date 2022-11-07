import './index.css';
import Konsultasi from './components/Konsultasi/konsultasi';
import TambahKonsultasi from './components/Konsultasi/tambahKonsultasi';
import AddTraining from './components/TambahTraining/AddTraining';
import Sidebar from './components/Sidebar/sidebar';
import Notifikasi from './components/notifikasi/notifikasi';
import DetailKonsultasi from './components/Konsultasi/detailKonsultasi';
import DetailPerusahaan from './components/DetailPerusahaan/detailPerusahaan';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <>
        <Sidebar />
        <Routes>
        <Route  exact path='/AddTraining' element={<AddTraining />} />
        <Route  exact path='/' element={<Notifikasi />} />
        <Route  exact path='/konsultasi' element={<Konsultasi />} />
        <Route  exact path='/konsultasi-tambah' element={<TambahKonsultasi />} />
        <Route  exact path='/detailKonsultasi' element={<DetailKonsultasi />} />
        <Route  exact path='/detailPerusahaan' element={<DetailPerusahaan />} />
        </Routes>
      </>
      </Router>
    </>
  );
}

export default App;
