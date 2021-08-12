import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { LoginScreen } from './LoginScreen';

describe('Pruebas en el <LoginScree />', () => {
  const ProviderMock = {
    dispatch: jest.fn(),
    user:{
      name: 'Deymer'
    }
  }
  const historyMock = {
    pathname: '',
    location: {},
    replace: jest.fn(),
    listen: jest.fn(),
    createHref: jest.fn() 
  }
  const wrapper = mount(
    <AuthContext.Provider value={ProviderMock}>
      <MemoryRouter>
        <Router history={historyMock}>
          <LoginScreen />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('Debe mostarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe realiazr el dispatch y la navegacion', () => {  
    const handleLogin = wrapper.find('button').prop('onClick');
    handleLogin();
    expect(ProviderMock.dispatch).toHaveBeenCalledWith({type: types.login, payload:{name:'Deymer'}});
    expect(historyMock.replace).toHaveBeenCalledWith('/');
    localStorage.setItem('lastpath', '/dc');
    handleLogin();
    expect(historyMock.replace).toHaveBeenCalledWith('/dc');
  });
  
});
