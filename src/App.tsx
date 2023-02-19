import './App.css';
import { Type, useModal } from './contexts/ModalProvider';

function App() {
  const modal = useModal();
  
  const onClickSuccess = () => {
    modal.toast({
      type: Type.SUCCESS,
      message: '성공 메시지입니다.'
    })
  }
  
  const onClickError = () => {
    modal.toast({
      type: Type.ERROR,
      message: '에러 메시지입니다.'
    })
  }
  return (
    <div className="App">
      <h1>버튼 클릭시 토스트 메시지가 발생합니다.</h1>

      <div>
        <button style={{marginRight: 10}} onClick={onClickSuccess}>Success</button>
        <button style={{marginRight: 10}} onClick={onClickError}>Error</button>
      </div>
    </div>
  );
}

export default App;
