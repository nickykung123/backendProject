
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
    </>
  )
}