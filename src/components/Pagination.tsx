const Pagination = ({
  data,
  itemsPerPage,
  onPageChange,
  currentPage,
}: {
  data: any
  itemsPerPage: number
  onPageChange: any
  currentPage: number
}) => {
  const totalPages = Math.ceil(data.length / itemsPerPage)
  console.log('total pages', totalPages)
  console.log('data length', data.length)

  const handlePageChange = (page: number) => {
    onPageChange(page)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className='page-item'>
          <button
            className={`${
              i === currentPage
                ? 'poppins-semibold text-cyan-600'
                : 'poppins-medium text-gray-400'
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>
      )
    }

    return pageNumbers
  }

  return (
    <nav aria-label='Pagination' className='flex justify-center py-4'>
      <ul className='flex gap-3'>{renderPageNumbers()}</ul>
    </nav>
  )
}

export default Pagination
