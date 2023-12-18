import { useReducer } from "react"
import { authReducer } from "../src/auth/context/authReducer"
import { types } from "../src/auth/types/types"

describe('test authReducer', () => {
    test('should first return default state', () => {
        const defaultState = {
            logged: false
        }
        const state = authReducer(defaultState, {})
        expect(state).toEqual(defaultState)
    })
    test('should call login', () => {
        const user = {
            id: "123",
            name: 'Alex',
        }
        const action = {
            type: types.login,
            payload: user
        }
        const state = authReducer({ logged: false }, action)
        expect(state).toEqual({
            logged: true,
            user
        })
    })
    test('should call logout', () => {
        const initialState = {
            logged: true,
            user: {
                id: "123",
                name: 'Alex',
            }
        }
        const action = {
            type: types.logout,
        }
        const state = authReducer(initialState, action)
        expect(state).toEqual({ logged: false }) // should be equal to defaultState
        expect(state).not.toEqual(initialState) // should be different from initialState
    })
})