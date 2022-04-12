import React from 'react';
import axios from 'axios';


export default class Activite extends React.Component {
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
        axios.get('https://www.boredapi.com/api/activity').then((rep)=>{
            console.log(rep);
            this.setState({data:rep.data.activity, isLoading:false});
        }).then((err) => {
            if(err) {
                console.log(err);
                this.setState({isLoading:false, erreur: err.message});
            }
        });
    }
    

    render() {
        if (this.state.data) {
            const activite = this.state.data;

            return(
                <div>
                    <p className="erreur">{this.state.erreur}</p>
                    <div className="activite">
                        <p>{activite}</p>

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