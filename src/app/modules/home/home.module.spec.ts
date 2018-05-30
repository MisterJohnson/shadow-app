import { HomeModule } from './home.module';

describe('homeModule', () => {
  let homeModule: homeModule;

  beforeEach(() => {
    homeModule = new HomeModule();
  });

  it('should create an instance', () => {
    expect(homeModule).toBeTruthy();
  });
});
