import React, {Component} from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";


class GiftListContainer extends Component{

    constructor(){
        super()
        this.state = {
            query: "",
            urlOne: 'https://api.giphy.com/v1/gifs/search?q=',
            urlTwo: '&api_key=dc6zaTOxFJmzC&rating=g',
            gifs: []
        }
    }   

    // componentDidMount(){
    //     let query = this.state.query
    //     let url = this.state.urlOne + query + this.state.urlTwo
    //     fetch(url)
    //     .then(r => r.json())
    //     .then(data => console.log(data))
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.state.urlOne + this.state.query + this.state.urlTwo)
            .then(r => r.json())
            .then(data => this.setState({
                gifs: data.data.slice(0,3)
                }, ()=> console.log(data.data))
            )
    }
    
    handleChange = (event) => {
        this.setState({
            query: event.target.value},
        )
    }

    render(){
        return(
            <div>
                <GifSearch handleSubmit={this.handleSubmit} query={this.state.query} handleChange={this.handleChange}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}

export default GiftListContainer