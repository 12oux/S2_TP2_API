import React from 'react';
import axios from 'axios';
import './App.css';


export default class Chien extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            data:null,
            isLoading: false,
            erreur: null
        };
    }

    componentDidMount(){
        this.setState({isLoading:true});
        axios.get('https://dog.ceo/api/breeds/image/random').then((rep)=>{
            console.log(rep);
            this.setState({data:rep.data.message, isLoading:false});
        }).then((err) => {
            if(err) {
                console.log(err);
                this.setState({isLoading:false, erreur: err.message});
            }
        });
    }

    render() {
        if (this.state.data) {
            const chien = this.state.data;

            return(
                <div>
                    <p className="erreur">{this.state.erreur}</p>
                    <div>
                        <img className="images" src={chien} alt="chien"/>
                    </div>
                </div>
            )
        }
        if(this.state.isLoading) {
            return(<div>En Chargement...</div>);
        }
        else {
            return (<div>{this.state.erreur}</div>);
        }
    }
}