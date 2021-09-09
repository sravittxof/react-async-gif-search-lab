import React, {Component} from "react";


class GifSearch extends Component{

    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>   
                <input type="text" value={this.props.query} onChange={this.props.handleChange}></input>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default GifSearch