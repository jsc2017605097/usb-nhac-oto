import React, {Component} from 'react';

export const FormContext = React.createContext();

export class FormProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            display:false,
            menu:false
        }
        this.onClick = this.onClick.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
    }
    onClick(){
        let mw = this.state.display;
        this.setState({
            display:!mw
        })
    }
    handleMenu(){
        this.setState({
            menu:!this.state.menu
        })
    }
    render(){
        console.log(this.state.display);
        return(
            <FormContext.Provider value ={{display:this.state.display,onClick:this.onClick,menu:this.state.menu,handleMenu:this.handleMenu}}>
                {this.props.children}
            </FormContext.Provider>
        )
    }
}