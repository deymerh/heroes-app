import { mount } from 'enzyme';
import { MemoryRouter, Route, Router } from 'react-router-dom';
import { HeroScreen } from './HeroScreen';

describe('Pruebas en el componente <HeroScreen />', () => {
  
  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn()
  }
  test('Debe retornar el componente `Redirec` si no hay argumentos en el URL', () => {
    const wrapper = mount(
      <MemoryRouter  initialEntries={['/hero']}>
        <HeroScreen history={historyMock} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Redirect').exists()).toBeTruthy();
  });
  
  test('Debe mostrar si el parametro existe y se encuentra', () => {
    const wrapper = mount(
      <MemoryRouter  initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroesId" component={HeroScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find('.row').exists()).toBe(true);
  });
  
  test('Debe regresar a la pantalla anterior con el PUSH', () => {
    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
      listen: jest.fn(),
      location:{pathname:'/hero/marvel-spider'},
    }
    const wrapper = mount(
      <MemoryRouter>
        <Router history={history}>
          <Route 
            path="/hero/:heroesId"
            component={HeroScreen}
            />
        </Router>
      </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenCalled()
    expect(history.goBack).not.toHaveBeenCalled()
  });
  
  test('Debe regresar a la pantalla anterior GOBACK', () => {
      const history = {
        length: 3,
        push: jest.fn(),
        goBack: jest.fn(),
        listen: jest.fn(),
        location:{pathname:'/hero/marvel-spider'},
      }
      const wrapper = mount(
        <MemoryRouter>
          <Router history={history}>
            <Route 
              path="/hero/:heroesId"
              component={HeroScreen}
              />
          </Router>
        </MemoryRouter>
      );
      wrapper.find('button').prop('onClick')();
      expect(history.goBack).toHaveBeenCalled()
      expect(history.push).not.toHaveBeenCalled()
  });
  
});     
