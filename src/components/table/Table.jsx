import "./table.css";

const Table = ({ columns, rows }) => {
  return (
    <table>
      <tr>
        {columns?.map((column) => {
          return <th>{column.label}</th>;
        })}
      </tr>
      {rows?.map((row) => {
        return (
          <tr>
            {columns.map((column) => {
              return <td> {row[column.fieldName]} </td>;
            })}
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
