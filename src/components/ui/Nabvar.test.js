import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { Navbar } from './Nabvar';

describe('Pruebas en el componente <Nabvar/>', () => {
  const historyMock = {
    pathname: '',
    location: {},
    replace: jest.fn(),
    listen: jest.fn(),
    createHref: jest.fn() 
  }
  const ContextValue = {
    dispatch: jest.fn(),
    user:{
      logged: true,
      name: 'Deymer'
    }
  }
  const wrapper = mount(
    <AuthContext.Provider value={ContextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );
  afterEach(()=>{
    jest.clearAllMocks();
  })
  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Deymer');  
  });

  test('Debe llamar al logout y usar el history.replace', () => {
    wrapper.find('button').prop('onClick')();
    expect(ContextValue.dispatch).toHaveBeenCalledWith({type: types.logout});
    expect(historyMock.replace).toHaveBeenCalledWith('/login');
  });
  
});
