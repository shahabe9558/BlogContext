import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination =  () => {
    const {page, totalPage, handlerPageChange} = useContext(AppContext);
    return (
        <div className="border border-yellow-500">
            <div>
                { page > 1 && (
                    <button onClick={() => handlerPageChange(page - 1)}>
                        Previous
                    </button>   
                )}
                { page < totalPage && (
                    <button onClick={() => handlerPageChange(page + 1)}>
                        Next 
                    </button>   
                )}
                <p>
                    Page {page} of {totalPage}
                </p>
            </div>
        </div>
    )
}
export default Pagination;