import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators/map';

import { query, QueryResponse } from './app.graphql';

@Component({
  selector: 'xc-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  links$ = this.apollo.query<QueryResponse>({ query })
    .pipe(
      map(({ data }) => data.links.edges.map(edge => edge.node)),
    );

  constructor(
    private apollo: Apollo,
  ) {
  }
}
