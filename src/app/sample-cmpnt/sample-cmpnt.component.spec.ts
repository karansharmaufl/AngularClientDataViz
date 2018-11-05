import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCmpntComponent } from './sample-cmpnt.component';

describe('SampleCmpntComponent', () => {
  let component: SampleCmpntComponent;
  let fixture: ComponentFixture<SampleCmpntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleCmpntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCmpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
