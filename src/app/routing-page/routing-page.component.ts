import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-routing-page',
  templateUrl: './routing-page.component.html',
  styleUrls: ['./routing-page.component.css']
})
export class RoutingPageComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.navigate( [ "/#" ], { relativeTo: this.route } );
  }



}
