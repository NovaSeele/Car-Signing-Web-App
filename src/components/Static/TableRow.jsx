/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "./Table.css";

import { BrowserRouter as Route, Link, Routes } from "react-router-dom";

export const TableRow = (props) => {
    const id = props.id;
    const name = props.name;
    const owner = props.owner;
    const license = props.license;
    const status = props.status;
    const start = props.start;
    const end = props.end;
    const owner_id = props.owner_id;
    const vehicle_id = props.vehicle_id;
    // calcluate the remaining days as format yyyy-mm-dd from start and end
    const remaining = Math.floor((Date.parse(end) - Date.parse(start)) / 86400000);

    const statusText = () => {
        if (status === 1) {
            return <p className="status signed">Signed</p>;
        } else if (status === 0) {
            return <p className="status pending">Pending</p>;
        } else {
            return <p className="status not-signed">Unsigned</p>;
        }
    }
    
    return (
        <>
            <tr>
                <td>{id}</td>
                <td className="profile-link">
                    <Link to="/carinfo">
                        <strong>{name}</strong>
                    </Link>
                </td>
                <td className="profile-link">
                    <Link to={`/userinfo?owner_id=${owner_id}`}>
                        <strong>{owner}</strong>
                    </Link>
                </td>
                <td>{license}</td>
                <td>
                    {statusText()}
                </td>
                <td>{start}</td>
                <td>{end}</td>
                <td>{remaining} ngày</td>
            </tr>
        </>
    );
};
