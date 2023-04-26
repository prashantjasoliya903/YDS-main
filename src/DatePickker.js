import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css// 
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
const DatePickker = () => {  
  //  const [startDate, setStartDate] = useState(new Date());  
    const [startDate, setStartDate] = useState(null);

        return (      
            <DatePicker
            placeholderText="Birth Date"
           
            yearDropdownItemNumber={60}
            showYearDropdown
            scrollableYearDropdown
            scrollableMonthYearDropdown
            className='form-control form-group'
            dateFormat="MMMM d, yyyy"
            selected={startDate}
            selectsStart
            startDate={startDate}
            
            onChange={date => setStartDate(date)}
            disabledKeyboardNavigation
            onFocus={e => e.target.blur()}
          />
    //     <DatePicker
    //     id="birthdate"
    //     placeholderText="dd/mm/yyyy"
    //     className='form-control form-group'
    //         onChange={date => {
    //            document.getElementById("birthdate").TextField=date
    //             console.log(date);
    //     //setStartDate(date)
       
    
    // }
    // } 
    // disabledKeyboardNavigation
   
    // renderInput={(params) => <TextField {...params} />}
    // onFocus={e => e.target.blur()} // <--- Adding this
    //   />
   );
};
export default DatePickker;