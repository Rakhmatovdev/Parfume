import { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

const Badger: React.FC = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    const decline = () => {
        let newCount = count - 1;
        if (newCount < 0) {
            newCount = 0;
        }
        setCount(newCount);
    };

    return (
        <ButtonGroup>
            <Button onClick={decline} icon={<MinusOutlined />} />
            <Button>{count}</Button> 
            <Button onClick={increase} icon={<PlusOutlined />} />
        </ButtonGroup>
    );
};

export default Badger;
