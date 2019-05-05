import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export default class CrimeList extends Component {

    state = {
        loading: true,

    }
    async componentDidMount() {
        console.log("hello")
        const url = "https://data.police.uk/api/crime-categories";
        const response = await fetch(url);     {/*fetch will allow for http request*/}
        const data = await response.json(); {/* it is a async call this will return the json data   */}
        console.log("crime category ====>", data);
    }
    render() {

        return (
            <div>
                <TextField
                    id="outlined-full-width"
                    label="Search Panel"
                    style={{ margin: 8 }}
                    placeholder="Search Crime List Category"
                    //   helperText="Full width!"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <div>
                    {this.state.loading ? <div>loading....</div> : <div>person...</div>} {/*if loading is true show loading else person*/}
                </div>
            </div>
        )
    }


}