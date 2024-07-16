import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const usePagination = (basePath, initialPage = 1) => {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const currentPageParam = parseInt(searchParams.get('page')) || initialPage
  const [currentPage, setCurrentPage] = useState(currentPageParam)

  useEffect(() => {
    navigate(`${basePath}?page=${currentPage}`, { replace: true })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage, navigate, basePath])

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

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
