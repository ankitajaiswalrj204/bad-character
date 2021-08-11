import React, { useState } from 'react'
import Charac from './Charac';
import './Character.css'
import ReactPaginate from 'react-paginate';
function Character({ data }) {
    const [pageNumber, setPageNumber] = useState(0);

    const userPerPage = 10;
    const pageVisited = pageNumber * userPerPage
    const pageCount = Math.ceil(data.length / userPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    };

    // const displayUsers = data.slice(pageVisited, pageVisited + userPerPage)
    // .map(item => {
    //     console.log(item);
    //          return (
               
    //             <div className="items">
    //                     <Charac key={item.char_id} item={item} />
                        
    //             </div>
               
    //         )
    //     }

    //     );

    //   return(
    //           // <h4>i am character</h4>
    //           <div className="items">
    //         {data.map((item)=>{
    //             return <Charac key={item.char_id} item={item} />
    //             // console.log(item);
                
    //          })}
    //          </div>
    //   )

    return( <div> {data.slice(pageVisited, pageVisited + userPerPage)
        .map(item => {
            console.log(item);
                 return (
                   
                    <div className="items">
                            <Charac key={item.char_id} item={item} />
                            
                    </div>
                   
                )
            }
    
            )
    }
    
        <ReactPaginate
            PreviousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtn"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            activeClassName={"paginationActive"}
        />
    </div>
    )
}

export default Character
