import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';

export interface UserData {
  id: string;
  name: string;
  progress: number;
  color: string;
}
const ELEMENT_DATA: UserData[] = [
  { id: '1', name: 'Hydrogen', progress: 80, color: 'blue' },
  { id: '2', name: 'Helium', progress: 60, color: 'green' },
  { id: '3', name: 'Lithium', progress: 90, color: 'red' },
  { id: '4', name: 'Beryllium', progress: 40, color: 'yellow' },
];

//Standalone Component: Declared with standalone: true and imported where needed, rather than declared in NgModule.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatTableModule,MatSort,MatPaginator, MatSelectModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selectedSortColumn: string = 'name';

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.customizeSort(this.selectedSortColumn);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  customizeSort(sortColumn: string) {
    this.dataSource.sortingDataAccessor = (item:any, property) => {
      switch (sortColumn) {
        case 'name': return item.name.toLowerCase();
        case 'progress': return item.progress;
        case 'color': return item.color.toLowerCase();
        default: return item[property];
      }
    };
    this.dataSource.sort = this.sort; // Refresh sorting
  }
}
