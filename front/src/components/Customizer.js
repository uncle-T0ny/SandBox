import React from 'react';
import { BTCInfoBlock } from './BTCInfoBlock/BTCInfoBlock';
import { ETHInfoBlock } from './ETHInfoBlock/ETHInfoBlock';
import config from './../../config';

const versions = {
  v1: BTCInfoBlock,
  v2: ETHInfoBlock
};

function InfoBlock() {
  const Component = versions[config.version];
  return <Component />;
}

export { InfoBlock };