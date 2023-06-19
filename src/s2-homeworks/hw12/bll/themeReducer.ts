const initState = {
    themeId: 1,
}
export type changeThemeIdType = {
    type:'SET_THEME_ID',
    id:number

} 
export type StateType = {
    themeId:number
}
export type ActionType = changeThemeIdType
export const themeReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':{
            return {...state,themeId:action.id}
        }
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number):changeThemeIdType => ({ type: 'SET_THEME_ID', id } as const) // fix any
