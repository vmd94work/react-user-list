import React from "react";
import { UilAngleDown, UilAngleUp } from "@iconscout/react-unicons";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <table className="table">
    <thead>
      <tr>
        <th onClick={props.onSort.bind(null, "id")}>
          ID
          {props.sortField === "id" ? (
            props.sort === "asc" ? (
              <small>
                <UilAngleDown />
              </small>
            ) : (
              <small>
                <UilAngleUp />
              </small>
            )
          ) : null}
        </th>
        <th onClick={props.onSort.bind(null, "firstName")}>
          First Name
          {props.sortField === "firstName" ? (
            props.sort === "asc" ? (
              <small>
                <UilAngleDown />
              </small>
            ) : (
              <small>
                <UilAngleUp />
              </small>
            )
          ) : null}
        </th>
        <th onClick={props.onSort.bind(null, "lastName")}>
          Last Name
          {props.sortField === "lastName" ? (
            props.sort === "asc" ? (
              <small>
                <UilAngleDown />
              </small>
            ) : (
              <small>
                <UilAngleUp />
              </small>
            )
          ) : null}
        </th>
        <th onClick={props.onSort.bind(null, "email")}>
          E-mail
          {props.sortField === "email" ? (
            props.sort === "asc" ? (
              <small>
                <UilAngleDown />
              </small>
            ) : (
              <small>
                <UilAngleUp />
              </small>
            )
          ) : null}
        </th>
        <th onClick={props.onSort.bind(null, "phone")}>
          Phone
          {props.sortField === "phone" ? (
            props.sort === "asc" ? (
              <small>
                <UilAngleDown />
              </small>
            ) : (
              <small>
                <UilAngleUp />
              </small>
            )
          ) : null}
        </th>
      </tr>
    </thead>
    <tbody>
      {props.data.map((item) => (
        <tr
          key={item.id + item.phone}
          onClick={props.onRowSelect.bind(null, item)}
        >
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
