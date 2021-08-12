import { mount } from 'enzyme';
import { MemoryRouter, Route, Router } from 'react-router-dom';
import { SearchScreen } from './SearchScreen';

describe('Pruebas en el componente <SearchScreen />', () => {

  test('Debe mostrarse correctamente con los valores por defecto', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/search']}>
          <Route path="/search" component={SearchScreen} />
        </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
  });

  test('Debe mostrar a Batman y el input con el valor del queryStrim', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/search?q=batman']}>
            <Route path="/search" component={SearchScreen} />
        </MemoryRouter>
    );
    expect(wrapper.find('input').prop('value')).toBe('batman');
    expect(wrapper).toMatchSnapshot();
  });
  
  test('Debe mostrar un error si no encuentra el heroe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batmanfewew']}>
          <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find('.alert-danger').text()).toBe('There is not a hero with batmanfewew');
    expect(wrapper).toMatchSnapshot();
  });
  
  test('Debe llamar el push del history', () => {
    const history = {
      push: jest.fn(),
      listen: jest.fn(),
      location:{pathname: '/search'},
    }
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Router history={history}>
          <Route path="/search" component={SearchScreen} />
        </Router>
      </MemoryRouter>
    );
    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman'
      }
    })
    wrapper.find('form').prop('onSubmit')({preventDefault(){}});
    expect(history.push).toHaveBeenCalledWith('?q=batman');
  });
});
