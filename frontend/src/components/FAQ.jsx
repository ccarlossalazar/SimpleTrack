import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

const FAQ = () => {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)

    const toggleOpen1 = () => {
        setOpen1(!open1)
    }

    const toggleOpen2 = () => {
        setOpen2(!open2)
    }    
    const toggleOpen3 = () => {
        setOpen3(!open3)
    }    
    const toggleOpen4 = () => {
        setOpen4(!open4)
    }

    return(
        <>
        <div className="flex-col pl-20 pr-20 space-y-2 pb-30">
        <div onClick={toggleOpen1} className="shadow-md flex flex-col w-full p-5 justify-between">
        <div className='flex-col'>
        <div className='flex justify-between'>
        <h1 className='text-lg font-bold text-[#003768]'>What are the Rec Center's operating hours?</h1>
        {open1 ? (<RemoveIcon className='text-[#003768]'/>):(<AddIcon className='text-[#003768]'/>)}
        </div>
        {open1 && (
        <>
        <div className='p-5 font-semibold'>
        </div>
        </>
        )}
        </div>
        </div>
        <div onClick={toggleOpen2} className="shadow-md flex flex-col w-full p-5 justify-between">
        <div className='flex-col'>
        <div className='flex justify-between'>
        <h1 className='text-lg font-bold text-[#003768]'>Who can use the Rec Center?</h1>
        {open2 ? (<RemoveIcon className='text-[#003768]'/>):(<AddIcon className='text-[#003768]'/>)}
        </div>
        {open2 && (
        <>
        <div className='p-5 font-semibold'>
        <h1 className='text-lg'>Access to the Joseph L. Alioto Recreation Center is available to:</h1>
        <br></br>
        <ul className='text-lg'>
            <li>- Current students, faculty, and staff of Saint Mary’s College of California</li>
            <li>- Spouses and dependents of faculty or staff (with proper registration)</li>
            <li>- Alumni, under specific membership guidelines</li>
            <li>- Guests, when sponsored by a current student, faculty, or staff member (must present a valid ID)</li>
        </ul>
         <br></br>
        <h1 className='text-lg'>All users must check in at the front desk with a valid Saint Mary’s ID or approved guest credentials.</h1>
        </div>
        </>
        )}
        </div>
        </div>
        <div onClick={toggleOpen3} className="shadow-md flex flex-col w-full p-5 justify-between ">
        <div className='flex-col'>
        <div className='flex justify-between'>
        <h1 className='text-lg font-bold text-[#003768]'>Can I rent equipment from the Rec Center?</h1>
        {open3 ? (<RemoveIcon className='text-[#003768]'/>):(<AddIcon className='text-[#003768]'/>)}
        </div>
        {open3 && (
        <div className='p-5 font-semibold'>
        <h1 className='text-lg'>Yes! We offer a variety of recreational equipment 
            available for checkout at the front desk. Some of the items available 
            include:</h1>
             <br></br>
        <ol className='text-lg'>
           <li>- Spikeball sets</li> 
           <li>- Cornhole boards</li> 
           <li>- Giant Jenga</li> 
           <li>- Yoga mats</li> 
           <li>- Soccer balls</li> 
           <li>- Resistance bands</li> 
           <li>- And more!</li> 
        </ol>
         <br></br>
        <h1 className='text-lg'>To request equipment, please complete the 
        Equipment Checkout Form or inquire in person at the front desk. Valid 
        ID is required, and some equipment may require a refundable deposit.</h1>
        </div>
        )}
        </div>
        </div>
        <div onClick={toggleOpen4} className="shadow-md flex flex-col w-full p-5 justify-between">
        <div className='flex-col'>
        <div className='flex justify-between'>
        <h1 className='text-lg font-bold text-[#003768]'>Question 4</h1>
        {open4 ? (<RemoveIcon className='text-[#003768]'/>):(<AddIcon className='text-[#003768]'/>)}
        </div>
        {open4 && (
        <>
        <div className='p-5 font-semibold'>
        <h1 className='text-lg'>Open</h1>
        </div>
        </>
        )}
        </div>
        </div>
        </div>
        </>
    )
}

export default FAQ