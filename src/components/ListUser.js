import React, {Component} from 'react';

class List_User extends Component {
    
    render(user) {
        console.log(user)
        return  (
        <div>
            <p>Imagem: </p>
            <p>Usuário: </p>
            <p>Organização: </p>
            <p>Seguidores: </p>
            <p>Lozalização: </p>
            <p>Quantidade de Votos: </p>
        </div>    
    );
    }
}    

export default List_User;

