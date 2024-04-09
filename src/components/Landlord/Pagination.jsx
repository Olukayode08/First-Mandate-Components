import React from 'react'
import styled from 'styled-components'

const Pagination = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
  handlePageChange,
}) => {
  const goToPage = (pageNumber) => {
    handlePageChange(pageNumber)
  }
  return (
    <PManager>
      <section>
        <div className='pagination'>
          <button
            className='pag-text'
            disabled={currentPage === 1}
            onClick={handlePrevPage}
          >
            Previous Page
          </button>
          <div className='page-numbers'>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  className={currentPage === page ? 'active' : 'pag-text'}
                  onClick={() => goToPage(page)} 
                >
                  {page}
                </button>
              )
            )}
          </div>
          <button
            className='pag-text'
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            Next Page
          </button>
        </div>
      </section>
    </PManager>
  )
}

const PManager = styled.section`
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

export default Pagination
