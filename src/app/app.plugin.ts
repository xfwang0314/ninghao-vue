import { Plugin } from 'vuex';
import { RootState } from './app.store';
export const logger: Plugin<RootState> = store => {
  store.subscribe((mutation, state) => {
    console.log('logger:', mutation);
    console.log('logger:', state);
  });
};
