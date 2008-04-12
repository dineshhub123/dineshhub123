/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReactformComponent } from './reactform.component';

describe('ReactformComponent', () => {
  let component: ReactformComponent;
  let fixture: ComponentFixture<ReactformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
