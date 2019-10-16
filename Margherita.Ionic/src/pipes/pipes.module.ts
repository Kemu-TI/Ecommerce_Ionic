import { NgModule } from '@angular/core';
import { RealPipe } from './real/real';
import { OrderByPipe } from './order-by/order-by';
//import { OrderbyPipe } from './orderby/orderby';
@NgModule({
	declarations: [RealPipe,
    OrderByPipe,
    //OrderbyPipe
],
	imports: [],
	exports: [RealPipe,
    OrderByPipe,
   // OrderbyPipe
]
})
export class PipesModule {}
