import { Button, Row, Tooltip } from "antd";
import { MdDelete } from "react-icons/md";
import { ButtonProps } from "./GridMainTypes";

const ActionsRenderer = ({ button }: { button: ButtonProps }) => {
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

export default ActionsRenderer;
