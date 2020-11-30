import './App.css';
// import zh_CN from 'antd/lib/locale-provider/zh_CN';
// import { LocaleProvider, message } from 'antd';
import RouteMap from './router'
function App() {
  return (
    // <LocaleProvider locale={zh_CN}>
      <div className="App">
        {/* test1 */}
        <RouteMap />
      </div>
    // </LocaleProvider>
  );
}

export default App;
