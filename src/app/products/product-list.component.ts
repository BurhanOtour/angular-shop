import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
/**
 * The component has a life cycle, angular provides a set of lifecycle hooks.
 **/

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[];
  _listFilter: string;

  products: IProduct[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2016',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      imageUrl: 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2016',
      description: 'Curved claw steel hammer',
      price: 8.9,
      imageUrl: 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
    }
  ];

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }

}
