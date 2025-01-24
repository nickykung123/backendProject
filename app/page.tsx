
export default function page() {
  const bmiCal = (height:number,weight:number) => {
    let h = (height/100)**2
    let bmi = weight/h
    
    return bmi
  }

  // console.log(bmiCal(180,60))
  
  return (
    
    <>
    <h1 className="text-red-600">Hello world</h1>
    <form action="" className="bg-purple-500 border border-red-600 text-gray-600">
      <input type="text" name="weight" id="wat" />
      <input type="text" id="height" name="hai" />
    <button type="submit" className="bg-blue-500">submit</button>
    </form>
    </>
  )
}