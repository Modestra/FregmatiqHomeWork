import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertgroupComponent } from './convertgroup.component';

describe('ConvertgroupComponent', () => {
  let component: ConvertgroupComponent;
  let fixture: ComponentFixture<ConvertgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertgroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConvertgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
