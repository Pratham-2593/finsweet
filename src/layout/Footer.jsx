import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container grid grid-cols-1 md:grid-cols-2 py-5' >
                    <div className=''>
                        <p>Copyright 2022, Finsweet.com</p>
                    </div>
                    <div className='grid justify-items-stretch'>
                        <ul className='flex justify-self-end gap-2 md:gap-4 lg:gap-10'>
                            <li><a href='#sec'>Home</a></li>
                            <li><a href='#sec-2'>About us</a></li>
                            <li><a href='#sec-4'>Features</a></li>
                            <li><a href='#sec-5'>Pricing</a></li>
                            <li><a href='#sec-5'>FAQ</a></li>
                            <li><a href='#sec-8'>Blog</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer