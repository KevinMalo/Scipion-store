import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {
    doubleSlider = [1000, 500000];
    doubleSlider2 = [0, 28];
    doubleSlider3 = [0, 15];
    
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    
    focus;

    data : Date = new Date();

    constructor() { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('ecommerce-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');

        this.dropdownList = [
            {"id":1,"itemName":"7ACRES"},
            {"id":2,"itemName":"Ace Valley"},
            {"id":3,"itemName":"Acreage Pharms"},
            {"id":4,"itemName":"AHLOT"},
            {"id":5,"itemName":"AltaVie"},
            {"id":6,"itemName":"Aurora"},
            {"id":7,"itemName":"Broken Coast"},
            {"id":8,"itemName":"Canaca"},
            {"id":9,"itemName":"Canna Farms"},
            {"id":10,"itemName":"Cove"},
            {"id":11,"itemName":"DNA Genetics"},
            {"id":12,"itemName":"Edison"},
            {"id":13,"itemName":"Emerald"},
            {"id":13,"itemName":"Fireside"},
            {"id":13,"itemName":"Flowr"},
            {"id":13,"itemName":"Gage Cannabis Co."},
            {"id":13,"itemName":"Haven St."},
            {"id":13,"itemName":"Northern Green Canada"},
            {"id":13,"itemName":"Ontario Cannabis Store"},
            {"id":13,"itemName":"Plain Packaging"},
            {"id":13,"itemName":"Redecan"},
            {"id":13,"itemName":"Royal High"},
            {"id":13,"itemName":"San Rafael '71"},
            {"id":13,"itemName":"Seven Oaks"},
            {"id":13,"itemName":"Solei"},
            {"id":13,"itemName":"Spinach"},
            {"id":13,"itemName":"Symbl"},
            {"id":13,"itemName":"Tokyo Smoke"},
            {"id":13,"itemName":"Trailblazer"},
            {"id":13,"itemName":"Tweed"},
            {"id":13,"itemName":"Up"},
            {"id":13,"itemName":"Vertical"},
            {"id":13,"itemName":"WeedMD"},
            {"id":13,"itemName":"Whistler Cannabis Co."},
            {"id":13,"itemName":"Woodstock"}
          ];

        this.selectedItems = [];

        this.dropdownSettings = {
                singleSelection: false,
                text:"Seleccionar marcas",
                selectAllText:'Selecionar todos',
                unSelectAllText:'Deseleccionar todos',
                enableSearchFilter: true,
                classes:""
              };

    }

    onItemSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any){
        console.log(items);
    }
    onDeSelectAll(items: any){
        console.log(items);
    }

    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('ecommerce-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
}
