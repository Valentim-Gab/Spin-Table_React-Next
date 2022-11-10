export interface Dados {
    nome: string
    sobrenome: string
    idade: number
}

export interface Action {
    types: string
    values: string
}

export const reducer = (state: Dados, action: Action) => {
    switch(action.types) {
        case 'NOME': {
            return { ...state, nome: action.values }
        }
        case 'SOBRENOME': {
            return { ...state, sobrenome: action.values }
        }
        case 'IDADE': {
            return { ...state, idade: Number.parseInt(action.values) }
        }
        default: return state
    }
}