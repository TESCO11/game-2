// @flow

import { observable, action } from 'mobx';

import type { BotType } from '../lib/types';

import { getBotsOnIsland } from '../lib/api-calls';

class Island {
  @observable bots: Array<BotType> = [];

  @action
  async updateBots(x: number, y: number) {
    const bots = await getBotsOnIsland(x, y);
    // $FlowFixMe
    this.bots.replace(bots);
  }
}

export default new Island();
