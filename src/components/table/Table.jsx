import Button from "../button/Button";
import "./table.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../store/userDetailsSlice";
const Table = ({
  columns,
  rows,
  currentPage,
  handleNextPage,
  handlePrevPage,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <table>
      <tr>
        {columns?.map((column, index) => {
          return <th key={index}>{column.label}</th>;
        })}
        <th></th>
      </tr>
      {rows?.map((row, index) => {
        return (
          <tr key={index}>
            {columns.map((column) => {
              return <td> {row[column.fieldName]} </td>;
            })}
            <td>
              <Button
                onClick={() => {
                  dispatch(setUserDetails({ data: { ...row } }));
                  navigate(`../details/${row.user_type}/${row.id}`);
                }}
              >
                Details
              </Button>
            </td>
          </tr>
        );
      })}

      <button onClick={handlePrevPage}> Prev </button>
      {currentPage}
      <button onClick={handleNextPage}> Next </button>
    </table>
  );
};

export default Table;
