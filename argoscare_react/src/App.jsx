import { useRef, useState } from 'react';
import './App.css';
import logo from './assets/ico_logo.svg';
import Modal from './Modal'; // 모달 컴포넌트를 임포트

function App() {
  const [userID, setID] = useState("");
  const [userPW, setPW] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  const idRef = useRef();
  const pwRef = useRef();

  const onChangeID = (e) => {
    setID(e.target.value);
  }

  const onChangePW = (e) => {
    setPW(e.target.value);
  }

  const onSubmit = () => {
    if (userID === "admin" && userPW === "504") {
      // 로그인 성공 시 페이지 이동
      window.location.href = "../sub/main.html";
    } else {
      // 로그인 실패 시 모달 열기
      setIsModalOpen(true);
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className='wrap'>
      <div id="img_wrap">
        <img src={logo} alt="" />
      </div>
      <h1>로그인</h1>
      <div>
        <form action="">
          <fieldset>
            <legend>회원 로그인</legend>
            <div className='search'>
              <a className='sub00_search' href="#">사랑 주간보호센터</a>
            </div>
            <div>
              <input className='userName' value={userID} onChange={onChangeID} ref={idRef} type="text" placeholder='이름을 입력하세요' />
            </div>
            <div>
              <input className='userPw' value={userPW} onChange={onChangePW} ref={pwRef} type="password" placeholder='비밀번호를 입력하세요' />
            </div>
            <div className='checkboxx'>
              <input className='intro_checkbox' type="checkbox" checked /> 로그인 상태유지
            </div>
            <div className='btn_box'>
              <a className='btn_login' href='https://parkdahee0.github.io/team02/' onClick={onSubmit}>로그인 하기</a>
            </div>
          </fieldset>
        </form>
      </div>



      {/* 모달 컴포넌트 */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        message="입력하신 아이디 또는 비밀번호가
정확하지 않습니다.
다시 입력해주세요."
      />
    </div>
  )
}

export default App;
