import { types } from "../../../src/auth/types/types"

describe('test types.js', () => {
    test('should return types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
    })
})