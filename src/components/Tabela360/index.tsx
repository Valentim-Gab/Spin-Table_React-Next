import { veados } from '@prisma/client'
import { useEffect, useReducer, useRef, useState } from "react"
import { Btn360s, DivContainer, PopupS, Table360s } from './style'
import { Dados, reducer} from './hooks'

const Table360: React.FC<{posts: veados[]}> = ({posts}) => {
    const [aberto, setAberto] = useState(false)
    const [moverT, setMoverT] = useState(true)
    const [dados, dispatch] = useReducer(reducer, {} as Dados)
    const click = () => {
        setAberto(atual => !atual)
    }

    const fechar = () => {
        setAberto(atual => !atual)
    }
    
    const cadastrar = () => {
        setAberto(atual => !atual)
        fetch(`/api/veados`, {method: 'POST', body: JSON.stringify(dados), headers: { 'Content-Type': 'application/json'} })
        location.reload()
    }
    
    const mover = () => {
        setMoverT(atual => !atual)
    }

    return (
        <DivContainer>
            <div onClick={mover}>
                <Table360s className={moverT ? '' : 'parado'}>
                    <thead>
                        <tr>
                            <th>NOME</th>
                            <th>SOBRENOME</th>
                            <th>IDADE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(
                            (post, i) => (
                                <tr key={i}>
                                    <td>{post.nome}</td>
                                    <td>{post.sobrenome}</td>
                                    <td>{post.idade}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </Table360s>  
            </div>

            <Btn360s onClick={click}>INSERIR</Btn360s>

            <PopupS aberto={aberto}>
                <span onClick={fechar}>&times;</span>
                <div>
                    <p>NOME</p>
                    <input type="text" onChange={e => dispatch({ types: 'NOME', values: e.target.value})} /> 
                </div>
                <div>
                    <p>SOBRENOME</p> 
                    <input type="text" onChange={e => dispatch({ types: 'SOBRENOME', values: e.target.value})} />
                </div>
                <div>
                    <p>IDADE</p>
                    <input type="number" onChange={e => dispatch({ types: 'IDADE', values: e.target.value})} />
                </div>
                <Btn360s type="submit" onClick={cadastrar}>CONFIRMAR</Btn360s>
            </PopupS>
        </DivContainer>  
    )  
}

export default Table360