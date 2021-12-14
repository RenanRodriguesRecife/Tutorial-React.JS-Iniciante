import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, name, full_name,owner:{ Login }}) => {
        return <li key={id}><Link to={`/repos/${Login}/${name}`}>{full_name}</Link></li>;
}

export default Item