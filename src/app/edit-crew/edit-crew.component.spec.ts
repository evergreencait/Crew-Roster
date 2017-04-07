/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditCrewComponent } from './edit-crew.component';

describe('EditCrewComponent', () => {
  let component: EditCrewComponent;
  let fixture: ComponentFixture<EditCrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
