import React from 'react'
import styled from 'styled-components'

const LandlordPropertiesPagination = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
  handlePageChange,
}) => {
  const goToPage = (pageNumber) => {
    handlePageChange(pageNumber)
  }

  // Calculate the starting and ending page numbers to display
  let startPage = Math.max(1, currentPage - 2)
  let endPage = Math.min(totalPages, startPage + 4)

  // If we are near the start, adjust the endPage
  if (currentPage <= 3) {
    endPage = Math.min(5, totalPages)
  }

  // If we are near the end, adjust the startPage
  if (currentPage >= totalPages - 2) {
    startPage = Math.max(1, totalPages - 4)
  }
  return (
    <Pagination>
      <section>
        <div className='pagination'>
          <button
            className='pag-text'
            disabled={currentPage <= 1}
            onClick={handlePrevPage}
          >
            Previous Page
          </button>
          <div className='page-numbers'>
            {/* Display first page */}
            {startPage > 1 && (
              <button className='pag-text' onClick={() => goToPage(1)}>
                1
              </button>
            )}
            {/* Display ellipsis if needed */}
            {startPage > 2 && <span>...</span>}
            {/* Display page numbers */}
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
              <button
                key={startPage + index}
                className={
                  currentPage === startPage + index
                    ? 'active pag-text'
                    : 'pag-text'
                }
                onClick={() => goToPage(startPage + index)}
              >
                {startPage + index}
              </button>
            ))}
            {/* Display ellipsis if needed */}
            {endPage < totalPages - 1 && <span>...</span>}
            {/* Display last page */}
            {endPage < totalPages && (
              <button className='pag-text' onClick={() => goToPage(totalPages)}>
                {totalPages}
              </button>
            )}
          </div>
          <button
            className='pag-text'
            disabled={currentPage >= totalPages}
            onClick={handleNextPage}
          >
            Next Page
          </button>
        </div>
      </section>
    </Pagination>
  )
}

const Pagination = styled.section`
  .pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
  }

  .pag-text {
    background-color: #ffe48e;
    color: #000;
    border: none;
    padding: 10px 15px;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;
  }

  .pag-text:disabled {
    border: none;
    background-color: #f6f6f8;
    cursor: not-allowed;
  }

  .page-numbers {
    display: flex;
  }

  .page-numbers button {
    background-color: transparent;
    border: none;
    color: #000;
    padding: 7px 10px;
    margin: 0 2px;
    cursor: pointer;
  }
  .page-numbers button.active {
    background-color: #ffe48e;
    color: #000;
    border-radius: 50px;
  }
`

export default LandlordPropertiesPagination
