import axios from "axios"
import { UserAction, UserActionTypes } from "../../types/user"
import { Dispatch } from "redux"

export const fetchUsers = (): any => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.FETCH_USERS })
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: res.data }))
      .catch(() => dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке пользователей' }))
  }
}