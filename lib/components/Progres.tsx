import React from 'react';
import { Flex, Progress } from 'antd';

const Progressing: React.FC = () => (
    <Flex vertical gap="middle">
        <Flex className={'flex flex-col'} vertical gap="small"  style={{ width:300 }}>
          <div className={'flex flex-row'}><p className={'my-0 flex  w-[70px]'}>5 stars</p>  <Progress percent={99.9} size={[213, 16]} strokeColor="#C78800"/></div>
          <div className={'flex flex-row'}><p className={'my-0 flex  w-[70px]'}>4 stars</p>  <Progress percent={0} size={[213, 16]} strokeColor="#C78800"/></div>
          <div className={'flex flex-row'}><p className={'my-0 flex  w-[70px]'}>3 stars</p>  <Progress percent={0} size={[213, 16]} strokeColor="#C78800"/></div>
          <div className={'flex flex-row'}><p className={'my-0 flex  w-[70px]'}>2 stars</p>  <Progress percent={0} size={[213, 16]} strokeColor="#C78800"/></div>
          <div className={'flex flex-row'}><p className={'my-0 flex  w-[70px]'}>1 star </p>  <Progress percent={0} size={[213, 16]} strokeColor="#C78800"/></div>
        </Flex>


    </Flex>
);

export default Progressing;