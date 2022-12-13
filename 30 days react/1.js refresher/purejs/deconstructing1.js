const rectangle = {
    width: 20,
    height: 10,
  }
  
  let w = rectangle.width
  let h = rectangle.height
  
  /*
  
  or 
  
  let width = rectangle[width]
  let height = recangle[height]
  
  */
  
  console.log(w+h)
  
  //this is how deconstucting works :
  /*
  When we destructure an object the name of the variable should be exactly the same as the key or property of the object.
  */
  
  const rectangle1 = {
    width1: 20,
    height1: 10,
  }
  
  let { width1, height1 } = rectangle1
  console.log(width1, height1) 