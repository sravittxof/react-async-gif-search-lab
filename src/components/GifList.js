import React, {Component} from "react";

class GifList extends Component{

    render(){
        return(
            <ul>
                {this.props.gifs.map((gif, idx) => <li key={idx}><img src={gif.images.original.url} alt={gif.title}></img></li>)}
            </ul>
        )
    }
}

export default GifList