import { async, ComponentFixture, TestBed,fakeAsync,tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,

      ],
    }).compileComponents();
  });
  let component: AppComponent;
  let firstInput:any;
  let secondInput:any;
  let result:any;
  let fixture: ComponentFixture<AppComponent>;
 
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    firstInput = fixture.nativeElement.querySelector('#firstValue');
    secondInput = fixture.nativeElement.querySelector('#secondValue');
    result = fixture.nativeElement.querySelector('#result');
    fixture.detectChanges();
    fixture.whenStable();
  });



  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title db-challenge-app', () => {
    expect(component.title).toEqual('db-challenge-app');
  });

  it('should render header \'Welcome to app!!\' in a h1 tag',
    async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to Devider app!');
    })
  );
  it('should render first input label ', () => {
    let firstLabel = fixture.nativeElement.querySelector('#Initial');
    expect(firstLabel.textContent).toContain('Add Initial Value');
  });
  it('should render second input label', () => {
    let lable = fixture.nativeElement.querySelector('#second');
    expect(lable.textContent).toContain('Add Devider value');
  });

  it('should render label total result',
    async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#totalResult').textContent).toContain('Total Result');
    })
  );


function sendInput(inputElement: any, text: number) {
  inputElement.value = text;
  inputElement.dispatchEvent(new Event('change'));
  fixture.detectChanges();
  return fixture.whenStable();
}

it('should call value changes and display result', async(() => {
  sendInput(firstInput, 120)
  .then(() => {
      return sendInput(secondInput, 20)
  }).then(() => {
    return sendInput(result, 120/20)
  }).then(() => {
    expect(parseInt(result.value)).toEqual(6);
      fixture.detectChanges();
  });
}));


it('first field should be valid', async(() => {
  sendInput(firstInput, 120)
  .then(() => {
    expect(parseInt(firstInput.validity.valid)).toBeTrue;
  });
}));

  it('should allow us to set a bound input field', fakeAsync(() => {
    setInputValue(firstInput, 120); 
    setInputValue(secondInput, 20);  
    setInputValue(result, 6);   
    expect(parseInt(firstInput.value)).toEqual(120);
    expect(parseInt(secondInput.value)).toEqual(20);
    expect(parseInt(result.value)).toEqual(120/20);
  }));
  // must be called from within fakeAsync due to use of tick()
  function setInputValue(inputElement: any, text: number) {
    fixture.detectChanges();
    tick();
    inputElement.value = text;
    inputElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  }
});
   
  

