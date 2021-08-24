import React, { Component } from 'react';
import './style.css';

const Tablehead = () => {
    return(
        <thead className="thead">
            <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Profissão</th>
                <th>Deletar</th>
            </tr>
        </thead>
    )
}

const Tablebody = (props) =>{
    const rows = props.charactersData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.nome}</td>
                <td>{row.idade}</td>
                <td>{row.profissao}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Apagar</button>
                </td>
            </tr>            
        )
    })
    return <tbody className="tbody">{rows}</tbody>
}

const Table = (props) => {
    
        const { charactersData, removeCharacter } = props
        return(
            <div className="table">
                <table>
                    <Tablehead />
                    <Tablebody charactersData={charactersData} removeCharacter={removeCharacter}/>
                </table>
            </div>
        )
}

export default Table;