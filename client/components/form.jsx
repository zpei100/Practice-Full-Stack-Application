import React from 'react';

export default function() {




  return (
    <div className="ml-4 mt-4">
    <p className="font-weight-bold text-center" style={{fontSize: '2rem'}}>Create a new entry</p>
    <form className="form-group shadow-sm bg-white">
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
    </div>
  )
}