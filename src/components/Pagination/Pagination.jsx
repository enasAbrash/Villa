import React from 'react'
import './PaginationStyle.css'
const Pagination = () => {
  return (
    <div class="p-row">
    <div class="p-col-lg-12">
      <ul class="pagination">
        <li><a href="#">1</a></li>
        <li><a class="is_active" href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">&gt;&gt;</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Pagination