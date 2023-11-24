import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcryptEncryptorComponent } from './bcrypt-encryptor.component';

describe('BcryptEncryptorComponent', () => {
  let component: BcryptEncryptorComponent;
  let fixture: ComponentFixture<BcryptEncryptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcryptEncryptorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BcryptEncryptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
