import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function recomenderValidator(data: any): ValidatorFn {
    console.log('validator called...', data);
    
    return (control: AbstractControl): ValidationErrors | null => {
    //   const forbidden = nameRe.test(control.value);
    //   return forbidden ? {forbiddenName: {value: control.value}} : null;

    const count:any = {};
        const result = [];
      
        data.forEach((item:any) => {
          if (count[item]) {
            count[item] += 1;
            return;
          }
          count[item] = 1;
        });
      
        for (let prop in count) {
          if (count[prop] >= 3) {
            result.push(prop);
          }
          if (count[prop] > 3) {
            console.log('Disabled...');
            return {controlDisabled: {disabled: true}};
          }
        }
      
        console.log(count);
        return result;

           // let count = 0;
    // let recomenderNameChecker = control.value;
    // for (let i = 0; i < data.length; i++) {
    //     const recomenderName = data.recomender;
    //     if (recomenderNameChecker === recomenderName) {
    //         count++;
    //         recomenderNameChecker = recomenderName;
    //     }
    // }

    // if (count > 3) {
    //     return {controlDisabled: {disabled: true}};
    // } else {
    //     return null;
    // }

  }
}

// function findSimilarWord(array:any) {
//     const count:any = {};
//     const result = [];
  
//     array.forEach((item:any) => {
//       if (count[item]) {
//         count[item] += 1;
//         return;
//       }
//       count[item] = 1;
//     });
  
//     for (let prop in count) {
//       if (count[prop] >= 3) {
//         result.push(prop);
//       }
//       if (count[prop] > 3) {
//         console.log('Disabled...');
//       }
//     }
  
//     console.log(count);
//     return result;
//   }