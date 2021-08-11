import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from './DashboardRoutes';

describe('Pruebas en el componentes <DashboardRoutes/>', () => {
  
  test('Debe mostrarse correctamente y encontrar el nombre del usuario', () => {
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
       <DashboardRoutes />
     </MemoryRouter>
     </AuthContext.Provider>
    );
   expect(wrapper).toMatchSnapshot();
   expect(wrapper.find('.text-info').text().trim()).toBe('Deymer');
  });
  
});
