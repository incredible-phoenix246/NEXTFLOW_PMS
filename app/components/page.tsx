import React from 'react';
import Checkbox from '@/components/checkbox';
import Switch from '@/components/switch';
import Progress from '@/components/progress';
import Radio from '@/components/radio';

const page = () => {
  return (
    <div className="items-center justify-center flex flex-col h-screen bg-green-400">
      <Checkbox color="blue" />
      <Switch color="red" />
      <Progress value={40} />
      <Radio />
    </div>
  );
};

export default page;
