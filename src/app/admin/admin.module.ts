import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { ShareModule } from '../share/share.module';
import { AddAlbumComponent } from './add-album/add-album.component';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from '../guard-service.service';

const adminRoutes : Routes = [
  { path: 'admin/add', canActivate: [GuardService], component: AddAlbumComponent}
]

@NgModule({
  declarations: [AlbumComponent, AddAlbumComponent],
  imports: [
    ShareModule,
    RouterModule.forChild(adminRoutes)

  ],
  exports : [AlbumComponent]
})
export class AdminModule { }
