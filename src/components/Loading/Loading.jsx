import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';


// json Styles
const styles = { height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#24091F' }
const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

const Loading = () => {
  return (
    
    <div style={styles}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Loading;

