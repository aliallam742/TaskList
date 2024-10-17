import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { RouterModule } from '@angular/router';

const shared = [
    FormsModule,
    RouterModule,
    CommonModule,

]
@NgModule({
    declarations: [],
    imports: [shared],
    exports: [shared],

})
export class SharedModule { }
