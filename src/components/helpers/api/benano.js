import React, { Component } from 'react';
import {Post} from "react-axios";
import {Loader} from "semantic-ui-react";

export class Benano extends Component {
    render() {
        console.log(this.props.data);
        return (
            <div>
                <Post url="http://awesome-feedback-be.azurewebsites.net/api/form" data={this.props.data} headers={{'Access-Control-Allow-Origin': '*'}}>
                    {(error, response, isLoading, onReload) => {
                        if(error) {
                            return (<div>Something bad happened: {error.message} <button onClick={() => onReload({ params: { reload: true } })}>Retry</button></div>)
                        }
                        else if(isLoading) {
                            return (<Loader inverted content='Loading'/>)
                        }
                        else if(response !== null) {
                            return (<div>{response.data.message} <button onClick={() => onReload({ params: { refresh: true } })}>Refresh</button></div>)
                        }
                        return (<div>Default message before request is made.</div>)
                    }}
                </Post>
            </div>
        )

    }
}