import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: "",
    component: OrderComponent
  },
  {
    path: "history",
    component: HistoryComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
