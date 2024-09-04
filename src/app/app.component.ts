import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
}
