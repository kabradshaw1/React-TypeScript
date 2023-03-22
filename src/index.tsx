import ReactDOM from 'react-dom';

import EventComponent from './events/EventComponent';
import UserSearch from './ref/UserSearch';

const App = () => {
  return (
    <div>
      <EventComponent />
      <UserSearch/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
