import { RouterStoreModule } from './router-store.module';

describe('RouterStoreModule', () => {
  let routerStoreModule: RouterStoreModule;

  beforeEach(() => {
    routerStoreModule = new RouterStoreModule();
  });

  it('should create an instance', () => {
    expect(routerStoreModule).toBeTruthy();
  });
});
