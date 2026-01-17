import { useState } from "react"

export default function Comments(){
    let[comments,setComments] = useState([{
        username:"qk",
        remarks:"great job",
rating:4
    }])
    return(
        <div>
            <h3>All comments</h3>
            <div className="comment">
                <span>{comments[0].remarks}</span>
                &nbsp;
                   <span>{comments[0].rating}</span>
            </div>
        </div>
    )
}