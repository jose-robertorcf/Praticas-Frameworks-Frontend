import React from 'react';

export class Ola extends React.Component{
    render(){
        return(
            <div>
                Olá {this.props.nomecompleto}, como está {this.props.nomemae}?
            </div>
        );
    };
}