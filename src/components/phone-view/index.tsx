import { memo } from "react";

import { Avatar, Card } from "antd";

const PhoneView = () => {
  //   const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className="container grid grid-cols-4 gap-5 mt-5">
      <Card loading={false}>
        <Card.Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          }
          title="Card title"
          description={
            <>
              <p>This is the description</p>
              <p>This is the description</p>
            </>
          }
        />
      </Card>
    </div>
  );
};

export default memo(PhoneView);
