import React from 'react'
import { leadContent } from '../constants/programInfo'

const LeadContent = props => {

    return (
        <div className="flex flex-col text-center py-8">
            <h2 className="px-4">{leadContent.header}</h2>
            
            {/* update with school-specific info */}
            <p className="text-center px-8">{leadContent.paragraph}</p>
        </div>
    )
}
 
export default LeadContent