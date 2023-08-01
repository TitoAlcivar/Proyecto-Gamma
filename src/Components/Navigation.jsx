import React from 'react'
import Cafe from '../assets/Cafe.png'

export const Navigation = () => {
    return (
        <div>
            <div>
                <a href='../pages/Home'>
                    <div>
                        <img src={Cafe} alt='cafe+' />
                    </div>
                </a>
            </div>
        </div >
    )
}
