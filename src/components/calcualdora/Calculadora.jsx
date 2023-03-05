import { Component } from "react";

class Calculadora extends Component {
    constructor(props){
        super(props)
        this.state = {
            numero1: 0,
            numero2: 0
        }

        this.setNumber1 = this.setNumber1.bind(this)
    }

    setNumber1(e){
        this.setState({
            ...this.state,
            numero1: e.target.value
        })
    }

    render(){
        return(
            <>
                <h2>{this.props.nombre}</h2>
                <form>
                    <input 
                    type="number" 
                    name="number1" 
                    value={this.state.numero1} 
                    onChange={this.setNumber1}
                    />

                    <input 
                    type="number" 
                    name="number2" 
                    value={this.state.numero2}
                    onChange={e => {
                        this.setState({
                            ...this.state,
                            numero2: e.target.value
                        })
                    }}
                    />

                    <input type="submit" value="Sumar" name="sumar" />
                </form>
                <span>Resultado: {Number(this.state.numero1) + Number(this.state.numero2)}</span>
            </>
        )
    }

    componentDidMount(){

    }

    componentWillUnmount(){
        
    }

}

export default Calculadora;