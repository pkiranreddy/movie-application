import React from 'react';

const SearchArea=(props)=>{
    return(
    <div className="container">
        <div className="row">
            <section className="col s5 offset-5">
                <form action='' onSubmit={props.handlesubmit} >
                    <div className="input-field">
                        <input type="text" placeholder="search" onChange={props.handlechange}/>
                    </div>
                </form>
            </section>
        </div>
    </div>
    ) 
}

export default SearchArea;