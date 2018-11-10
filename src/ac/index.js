import * as con from '../constants';

export function changeLanguage(langFunction) {
  return dispatch => {
    dispatch({
      type: con.CHANGE_LANGUAGE,
      payload: {
        language: langFunction
      }
    });
  }
}