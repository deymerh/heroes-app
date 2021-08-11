import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from './AppRouter';

describe('Pruebas en el componente <AppRouter/>', () => {
  test('Debe renderizar el login si NO estoy autenticado',() => {
    const ContextValue = {
      dispatch: jest.fn(),
      user:{
        logged: false
      }
    }
    const wrapper = mount(
      <AuthContext.Provider value={ContextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('button').text()).toBe('Login');
  });
  test('Debe mostrar el navbar', () => {
    const ContextValue = {
      dispatch: jest.fn(),
      user:{
        logged: true,
        name: 'Deymer'
      }
    }
    const wrapper = mount(
      <AuthContext.Provider value={ContextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper.find('.navbar').exists()).toBe(true);
  })
  
});
