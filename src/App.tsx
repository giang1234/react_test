import { useRoutes } from 'react-router-dom';
import routes from 'src/router/router';
import 'antd/dist/antd.css'
const App = (props) => {
  const content = useRoutes(routes);
  return <>
      {content}
  </>
}

export default App;
