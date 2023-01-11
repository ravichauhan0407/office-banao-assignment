import React, { useState } from "react";
import {Table } from "antd";
import {data} from './TableData'
const columns = [
  {
    title: "Packages",
    dataIndex: "Package",
    key: "Packages",
    width: "40%",
  },
  {
    title: "Rate(in sqft)",
    dataIndex: "Rate",
    key: "Rate",
    width: "30%",
  },
  {
    title: "Total",
    dataIndex: "Total",
    width: "30%",
    key: "Total",
  },
];


// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};
export const Overview = () => {
  const [checkStrictly, setCheckStrictly] = useState(false);
  return (
    <>
      <Table
        columns={columns}
        rowSelection={{
          ...rowSelection,
          checkStrictly,
        }}
        dataSource={data}
        pagination={false}
      />
    </>
  );
};
