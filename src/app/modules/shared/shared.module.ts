import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [ CommonModule, HttpClientModule,  ],
    exports: [ CommonModule, FormsModule ],
    providers: [],
   })
   export class SharedModule { }
