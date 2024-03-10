import React from 'react'
import Cards from '../components/cards/Cards'

const MyPost = () => {
  return (
    <div className='container mb-5'>
      <form className='mt-5'>
        <h2>Add New Post</h2>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" placeholder="Enter Title" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Content</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" name="content" rows="3"></textarea>
        </div>
        <div className="mb-3">
          <button type="button" class="btn btn-primary">Primary</button>
        </div>
      </form>
      <div className="mt-5">
        <h3>My Posts</h3>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default MyPost
