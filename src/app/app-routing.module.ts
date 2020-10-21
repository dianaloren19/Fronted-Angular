
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes a los que les quiero hacer una pagina
import {StudentListComponent} from './components/student-list/student-list.component';
import {StudentDetailsComponent} from './components/student-details/student-details.component';
import {AddStudentComponent} from './components/add-student/add-student.component';



//array de rutas, todas las rutas que voy a crear
//creo un constante llamada routes, el array de objetos es de tipo Routes
const routes: Routes = [
  {path:'',redirectTo:'student',pathMatch:'full'},//ruta por defecto
  {path:'students',component:StudentListComponent},
  {path:'students/:id',component:StudentDetailsComponent},
  {path:'add',component:AddStudentComponent}

];

//Exportar el modulo de rutas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
