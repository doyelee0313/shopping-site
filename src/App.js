import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';

//1. 전체 상품 페이지, 로그인 페이지, 상품 상세 페이지
//1-1. nav bar 만들기
//2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다
//3. 로그인 버튼을 누르면 로그인 페이지로 갈 수 있다
//4. 디테일을 눌렀는데 로그인이 안되어있으면 안보임  -> 로그인 페이지로 감
//5. 로그인이 되어있을 경우는 상품페이지 볼 수 있다
//6. 로그아웃 누르면 로그아웃되고 디테일 확인할 수 없음, 다시 로그인 페이지로
//7. 로그인하면 로그아웃, 로그아웃하면 로그인 볼 수 있음
//8. 상품 검색 가능
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<ProductAll/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/product/:id" element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
