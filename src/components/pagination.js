import React from 'react';


const Pagination=(props)=>{
    const pagelist=[];

    for(let i=1; i<=props.pages+1;i++){
        let active = props.currentpage ===i ? 'active' : '';

    pagelist.push(<li className={`waves ${active}`} key={i} onClick={()=>props.nextpage(i)}><a href='#'>{i}</a></li>)
    }
return(
    <div className='container'>
        <div className="row">
            <ul className="pagination">
                {pagelist}
            </ul>
        </div>

    </div>
)

}

export default Pagination;
