import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Page/Login/Login';
import Homepage from './Page/Homepage/Homepage';

const routerFutureFlags = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};

export default function App() {
  return (
    <BrowserRouter future={routerFutureFlags}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}
