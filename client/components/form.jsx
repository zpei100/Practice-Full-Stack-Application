import React from 'react';

export default function() {




  return (
    <form className="form-group ml-4 mt-4">
      <label for="name">Enter a name</label>
      <input className="form-control" type="text" name="name" ></input>

      <label for="name">Enter a balance</label>
      <input className="form-control" type="number" name="name" ></input>

      <label for="name">Enter your age</label>
      <input className="form-control" type="number" name="name" ></input>

      <label for="name">Enter your email</label>
      <input className="form-control" type="text" name="name" ></input>

      <button type="submit" className="btn btn-dark mt-4">Submit</button>
    </form>
  )
}