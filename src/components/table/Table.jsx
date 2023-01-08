import Button from "../button/Button";
import "./table.css";
import { useNavigate } from "react-router";
const Table = ({ columns, rows }) => {
  const navigate = useNavigate();
  return (
    <table>
      <tr>
        {columns?.map((column) => {
          return <th>{column.label}</th>;
        })}
        <th></th>
      </tr>
      {rows?.map((row) => {
        return (
          <tr>
            {columns.map((column) => {
              return <td> {row[column.fieldName]} </td>;
            })}
            <td>
              <Button onClick={() => navigate(`../details/${row.id}`)}>
                Details
              </Button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
