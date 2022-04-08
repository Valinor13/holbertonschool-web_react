import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  tableHeader: {
    borderBottom: "3px solid lightgrey",
  },
  colHeader: {
    textAlign: "left",
    borderBottom: "3px solid lightgrey",
  },
  bodyStyle: {
    backgroundColor: "#f5f5f5ab",
  },
  headerStyle: {
    backgroundColor: "#deb5b545",
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [checked, setChecked] = React.useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  if (isHeader) {
    if (textSecondCell) {
      return (
        <tr
          className={checked ? css(styles.rowChecked) : css(styles.headerStyle)}
        >
          <th className={css(styles.colHeader)}>
            <input type="checkbox" checked={checked} onChange={handleChecked} />
            {textFirstCell}
          </th>
          <th className={css(styles.colHeader)}>{textSecondCell}</th>
        </tr>
      );
    }
    return (
      <tr
        className={checked ? css(styles.rowChecked) : css(styles.headerStyle)}
      >
        <th className={css(styles.tableHeader)} colSpan={2}>
          <input type="checkbox" checked={checked} onChange={handleChecked} />
          {textFirstCell}
        </th>
      </tr>
    );
  }
  return (
    <tr className={checked ? css(styles.rowChecked) : css(styles.bodyStyle)}>
      <td>
        <input type="checkbox" checked={checked} onChange={handleChecked} />
        {textFirstCell}
      </td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
