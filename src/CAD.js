import React from 'react';
import axios from 'axios';


export default class CAD extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            data:null,
            isLoading: false,
            erreur: null
        };
    }

    async componentDidMount(){
        this.setState({isLoading:true});
        axios.get('https://api.coingecko.com/api/v3/exchange_rates').then((rep)=>{
            console.log(rep);
            this.setState({data:rep.data.rates.cad.value, isLoading:false});
        }).then((err) => {
            if(err) {
                console.log(err);
                this.setState({isLoading:false, erreur: err.message});
            }
        });
        setInterval(async()=> {
            this.setState({isLoading:true});
            axios.get('https://api.coingecko.com/api/v3/exchange_rates').then((rep)=>{
                console.log(rep);
                this.setState({data:rep.data.rates.cad.value, isLoading:false});
            }).then((err) => {
                if(err) {
                    console.log(err);
                    this.setState({isLoading:false, erreur: err.message});
                }
            });
        }, 30000);
        }
    

    render() {
        if (this.state.data) {
            const canadien = this.state.data;

            return(
                <div>
                    <p className="erreur">{this.state.erreur}</p>
                    <div className="canadien">
                        <h2>{canadien}</h2>
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
    };
}