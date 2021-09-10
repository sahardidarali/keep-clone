import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className="navigation">
                <ul>
                    <Link to="/">
                        <li className="icon">
                            <i className="lightbulb outline big icon"></i>
                            <span className="title">Notes</span>

                        </li>
                    </Link>
                    <Link to="/archive">
                        <li className="icon">
                            <i className="archive big icon"></i>
                            <span   className="title">Archive</span>
                        </li>
                    </Link>
                    <Link to="/bin">
                        <li className="icon">
                            <i className="trash alternate outline big icon"></i>
                            <span   className="title">Bin</span>

                        </li>
                    </Link>
                </ul>
            </div>
    )
}
