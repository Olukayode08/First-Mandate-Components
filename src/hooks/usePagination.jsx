import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const usePagination = (basePath, initialPage = 1) => {
  const navigate = useNavigate()
  const location = useLocation()
  // Extracts the query parameters from the URL
  const searchParams = new URLSearchParams(location.search)
  // Parses the page parameter from the URL, or defaults to initialPage
  const currentPageParam = parseInt(searchParams.get('page')) || initialPage
  const [currentPage, setCurrentPage] = useState(currentPageParam)

  useEffect(() => {
    navigate(`${basePath}?page=${currentPage}`, { replace: true })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage, navigate, basePath])

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }
// Decreases the currentPage by 1, ensuring it doesn't go below 1.
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  return {
    currentPage,
    setCurrentPage,
    handleNextPage,
    handlePrevPage,
  }
}

export default usePagination
