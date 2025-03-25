import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifService } from '../../services/gifs.services.ts.service';

@Component({
  selector: 'app-gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryComponent {
  gifService = inject(GifService);

  query = toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['query'])));

  gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));
}
