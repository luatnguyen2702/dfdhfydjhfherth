import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-load-category-admin',
  templateUrl: './load-category-admin.component.html',
  styleUrls: ['./load-category-admin.component.css']
})
export class LoadCategoryAdminComponent implements OnInit {

  categories:any
  constructor(
    private _cat:CategoryService,
    private snack:MatSnackBar) { }

  ngOnInit(): void {
    this._cat.categories().subscribe((data:any)=>{
      this.categories = data;
    },(error)=>{
      this.snack.open('Error in loading categories from server','',{
        duration:2000,
      });
    });
  }
}

