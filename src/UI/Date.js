import React from 'react'

const DateComponent = () => {
     let current = new Date();
      let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
      let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    
     return (
          <div className='Date'>               
               Last updated: {cDate+ ' ' + cTime}
          </div>
     )
}
export default DateComponent

