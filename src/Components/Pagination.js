import React from 'react'

const Pagination = ({page,totalPages,handleChange}) => {
  return (
    <footer>
      <div>
      <div>
                <div>
                    { page > 1 && 
                        <button
                         onClick={ () => handleChange(page - 1)}>
                            Previous
                        </button>
                    }
                    { page < totalPages &&
                        <button
                         onClick={() => handleChange(page + 1)}>
                            Next
                        </button>
                    }
                </div>
                <p>
                    Page {page} of {totalPages}
                </p>
            </div>
      </div>
    </footer>
  )
}

export default Pagination
