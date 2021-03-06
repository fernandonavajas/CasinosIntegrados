//En este archivo incluir todo lo necesario de angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule,  } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule } from '@angular/material/autocomplete';



//abeja
const modulos=[
    MatSortModule, 
    MatInputModule,
    MatPaginatorModule, 
    MatFormFieldModule,
    MatTableModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatToolbarModule, 
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule


]

@NgModule({

    imports: [modulos],
    exports: [modulos]
})
export class MaterialModule { }