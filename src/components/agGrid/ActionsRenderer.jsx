import React from "react";
import { Button, Row, Tooltip } from "antd";
import { FaAngellist } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default ({ button }) => {
  return (
    <Row>
      <Tooltip title="حذف">
        <Button
          key={button.key}
          type="default"
          style={{ height: 30, width: 30, marginLeft: "20px" }}
          icon={<MdDelete />}
          onClick={(e) => button.onClick(e)} // dispatch delete
        />
      </Tooltip>
    </Row>
  );
};
