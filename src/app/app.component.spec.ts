import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule
    ]
    }).compileComponents();
  });
 
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'db-challenge-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('db-challenge-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('db-challenge-app app is running!');
  });

  it('should display result', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    compiled.querySelector('#firstValue').value = 120;
    compiled.querySelector('#secondValue').value = 12;
    expect(compiled.querySelector('#result').value).toEqual(120/12);
  });

  it('should first divident field valid', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    let divident = compiled.form.controls['firstInputDivisibleValue'];
    expect(divident.valid).toBeFalsy();
    divident.setValue("");
    expect(divident.hasError('required')).toBeTruthy();
    divident.setValue("123");
    expect(divident.hasError('minLength')).toBeTruthy();
});
it('should second divident field valid', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement;
  let secDivident = compiled.form.controls['secondInputDivisibleValue'];
  expect(secDivident.valid).toBeFalsy();
  secDivident.setValue("");
  expect(secDivident.hasError('required')).toBeTruthy();
  secDivident.setValue("3");
  expect(secDivident.hasError('minLength')).toBeTruthy();
});
});
