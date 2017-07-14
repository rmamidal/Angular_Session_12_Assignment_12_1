import{ Routes, RouterModule } from "@angular/router"
import { AddMovieComponent } from './Component/add-movie.component'
import { ListMovieComponent } from './Component/list-movie.component'

export const ApplicationRoutes: Routes = [
    { path:'', component: AddMovieComponent },
    { path:'add-movie', component: AddMovieComponent },
    { path:'list-movie', component: ListMovieComponent }
]