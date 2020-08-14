import React, { Component } from 'react';

class Formulaire extends Component {
state = {
    message:'',
    nbCaracteres: this.props.nbCaracteres
}

    createMessage = () => {
        const { addMessage, pseudo, nbCaracteres } = this.props
        // création de l'objet message pour stocker le message
        const message = {
            pseudo,
            message: this.state.message
        }
        //on stock le message dans addMessages qui lui le stock dans App.js
        addMessage(message)

        //reset pour vider le champs après validation
        this.setState({ message :' ', nbCaracteres})
    }


    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }

    handleChange = event => {
        const message = event.target.value
        const nbCaracteres = this.props.nbCaracteres - message.length
        this.setState({ message, nbCaracteres })
    }

    handleKeyUp = event => {
        if (event.key === 'Enter'){
            this.createMessage()
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <textarea 
                value={this.state.message} 
                onChange={this.handleChange} 
                required 
                maxLength={ this.state.nbCaracteres }
                onKeyUp={this.handleKeyUp}
                />
        <div className="info">{ this.state.nbCaracteres }</div>
                <button type="submit">Envoyer</button>
            </form>
        );
    }
}

export default Formulaire;