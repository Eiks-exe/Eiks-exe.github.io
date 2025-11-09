import './SelfDrawingSquare.css'

export const SelfDrawingSquare = () => {
  return (
          <div className="stage">
            <div id="lattice" className="lattice">
              <svg className='square' xmlns='hhtp://www.w3.org/2000/svg'  >
                <rect 
                  x="10"
                  y="105"
                  width="200"
                  height="200"
                  fill="none"
                  fill-opacity="0"
                  stroke-width="3"
                  strokeDashoffset="100"
                />
              </svg> 
            </div>
          </div>
  )
}
