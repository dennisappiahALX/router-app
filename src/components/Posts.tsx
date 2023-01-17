import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
import queryString from 'query-string'

const Posts = () => {
  let { year, month } = useParams();
  let location = useLocation();

  const { sortBy} = queryString.parse(location.search)

  return (
    <div>
      <h1>Posts</h1>
      Year:{year} , Month:{month}
    </div>
  )
}

export default Posts