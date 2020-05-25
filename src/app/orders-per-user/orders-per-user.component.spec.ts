import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPerUserComponent } from './orders-per-user.component';

describe('OrdersPerUserComponent', () => {
  let component: OrdersPerUserComponent;
  let fixture: ComponentFixture<OrdersPerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersPerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
