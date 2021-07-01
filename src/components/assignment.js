import React, {useEffect} from "react"
import { Link } from "react-router-dom"

const Assignment = ({ assignment }) => {
    
    const div = {
        textAlign: "left",
    }

    return (
        <div style={div}>
            <Link class="has-text-white" to={`/assignment/${assignment.id}`}>
                <h1 class="is-size-1">{assignment.task}</h1>
            </Link>
        </div>
    )
}

export default Assignment