import { types } from '../types/types';
import {authReducer} from './authReducer';

describe('Pruebas en el authReducer', () => {
  
  test('Debe de retornar el estado por defecto', () => {
    const returnState = authReducer({logged: false},{});
    expect(returnState).toEqual({logged: false});
  });

  test('Debe atenticar y colocar el name del usuario', () => {
    const actionLogin = {
      type: types.login,
      payload: {
        name: 'Deymer'
      }
    };
    const returnState = authReducer({logged: false}, actionLogin);
    expect(returnState).toEqual({logged: true, name: 'Deymer'});
  });
  
  test('Debe borrar el name del usuario y logged en false', () => {
    const actionLogout = {
      type: types.logout
    };
    const returnState = authReducer({logged:true, name:'Deymer'},actionLogout);
    expect(returnState).toEqual({logged: false});
  });

});
