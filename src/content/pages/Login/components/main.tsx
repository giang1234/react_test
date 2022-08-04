import { useRef, useState } from 'react';
import MainContent from './mainContent';
interface finishData {
    username: string,
    password: string,
    remember: boolean
}
const Main = ({
  login
}: any) => {
  const [remember, setRemember] = useState<boolean>();
  const ref = useRef();
  const onFinish = (values: finishData) => {
    values['remember'] = remember;
    login({...values, });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <MainContent 
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        setRemember={setRemember}
      />
    </>
  )
};

export default Main;