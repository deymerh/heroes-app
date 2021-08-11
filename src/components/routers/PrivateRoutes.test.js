import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoutes } from './PrivateRoutes';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en el <PrivateRoutes />', () => {
  
  const props = {
    location: {
      pathname: '/marvel'
    }
  }
  //Esto es para mockear el localstorage
  Storage.prototype.setItem = jest.fn();

  test('Debe mostrar el componente si esta autenticado', () => {
    //mount renderiza comonentes hijos - usado para componentes de orden superior
    //shalow solo renderiza el componente padre - NO usado para componentes de orden superior
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoutes
          isAuthenticated={true}
          component={()=><span>Hola!</span>}
          {...props}
        />
      </MemoryRouter>
      );
    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastpath', props.location.pathname);
  });

  test('Debe bloquear el componente si NO esta autenticado', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoutes
          isAuthenticated={false}
          component={()=><span>Hola!</span>}
          {...props}
        />
      </MemoryRouter>
      );
    expect(wrapper.find('span').exists()).toBe(false);
  });
  
});
