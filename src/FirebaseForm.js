import React from 'react'
import useState from 'react'


function FirebaseForm() {

    const [data, setData]=useState({
        name:'Ravi',
        email:'ravi@gmail.com'
    })


    function test()
    {

      setData({
        name:'Anil',
        email:'anil@gmail.com'
      })
    }
    // function handleChange(e)
    // {
    //     console.log(e.target.value);

    //     setData(e.target.value)
    // }

    // function submitHandler(e)
    // {
    //     e.preventDefault();  // page ko submit pr refresh se rokega
    //     setData({ name:'',   // Submit karne k baad saari value RESET ho jaaye
    //     email:''})
    //     alert("Data Saved")     // Submit k bad ek pop-up aa jaye
    // }


  return (
    <>
            <div className='container'>
            <div class="mb-3 mt-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
          </div>
          <div class="mb-3">
            <label for="pwd" class="form-label">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
          </div>
          <div class="form-check mb-3">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" name="remember"/> Remember me
            </label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
                <button onClick={test}>Change</button>
            </div>
    </>
  )
}

export default FirebaseForm